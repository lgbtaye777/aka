import os

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException, Query, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import crud
import models
import schemas
import analytics
from auth import create_access_token, get_current_admin, verify_admin_credentials
from database import SessionLocal, engine
from migrations import run_dev_migrations

load_dotenv()

models.Base.metadata.create_all(bind=engine)
run_dev_migrations(engine)

app = FastAPI(title="AKA Technology API")

cors_origins = [
    origin.strip()
    for origin in os.getenv(
        "CORS_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173",
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/api/health")
def health_check():
    return {"status": "ok"}


@app.post("/api/submit")
def submit_lead(lead: schemas.LeadCreate, db: Session = Depends(get_db)):
    created_lead = crud.create_lead(db, lead)
    return {"status": "success", "id": created_lead.id}


@app.post("/api/analytics/session")
def create_analytics_session(
    payload: schemas.AnalyticsSessionCreate,
    request: Request,
    db: Session = Depends(get_db),
):
    client_host = request.client.host if request.client else None
    user_agent = request.headers.get("user-agent")
    analytics.upsert_session(db, payload, ip_address=client_host, user_agent=user_agent)
    return {"status": "success", "session_id": payload.session_id}


@app.post("/api/analytics/event")
def create_analytics_event(payload: schemas.AnalyticsEventCreate, db: Session = Depends(get_db)):
    analytics.create_event(db, payload)
    return {"status": "success"}


@app.post("/api/analytics/session/end")
def end_analytics_session(payload: schemas.AnalyticsSessionEnd, db: Session = Depends(get_db)):
    analytics.end_session(db, payload)
    return {"status": "success"}


@app.post("/api/auth/login", response_model=schemas.TokenResponse)
def login(payload: schemas.LoginRequest):
    if not verify_admin_credentials(payload.username, payload.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
        )
    return {"access_token": create_access_token(payload.username), "token_type": "bearer"}


@app.get("/api/auth/me", response_model=schemas.AdminMe)
def read_current_admin(current_admin: dict = Depends(get_current_admin)):
    return current_admin


@app.get("/api/leads", response_model=schemas.LeadListResponse)
def read_leads(
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=20, ge=1, le=100),
    search: str | None = None,
    status: str | None = None,
    project_type: str | None = None,
    budget: str | None = None,
    sort_by: str = "created_at",
    sort_order: str = "desc",
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    return crud.get_leads_page(db, page, limit, search, status, project_type, budget, sort_by, sort_order)


@app.get("/api/leads/export.csv")
def export_leads_csv(
    search: str | None = None,
    status: str | None = None,
    project_type: str | None = None,
    budget: str | None = None,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    leads = crud.get_leads_for_export(db, search, status, project_type, budget)
    csv_content = crud.leads_to_csv(leads)
    return Response(
        content=csv_content,
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": "attachment; filename=leads.csv"},
    )


@app.get("/api/leads/{lead_id}", response_model=schemas.LeadRead)
def read_lead(
    lead_id: int,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    lead = crud.get_lead(db, lead_id)
    if not lead:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Lead not found")
    return lead


@app.patch("/api/leads/{lead_id}", response_model=schemas.LeadRead)
def update_lead(
    lead_id: int,
    payload: schemas.LeadUpdate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    lead = crud.get_lead(db, lead_id)
    if not lead:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Lead not found")
    try:
        return crud.update_lead(db, lead, payload)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(exc)) from exc


@app.patch("/api/leads/{lead_id}/status", response_model=schemas.LeadRead)
def update_lead_status(
    lead_id: int,
    payload: schemas.LeadStatusUpdate,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    lead = crud.get_lead(db, lead_id)
    if not lead:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Lead not found")
    try:
        return crud.update_lead_status(db, lead, payload.status)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(exc)) from exc


@app.get("/api/stats/summary", response_model=schemas.StatsSummary)
def read_stats_summary(
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    return crud.get_stats_summary(db)


@app.get("/api/admin/analytics/summary", response_model=schemas.AnalyticsSummary)
def read_analytics_summary(
    date_from: str | None = None,
    date_to: str | None = None,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    return analytics.get_summary(db, date_from=date_from, date_to=date_to)


@app.get("/api/admin/analytics/events", response_model=schemas.AnalyticsEventListResponse)
def read_analytics_events(
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=50, ge=1, le=100),
    event_type: str | None = None,
    section_id: str | None = None,
    session_id: str | None = None,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    return analytics.get_events_page(db, page, limit, event_type, section_id, session_id)


@app.get("/api/admin/analytics/sessions", response_model=schemas.AnalyticsSessionListResponse)
def read_analytics_sessions(
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=50, ge=1, le=100),
    device_type: str | None = None,
    utm_source: str | None = None,
    db: Session = Depends(get_db),
    current_admin: dict = Depends(get_current_admin),
):
    return analytics.get_sessions_page(db, page, limit, device_type, utm_source)
