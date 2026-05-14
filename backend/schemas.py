from datetime import datetime

from typing import Any

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

LEAD_STATUSES = {"new", "in_progress", "contacted", "done", "rejected"}


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    message: str
    project_type: str | None = None
    budget: str | None = None
    analytics_session_id: str | None = None


class LeadRead(LeadCreate):
    id: int
    status: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class LeadListResponse(BaseModel):
    items: list[LeadRead]
    total: int
    page: int
    limit: int
    pages: int


class LeadUpdate(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
    company: str | None = None
    message: str | None = None
    project_type: str | None = None
    budget: str | None = None
    analytics_session_id: str | None = None
    status: str | None = Field(default=None)

    @field_validator("status")
    @classmethod
    def validate_status(cls, value):
        if value is not None and value not in LEAD_STATUSES:
            raise ValueError("Invalid lead status")
        return value


class LeadStatusUpdate(BaseModel):
    status: str

    @field_validator("status")
    @classmethod
    def validate_status(cls, value):
        if value not in LEAD_STATUSES:
            raise ValueError("Invalid lead status")
        return value


class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class AdminMe(BaseModel):
    username: str


class StatsRecentLead(BaseModel):
    id: int
    name: str
    email: EmailStr
    company: str | None = None
    project_type: str | None = None
    budget: str | None = None
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class StatsSummary(BaseModel):
    total_leads: int
    new_leads: int
    in_progress_leads: int
    contacted_leads: int
    done_leads: int
    rejected_leads: int
    by_status: dict[str, int]
    by_project_type: dict[str, int]
    by_budget: dict[str, int]
    by_day: dict[str, int]
    recent_leads: list[StatsRecentLead]


class AnalyticsSessionCreate(BaseModel):
    session_id: str
    landing_path: str | None = None
    current_path: str | None = None
    referrer: str | None = None
    utm_source: str | None = None
    utm_medium: str | None = None
    utm_campaign: str | None = None
    utm_content: str | None = None
    utm_term: str | None = None
    device_type: str | None = None
    browser: str | None = None
    os: str | None = None
    language: str | None = None
    screen_width: int | None = None
    screen_height: int | None = None
    viewport_width: int | None = None
    viewport_height: int | None = None
    timezone: str | None = None
    consent_analytics: bool = True


class AnalyticsSessionEnd(BaseModel):
    session_id: str
    duration_seconds: int


class AnalyticsSessionRead(BaseModel):
    id: int
    session_id: str
    started_at: datetime
    ended_at: datetime | None = None
    duration_seconds: int | None = None
    landing_path: str | None = None
    referrer: str | None = None
    utm_source: str | None = None
    utm_medium: str | None = None
    utm_campaign: str | None = None
    device_type: str | None = None
    browser: str | None = None
    os: str | None = None
    language: str | None = None

    model_config = ConfigDict(from_attributes=True)


class AnalyticsEventCreate(BaseModel):
    session_id: str
    event_type: str
    event_name: str | None = None
    page_path: str | None = None
    section_id: str | None = None
    section_name: str | None = None
    element_id: str | None = None
    element_label: str | None = None
    element_role: str | None = None
    target_text: str | None = None
    target_href: str | None = None
    scroll_depth: int | None = None
    duration_seconds: int | None = None
    metadata_json: dict[str, Any] | str | None = None


class AnalyticsEventRead(BaseModel):
    id: int
    session_id: str
    event_type: str
    event_name: str | None = None
    page_path: str | None = None
    section_id: str | None = None
    section_name: str | None = None
    element_id: str | None = None
    element_label: str | None = None
    element_role: str | None = None
    target_text: str | None = None
    target_href: str | None = None
    scroll_depth: int | None = None
    duration_seconds: int | None = None
    metadata_json: str | None = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class AnalyticsSectionStat(BaseModel):
    section_id: str | None = None
    section_name: str | None = None
    views: int
    avg_engagement_seconds: int


class AnalyticsClickedElementStat(BaseModel):
    element_id: str | None = None
    element_label: str | None = None
    element_role: str | None = None
    section_id: str | None = None
    clicks: int


class AnalyticsSummary(BaseModel):
    total_sessions: int
    total_page_views: int
    total_clicks: int
    total_cta_clicks: int
    avg_duration_seconds: int
    avg_scroll_depth: int
    conversion_rate: float
    by_device: dict[str, int]
    by_browser: dict[str, int]
    by_os: dict[str, int]
    by_referrer: dict[str, int]
    by_utm_source: dict[str, int]
    by_utm_medium: dict[str, int]
    by_utm_campaign: dict[str, int]
    top_sections: list[AnalyticsSectionStat]
    top_clicked_elements: list[AnalyticsClickedElementStat]
    scroll_depth_distribution: dict[str, int]
    funnel: dict[str, int]
    recent_events: list[AnalyticsEventRead]


class AnalyticsEventListResponse(BaseModel):
    items: list[AnalyticsEventRead]
    total: int
    page: int
    limit: int
    pages: int


class AnalyticsSessionListResponse(BaseModel):
    items: list[AnalyticsSessionRead]
    total: int
    page: int
    limit: int
    pages: int
