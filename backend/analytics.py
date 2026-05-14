import hashlib
import json
import os
from datetime import datetime, time, timezone
from urllib.parse import urlparse

from sqlalchemy import and_, func
from sqlalchemy.orm import Session

import models
import schemas

CLICK_EVENT_TYPES = {"click", "cta_click", "nav_click", "external_link_click"}
FUNNEL_STAGES = [
    "sessions",
    "hero_view",
    "services_view",
    "contacts_view",
    "form_start",
    "form_submit_attempt",
    "form_submit_success",
]


def hash_value(value: str | None) -> str | None:
    if not value:
        return None
    salt = os.getenv("ANALYTICS_SALT", "change-me")
    return hashlib.sha256(f"{salt}:{value}".encode("utf-8")).hexdigest()


def upsert_session(
    db: Session,
    payload: schemas.AnalyticsSessionCreate,
    ip_address: str | None = None,
    user_agent: str | None = None,
) -> models.AnalyticsSession:
    session = db.query(models.AnalyticsSession).filter(models.AnalyticsSession.session_id == payload.session_id).first()
    values = payload.model_dump()
    values["consent_analytics"] = 1 if payload.consent_analytics else 0
    values["user_agent_hash"] = hash_value(user_agent)
    values["ip_hash"] = hash_value(ip_address)

    if session:
        for key, value in values.items():
            if value is not None or key in {"consent_analytics"}:
                setattr(session, key, value)
        session.updated_at = datetime.now(timezone.utc)
    else:
        session = models.AnalyticsSession(**values)
        db.add(session)

    db.commit()
    db.refresh(session)
    return session


def create_event(db: Session, payload: schemas.AnalyticsEventCreate) -> models.AnalyticsEvent:
    values = payload.model_dump()
    metadata = values.get("metadata_json")
    if isinstance(metadata, dict):
        values["metadata_json"] = json.dumps(metadata, ensure_ascii=False)
    event = models.AnalyticsEvent(**values)
    db.add(event)
    db.commit()
    db.refresh(event)
    return event


def end_session(db: Session, payload: schemas.AnalyticsSessionEnd) -> models.AnalyticsSession | None:
    session = db.query(models.AnalyticsSession).filter(models.AnalyticsSession.session_id == payload.session_id).first()
    if not session:
        return None
    session.ended_at = datetime.now(timezone.utc)
    session.duration_seconds = max(payload.duration_seconds, 0)
    session.updated_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(session)
    return session


def parse_date_range(date_from: str | None, date_to: str | None):
    start = None
    end = None
    if date_from:
        start = datetime.combine(datetime.fromisoformat(date_from).date(), time.min).replace(tzinfo=timezone.utc)
    if date_to:
        end = datetime.combine(datetime.fromisoformat(date_to).date(), time.max).replace(tzinfo=timezone.utc)
    return start, end


def _session_filters(start: datetime | None, end: datetime | None):
    filters = []
    if start:
        filters.append(models.AnalyticsSession.started_at >= start)
    if end:
        filters.append(models.AnalyticsSession.started_at <= end)
    return filters


def _event_filters(start: datetime | None, end: datetime | None):
    filters = []
    if start:
        filters.append(models.AnalyticsEvent.created_at >= start)
    if end:
        filters.append(models.AnalyticsEvent.created_at <= end)
    return filters


def _count_by(query, column, fallback_label: str = "unknown") -> dict[str, int]:
    rows = query.with_entities(column, func.count()).group_by(column).all()
    result = {}
    for key, count in rows:
        label = key or fallback_label
        result[label] = count
    return result


def _referrer_label(referrer: str | None) -> str:
    if not referrer:
        return "direct"
    try:
        host = urlparse(referrer).netloc or referrer
        return host.replace("www.", "") or "direct"
    except Exception:
        return "other"


