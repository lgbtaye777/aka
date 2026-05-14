from sqlalchemy import inspect, text


def run_dev_migrations(engine) -> None:
    inspector = inspect(engine)
    if "leads" not in inspector.get_table_names():
        return

    columns = {column["name"] for column in inspector.get_columns("leads")}
    with engine.begin() as connection:
        if "status" not in columns:
            connection.execute(text("ALTER TABLE leads ADD COLUMN status VARCHAR(32) NOT NULL DEFAULT 'new'"))
        if "updated_at" not in columns:
            connection.execute(text("ALTER TABLE leads ADD COLUMN updated_at DATETIME"))
            connection.execute(text("UPDATE leads SET updated_at = created_at WHERE updated_at IS NULL"))
        if "analytics_session_id" not in columns:
            connection.execute(text("ALTER TABLE leads ADD COLUMN analytics_session_id VARCHAR(64)"))
            connection.execute(text("CREATE INDEX IF NOT EXISTS ix_leads_analytics_session_id ON leads (analytics_session_id)"))
