# AKA Technology

Лендинг и админ-панель AKA Technology.

- Frontend: Vite + React + Tailwind CSS.
- Backend: FastAPI + SQLite + SQLAlchemy.
- Заявки сохраняются в SQLite.
- Админка показывает заявки и поведенческую аналитику.
- First-party analytics не использует invasive fingerprinting и не хранит raw IP.

## Структура

```text
backend/
  main.py
  database.py
  models.py
  schemas.py
  crud.py
  analytics.py
  auth.py
  Dockerfile
  .env.example
frontend/
  index.html
  package.json
  Dockerfile
  nginx.conf
  .env.example
  .env.production.example
  src/
docker-compose.example.yml
.env.example
requirements.txt
```

## Локальный запуск backend

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd backend
copy .env.example .env
uvicorn main:app --reload
```

Backend будет доступен на `http://localhost:8000`.

Backend env:

```env
DATABASE_URL=sqlite:///./app.db
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
JWT_SECRET=change-me
JWT_EXPIRE_MINUTES=1440
ANALYTICS_SALT=change-me
```

SQLite база по умолчанию создаётся в `backend/app.db`.

## Локальный запуск frontend

```bash
cd frontend
copy .env.example .env
npm install
npm run dev
```

Frontend будет доступен на `http://localhost:5173`.

Frontend env:

```env
VITE_API_URL=http://localhost:8000
```

В production, если `VITE_API_URL` не задан, frontend использует текущий origin сайта. Это удобно, когда nginx проксирует `/api` на backend на том же домене.

## Admin panel

Админка:

```text
http://localhost:5173/admin/login
```

Локальные данные входа по умолчанию:

```text
username: admin
password: admin123
```

После входа доступны:

- `/admin` — общая панель заявок и аналитики;
- `/admin/leads` — список заявок, поиск, фильтры, пагинация, смена статуса, CSV export;
- `/admin/leads/:id` — детали и редактирование заявки;
- `/admin/analytics` — расширенная поведенческая аналитика.

## API

Публичные endpoints:

- `GET /api/health`
- `POST /api/submit`
- `POST /api/analytics/session`
- `POST /api/analytics/event`
- `POST /api/analytics/session/end`

Admin endpoints защищены JWT:

- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/leads`
- `GET /api/leads/{id}`
- `PATCH /api/leads/{id}`
- `PATCH /api/leads/{id}/status`
- `GET /api/stats/summary`
- `GET /api/leads/export.csv`
- `GET /api/admin/analytics/summary`
- `GET /api/admin/analytics/events`
- `GET /api/admin/analytics/sessions`

## Behavior analytics

Собираются только first-party события для внутренней статистики:

- `page_view`
- `section_view`
- `section_engagement`
- `click`
- `cta_click`
- `nav_click`
- `external_link_click`
- `mobile_menu_open`
- `mobile_menu_close`
- `form_start`
- `form_submit_attempt`
- `form_submit_success`
- `form_submit_error`
- `modal_open`
- `modal_close`
- `scroll_depth`
- `time_on_page`

Privacy note:

- canvas/audio/WebGL fingerprint не используется;
- список шрифтов, плагины браузера и похожие invasive данные не собираются;
- полный IP не хранится;
- user-agent хранится только как salted hash;
- значения полей формы не пишутся в analytics events.

Перед production нужно добавить явное согласие или opt-out, если это требуется юридически.

## Production env examples

Для будущего docker compose деплоя используйте root `.env.example`:

```env
DATABASE_URL=sqlite:////app/backend/data/app.db
CORS_ORIGINS=https://example.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this-password
JWT_SECRET=change-this-long-random-secret
JWT_EXPIRE_MINUTES=1440
ANALYTICS_SALT=change-this-long-random-salt
FRONTEND_API_URL=https://example.com
BACKEND_PORT=18000
FRONTEND_PORT=15173
```

`FRONTEND_API_URL` попадает в Vite build. Для домена `https://aka.example.com` значение должно быть:

```env
FRONTEND_API_URL=https://aka.example.com
```

`CORS_ORIGINS` должен содержать production-домен frontend. Не используйте `*` для production.

## Docker локально

Шаблон compose не предназначен для прямого commit secrets. Перед запуском скопируйте env:

```bash
copy .env.example .env
```

Локальная проверка build:

```bash
docker compose -f docker-compose.example.yml build
```

Локальный запуск контейнеров, если нужно проверить:

```bash
docker compose -f docker-compose.example.yml up -d
```

По умолчанию:

- frontend container: `http://127.0.0.1:15173`
- backend container: `http://127.0.0.1:18000`

Для production внешний reverse proxy должен отдавать frontend и проксировать `/api` на backend. В этом репозитории конфигурация серверного reverse proxy не хранится.

## Подготовка к GitHub

Команды выполнять только после проверки изменений:

```bash
git init
git add .
git commit -m "Prepare project for deployment"
git branch -M main
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```

Если репозиторий уже создан:

```bash
git status
git add .
git commit -m "Prepare project for deployment"
git push
```

Push выполнять только после отдельного подтверждения.

## Future deployment notes

В репозитории лежит только безопасный шаблон `docker-compose.example.yml`. Реальные серверные пути, IP, домены, nginx-конфиги и секреты не должны коммититься в GitHub.

## Проверка

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
python -m compileall backend
```