def _unique_sessions_for_events(db: Session, start: datetime | None, end: datetime | None, **filters) -> int:
    query = db.query(models.AnalyticsEvent.session_id).distinct()
    if start:
        query = query.filter(models.AnalyticsEvent.created_at >= start)
    if end:
        query = query.filter(models.AnalyticsEvent.created_at <= end)
    for key, value in filters.items():
        query = query.filter(getattr(models.AnalyticsEvent, key) == value)
    return query.count()


def get_summary(db: Session, date_from: str | None = None, date_to: str | None = None) -> dict:
    start, end = parse_date_range(date_from, date_to)
    session_filters = _session_filters(start, end)
    event_filters = _event_filters(start, end)
    session_query = db.query(models.AnalyticsSession).filter(and_(*session_filters)) if session_filters else db.query(models.AnalyticsSession)
    event_query = db.query(models.AnalyticsEvent).filter(and_(*event_filters)) if event_filters else db.query(models.AnalyticsEvent)

    total_sessions = session_query.count()
    total_page_views = event_query.filter(models.AnalyticsEvent.event_type == "page_view").count()
    total_clicks = event_query.filter(models.AnalyticsEvent.event_type.in_(CLICK_EVENT_TYPES)).count()
    total_cta_clicks = event_query.filter(models.AnalyticsEvent.event_type == "cta_click").count()
    avg_duration = int(session_query.with_entities(func.avg(models.AnalyticsSession.duration_seconds)).scalar() or 0)
    avg_scroll_depth = int(event_query.filter(models.AnalyticsEvent.event_type == "scroll_depth").with_entities(func.avg(models.AnalyticsEvent.scroll_depth)).scalar() or 0)

    by_referrer = {}
    for referrer, count in session_query.with_entities(models.AnalyticsSession.referrer, func.count()).group_by(models.AnalyticsSession.referrer).all():
        label = _referrer_label(referrer)
        by_referrer[label] = by_referrer.get(label, 0) + count

    section_views = (
        event_query.filter(models.AnalyticsEvent.event_type == "section_view")
        .with_entities(
            models.AnalyticsEvent.section_id,
            models.AnalyticsEvent.section_name,
            func.count(models.AnalyticsEvent.id),
        )
        .group_by(models.AnalyticsEvent.section_id, models.AnalyticsEvent.section_name)
        .order_by(func.count(models.AnalyticsEvent.id).desc())
        .limit(12)
        .all()
    )
    engagement_rows = (
        event_query.filter(models.AnalyticsEvent.event_type == "section_engagement")
        .with_entities(models.AnalyticsEvent.section_id, func.avg(models.AnalyticsEvent.duration_seconds))
        .group_by(models.AnalyticsEvent.section_id)
        .all()
    )
    engagement_by_section = {section_id: int(avg or 0) for section_id, avg in engagement_rows}
    top_sections = [
        {
            "section_id": section_id,
            "section_name": section_name,
            "views": views,
            "avg_engagement_seconds": engagement_by_section.get(section_id, 0),
        }
        for section_id, section_name, views in section_views
    ]

    top_clicked_elements = [
        {
            "element_id": element_id,
            "element_label": element_label,
            "element_role": element_role,
            "section_id": section_id,
            "clicks": clicks,
        }
        for element_id, element_label, element_role, section_id, clicks in (
            event_query.filter(models.AnalyticsEvent.event_type.in_(CLICK_EVENT_TYPES))
            .with_entities(
                models.AnalyticsEvent.element_id,
                models.AnalyticsEvent.element_label,
                models.AnalyticsEvent.element_role,
                models.AnalyticsEvent.section_id,
                func.count(models.AnalyticsEvent.id).label("clicks"),
            )
            .group_by(
                models.AnalyticsEvent.element_id,
                models.AnalyticsEvent.element_label,
                models.AnalyticsEvent.element_role,
                models.AnalyticsEvent.section_id,
            )
            .order_by(func.count(models.AnalyticsEvent.id).desc())
            .limit(12)
            .all()
        )
    ]

    scroll_depth_distribution = {}
    for depth in [25, 50, 75, 100]:
        scroll_depth_distribution[str(depth)] = _unique_sessions_for_events(db, start, end, event_type="scroll_depth", scroll_depth=depth)

    funnel = {
        "sessions": total_sessions,
        "hero_view": _unique_sessions_for_events(db, start, end, event_type="section_view", section_id="hero"),
        "services_view": _unique_sessions_for_events(db, start, end, event_type="section_view", section_id="services"),
        "contacts_view": _unique_sessions_for_events(db, start, end, event_type="section_view", section_id="contacts"),
        "form_start": _unique_sessions_for_events(db, start, end, event_type="form_start"),
        "form_submit_attempt": _unique_sessions_for_events(db, start, end, event_type="form_submit_attempt"),
        "form_submit_success": _unique_sessions_for_events(db, start, end, event_type="form_submit_success"),
    }
    conversion_rate = round((funnel["form_submit_success"] / total_sessions) * 100, 1) if total_sessions else 0

    recent_events = event_query.order_by(models.AnalyticsEvent.created_at.desc()).limit(20).all()
    return {
        "total_sessions": total_sessions,
        "total_page_views": total_page_views,
        "total_clicks": total_clicks,
        "total_cta_clicks": total_cta_clicks,
        "avg_duration_seconds": avg_duration,
        "avg_scroll_depth": avg_scroll_depth,
        "conversion_rate": conversion_rate,
        "by_device": _count_by(session_query, models.AnalyticsSession.device_type),
        "by_browser": _count_by(session_query, models.AnalyticsSession.browser),
        "by_os": _count_by(session_query, models.AnalyticsSession.os),
        "by_referrer": by_referrer,
        "by_utm_source": _count_by(session_query, models.AnalyticsSession.utm_source, "direct"),
        "by_utm_medium": _count_by(session_query, models.AnalyticsSession.utm_medium, "none"),
        "by_utm_campaign": _count_by(session_query, models.AnalyticsSession.utm_campaign, "none"),
        "top_sections": top_sections,
        "top_clicked_elements": top_clicked_elements,
        "scroll_depth_distribution": scroll_depth_distribution,
        "funnel": funnel,
        "recent_events": recent_events,
    }


