# Lab 03 — Node.js + MongoDB

Простий REST API сервіс для управління задачами (tasks) на базі Node.js + Express + MongoDB. Проєкт використовує кілька способів збирання Docker-образів для порівняння ефективності.

---

## API

- GET /api/tasks — отримати список задач
- POST /api/tasks — створити нову задачу ({ title: "..." })
- DELETE /api/tasks/:id — видалити задачу за ID

---

## Запуск локально

```bash
npm install
npm start
