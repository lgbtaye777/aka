import csv
from datetime import datetime, timedelta, timezone
from io import StringIO

from sqlalchemy import asc, desc, func, or_
from sqlalchemy.orm import Session

import models
import schemas

ALLOWED_STATUSES = {"new", "in_progress", "contacted", "done", "rejected"}
ALLOWED_SORT_FIELDS = {
    "id": models.Lead.id,
    "name": models.Lead.name,
    "email": models.Lead.email,
    "company": models.Lead.company,
    "project_type": models.Lead.project_type,
    "budget": models.Lead.budget,
    "status": models.Lead.status,
    "created_at": models.Lead.created_at,
    "updated_at": models.Lead.updated_at,
}


def create_lead(db: Session, lead: schemas.LeadCreate) -> models.Lead:
    db_lead = models.Lead(**lead.model_dump())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead


def _filtered_leads_query(
    db: Session,
    search: str | None = None,
    status: str | None = None,
    project_type: str | None = None,
    budget: str | None = None,
):
    query = db.query(models.Lead)
    if search:
        like = f"%{search.strip()}%"
        query = query.filter(
            or_(
                models.Lead.name.ilike(like),
                models.Lead.email.ilike(like),
                models.Lead.company.ilike(like),
                models.Lead.message.ilike(like),
                models.Lead.project_type.ilike(like),
                models.Lead.budget.ilike(like),
            )
        )
    if status:
        query = query.filter(models.Lead.status == status)
    if project_type:
        query = query.filter(models.Lead.project_type == project_type)
    if budget:
        query = query.filter(models.Lead.budget == budget)
    return query


def get_leads_page(
    db: Session,
    page: int = 1,
    limit: int = 20,
    search: str | None = None,
    status: str | None = None,
    project_type: str | None = None,
    budget: str | None = None,
    sort_by: str = "created_at",
    sort_order: str = "desc",
) -> dict:
    page = max(page, 1)
    limit = min(max(limit, 1), 100)
    query = _filtered_leads_query(db, search, status, project_type, budget)
    total = query.count()
    sort_column = ALLOWED_SORT_FIELDS.get(sort_by, models.Lead.created_at)
    order = asc(sort_column) if sort_order == "asc" else desc(sort_column)
    items = query.order_by(order).offset((page - 1) * limit).limit(limit).all()
    pages = (total + limit - 1) // limit if total else 0
    return {
        "items": items,
        "total": total,
        "page": page,
        "limit": limit,
        "pages": pages,
    }


def get_leads_for_export(
    db: Session,
    search: str | None = None,
    status: str | None = None,
    project_type: str | None = None,
    budget: str | None = None,
) -> list[models.Lead]:
    return _filtered_leads_query(db, search, status, project_type, budget).order_by(models.Lead.created_at.desc()).all()


def get_lead(db: Session, lead_id: int) -> models.Lead | None:
    return db.query(models.Lead).filter(models.Lead.id == lead_id).first()


def update_lead(db: Session, lead: models.Lead, payload: schemas.LeadUpdate) -> models.Lead:
    updates = payload.model_dump(exclude_unset=True)
    if "status" in updates and updates["status"] not in ALLOWED_STATUSES:
        raise ValueError("Invalid lead status")
    for key, value in updates.items():
        setattr(lead, key, value)
    lead.updated_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(lead)
    return lead


def update_lead_status(db: Session, lead: models.Lead, status: str) -> models.Lead:
    if status not in ALLOWED_STATUSES:
        raise ValueError("Invalid lead status")
    lead.status = status
    lead.updated_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(lead)
    return lead


def get_stats_summary(db: Session) -> dict:
    leads = db.query(models.Lead).all()
    by_status = {status: 0 for status in ALLOWED_STATUSES}
    by_project_type = {}
    by_budget = {}

    for lead in leads:
        by_status[lead.status] = by_status.get(lead.status, 0) + 1
        if lead.project_type:
            by_project_type[lead.project_type] = by_project_type.get(lead.project_type, 0) + 1
        if lead.budget:
            by_budget[lead.budget] = by_budget.get(lead.budget, 0) + 1

    today = datetime.now(timezone.utc).date()
    by_day = {}
    for offset in range(6, -1, -1):
        day = today - timedelta(days=offset)
        by_day[day.isoformat()] = 0

    rows = (
        db.query(func.date(models.Lead.created_at), func.count(models.Lead.id))
        .group_by(func.date(models.Lead.created_at))
        .all()
    )
    for day, count in rows:
        if day in by_day:
            by_day[day] = count

    recent_leads = db.query(models.Lead).order_by(models.Lead.created_at.desc()).limit(5).all()
    return {
        "total_leads": len(leads),
        "new_leads": by_status.get("new", 0),
        "in_progress_leads": by_status.get("in_progress", 0),
        "contacted_leads": by_status.get("contacted", 0),
        "done_leads": by_status.get("done", 0),
        "rejected_leads": by_status.get("rejected", 0),
        "by_status": by_status,
        "by_project_type": by_project_type,
        "by_budget": by_budget,
        "by_day": by_day,
        "recent_leads": recent_leads,
    }


def leads_to_csv(leads: list[models.Lead]) -> str:
    output = StringIO()
    writer = csv.writer(output)
    writer.writerow(["id", "name", "email", "company", "project_type", "budget", "status", "message", "created_at", "updated_at"])
    for lead in leads:
        writer.writerow([
            lead.id,
            lead.name,
            lead.email,
            lead.company or "",
            lead.project_type or "",
            lead.budget or "",
            lead.status,
            lead.message,
            lead.created_at.isoformat() if lead.created_at else "",
            lead.updated_at.isoformat() if lead.updated_at else "",
        ])
    return output.getvalue()
