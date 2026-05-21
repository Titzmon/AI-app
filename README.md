# FitCal AI - Premium AI-Powered Nutrition & Calorie Tracking

![FitCal AI](https://img.shields.io/badge/FitCal%20AI-Production%20Ready-00D084?style=for-the-badge)
![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)

A commercial-grade AI-powered nutrition and calorie tracking platform inspired by MyFitnessPal, Lifesum, Fitbit, and Apple Health.

## 🎯 Features

- **AI Food Recognition** - Upload images and get instant calorie/macro estimates via AI
- **Smart Calorie Tracking** - Track daily calories with beautiful progress rings
- **Macro Monitoring** - Monitor protein, carbs, and fat intake
- **Weight Tracking** - Track weight changes with detailed analytics
- **AI Health Coach** - Receive personalized nutrition recommendations
- **Water Tracking** - Stay hydrated with smart reminders
- **Beautiful Analytics** - Weekly and monthly insights with stunning charts
- **Social Features** - Share progress, join challenges, unlock badges
- **Premium UI** - Soft, elegant, modern interface with smooth animations
- **Mobile Optimized** - Native mobile feel on all devices
- **Secure Authentication** - JWT + Google/Apple OAuth

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.0
- **Styling**: TailwindCSS 4.0 + Shadcn/ui
- **Animations**: Framer Motion 11
- **State**: React Query + Zustand

### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL 16
- **ORM**: Prisma

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (LTS)
- PostgreSQL 16+
- Git

### Installation

```bash
git clone https://github.com/Titzmon/AI-app.git
cd AI-app
npm install
cp .env.example .env.local
```

### Environment Setup

```bash
# .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/fitcal_ai"
NEXT_PUBLIC_API_URL="http://localhost:3001"
OPENAI_API_KEY="sk-..."
GOOGLE_CLIENT_ID="..."
JWT_SECRET="your-super-secret-jwt-key"
```

### Database Setup

```bash
npx prisma db push
npx prisma db seed
```

### Running Development

```bash
npm run dev
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

## 📁 Project Structure

```
AI-app/
├── apps/
│   ├── frontend/           # Next.js 15 application
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   └── public/        # Static assets
│   │
│   └── backend/            # Express.js server
│       ├── src/
│       │   ├── routes/    # API routes
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── middleware/
│       │   └── index.ts
│       └── prisma/        # Database schema
│
├── packages/
│   └── shared/            # Shared types
│       ├── types/
│       └── utils/
│
└── scripts/
    └── seed.ts            # Database seeding
```

## 🎨 Design System

- **Primary Color**: #00D084 (Emerald)
- **Background**: #F8FAFC (Soft White)
- **Font**: Inter, SF Pro Display
- **Border Radius**: Soft rounded corners

## 🔐 Authentication

- Email + Password
- Google OAuth 2.0
- Apple Sign-In
- JWT Token Management
- Email Verification

## 🤖 AI Integration

- Food image recognition
- Automatic calorie estimation
- Macro nutrient breakdown
- Personalized health coaching

## 📊 API Documentation

```
Base URL: http://localhost:3001/api/v1

Authentication Endpoints:
POST   /auth/register
POST   /auth/login
POST   /auth/refresh
GET    /auth/verify

User Endpoints:
GET    /users/me
PUT    /users/me
GET    /users/settings

Nutrition Endpoints:
GET    /nutrition/meals
POST   /nutrition/meals
PUT    /nutrition/meals/:id
DELETE /nutrition/meals/:id
GET    /nutrition/daily
GET    /nutrition/analytics
POST   /nutrition/ai-scan
```

## 🚀 Deployment

- **Frontend**: Deploy to Vercel
- **Backend**: Deploy to Railway, Render, or Heroku
- **Database**: PostgreSQL on Supabase, Railway, or AWS RDS

## 📄 License

MIT License

---

**FitCal AI** © 2026 - Building a healthier world, one calorie at a time. 🌿
