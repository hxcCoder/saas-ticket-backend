# SaaS Ticket Backend

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/hxcCoder/saas-ticket-backend/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)

## Descripción

Backend completo para un sistema de gestión de tickets estilo SaaS.  
Permite crear, asignar y gestionar tickets de clientes, con autenticación segura, roles de usuario y seguimiento de estados.  

Este proyecto demuestra habilidades en:
- Desarrollo de APIs REST con Node.js y TypeScript
- Modelado y consultas de bases de datos SQL (PostgreSQL + Prisma)
- Gestión de roles y permisos
- Automatización y seguridad (JWT, hash de contraseñas)
- Testing y buenas prácticas profesionales

---

## 🛠 Tecnologías

- **Node.js + TypeScript**  
- **Express.js**  
- **PostgreSQL**  
- **Prisma ORM**  
- **JWT Auth**  
- **Docker**  
- **Jest / Supertest** (tests unitarios e integración)  

---

## Características

- Registro y login de usuarios  
- Roles: Admin, Soporte, Cliente  
- CRUD completo de tickets  
- Asignación de tickets y cambios de estado  
- Logs y auditoría de cambios  
- Validación de datos y seguridad  
- Tests unitarios y de integración incluidos  

---
## Variables de entorno
- DATABASE_URL=postgresql://usuario:password@localhost:5432/saas_ticket_db
- JWT_SECRET=tu_secreto

## Endpoints principales

- POST /auth/register → Registrar usuario

- POST /auth/login → Login y obtención de token

- GET /tickets → Listar tickets según rol

- POST /tickets → Crear ticket

- PATCH /tickets/:id → Actualizar ticket

- DELETE /tickets/:id → Eliminar ticket (solo Admin)

- (Documentación completa disponible en Postman / Swagger en /docs)

## Roadmap

- Notificaciones por correo al cambiar estado de ticket

- Dashboard frontend (Next.js + Tailwind)

- Mejoras en tests de integración

- Despliegue automático con CI/CD
## Demo / Deploy

- API demo: [Link a Render / Railway / Fly.io]

- Postman Collection: 
## Licencia
MIT © 2025 Benjamin Millalonco
## Contacto

- GitHub: hxcCoder

- LinkedIn: www.linkedin.com/in/benjamin-millalonco[www.linkedin.com/in/benjamin-millalonco]

- Email: 
## Contribuciones
Este proyecto es open-source y se aceptan contribuciones.
Para colaborar: crear un issue o un pull request siguiendo las normas de codificación y tests.

## Instalación rápida

```bash
git clone https://github.com/hxcCoder/saas-ticket-backend.git
cd saas-ticket-backend
npm install
npm run dev