def get_events_page(
    db: Session,
    page: int = 1,
    limit: int = 50,
    event_type: str | None = None,
    section_id: str | None = None,
    session_id: str | None = None,
) -> dict:
    page = max(page, 1)
    limit = min(max(limit, 1), 100)
    query = db.query(models.AnalyticsEvent)
    if event_type:
        query = query.filter(models.AnalyticsEvent.event_type == event_type)
    if section_id:
        query = query.filter(models.AnalyticsEvent.section_id == section_id)
    if session_id:
        query = query.filter(models.AnalyticsEvent.session_id == session_id)
    total = query.count()
    items = query.order_by(models.AnalyticsEvent.created_at.desc()).offset((page - 1) * limit).limit(limit).all()
    return {"items": items, "total": total, "page": page, "limit": limit, "pages": (total + limit - 1) // limit if total else 0}


def get_sessions_page(
    db: Session,
    page: int = 1,
    limit: int = 50,
    device_type: str | None = None,
    utm_source: str | None = None,
) -> dict:
    page = max(page, 1)
    limit = min(max(limit, 1), 100)
    query = db.query(models.AnalyticsSession)
    if device_type:
        query = query.filter(models.AnalyticsSession.device_type == device_type)
    if utm_source:
        query = query.filter(models.AnalyticsSession.utm_source == utm_source)
    total = query.count()
    items = query.order_by(models.AnalyticsSession.started_at.desc()).offset((page - 1) * limit).limit(limit).all()
    return {"items": items, "total": total, "page": page, "limit": limit, "pages": (total + limit - 1) // limit if total else 0}
