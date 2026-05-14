from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, Integer, String, Text
from sqlalchemy.orm import validates

from database import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    company = Column(String(255), nullable=True)
    message = Column(Text, nullable=False)
    project_type = Column(String(255), nullable=True)
    budget = Column(String(255), nullable=True)
    analytics_session_id = Column(String(64), nullable=True, index=True)
    status = Column(String(32), default="new", nullable=False, index=True)
    created_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )
    updated_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    @validates("status")
    def validate_status(self, key, status):
        allowed_statuses = {"new", "in_progress", "contacted", "done", "rejected"}
        if status not in allowed_statuses:
            raise ValueError("Invalid lead status")
        return status


class AnalyticsSession(Base):
    __tablename__ = "analytics_sessions"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(64), unique=True, nullable=False, index=True)
    started_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    ended_at = Column(DateTime(timezone=True), nullable=True)
    duration_seconds = Column(Integer, nullable=True)
    landing_path = Column(String(512), nullable=True)
    current_path = Column(String(512), nullable=True)
    referrer = Column(String(1024), nullable=True)
    utm_source = Column(String(255), nullable=True)
    utm_medium = Column(String(255), nullable=True)
    utm_campaign = Column(String(255), nullable=True)
    utm_content = Column(String(255), nullable=True)
    utm_term = Column(String(255), nullable=True)
    device_type = Column(String(64), nullable=True)
    browser = Column(String(128), nullable=True)
    os = Column(String(128), nullable=True)
    language = Column(String(64), nullable=True)
    screen_width = Column(Integer, nullable=True)
    screen_height = Column(Integer, nullable=True)
    viewport_width = Column(Integer, nullable=True)
    viewport_height = Column(Integer, nullable=True)
    timezone = Column(String(128), nullable=True)
    user_agent_hash = Column(String(128), nullable=True)
    ip_hash = Column(String(128), nullable=True)
    consent_analytics = Column(Integer, default=1, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )


class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(64), nullable=False, index=True)
    event_type = Column(String(64), nullable=False, index=True)
    event_name = Column(String(255), nullable=True)
    page_path = Column(String(512), nullable=True)
    section_id = Column(String(128), nullable=True)
    section_name = Column(String(255), nullable=True)
    element_id = Column(String(255), nullable=True)
    element_label = Column(String(255), nullable=True)
    element_role = Column(String(128), nullable=True)
    target_text = Column(String(255), nullable=True)
    target_href = Column(String(1024), nullable=True)
    scroll_depth = Column(Integer, nullable=True)
    duration_seconds = Column(Integer, nullable=True)
    metadata_json = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
