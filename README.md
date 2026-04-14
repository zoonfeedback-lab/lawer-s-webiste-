<div align="center">
  <img src="public/favicon.ico" alt="Basit Legal Logo" width="80" height="80" />
</div>

<h1 align="center">Basit Legal - Corporate Law Firm Platform</h1>

<p align="center">
  A premium, enterprise-grade web platform and administrative dashboard tailored specifically for Corporate Legal Consultation. Built with performance, accessibility, and high conversion in mind.
</p>

## 📌 Overview
Basit Legal is a complete lead generation and operational platform originally engineered for robust legal practice scaling. The platform features an ultra-premium bilingual front-end designed to drive corporate conversions, coupled with a highly scalable Prisma-powered backend for appointment tracking, client curation, and portfolio management.

## ✨ Key Features
- **Bilingual Interface**: Native support for English and Urdu (via `next-intl`) with complete structural Right-To-Left (RTL) layout switching depending on locale.
- **Premium Animations**: Scroll-based intersection observers and statistical numbers counting up intelligently, powered by `framer-motion` & `react-countup`.
- **Intelligent Appointment Booking**: Fully localized, secure multi-step form integrating cloud document uploads directly to Cloudinary with PostgreSQL persistence.
- **Dynamic Secure Admin Dashboard**: Managed operational routes delivering full CRUD control to the Firm for Appointments, Clients, Portfolio Projects, and Services.

## 🛠 Tech Stack
- **Framework Core**: [Next.js 15](https://nextjs.org/) (App Router & Server Actions)
- **Styling Architecture**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Database & ORM**: [Prisma](https://www.prisma.io/) connecting directly to [Neon (Serverless PostgreSQL)](https://neon.tech/)
- **State & Animations**: `framer-motion`, `react-countup`, `lucide-react`
- **Internationalization (i18n)**: `next-intl`
- **File Uploads**: [Cloudinary API](https://cloudinary.com/)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and NPM installed.

### Environment Management
Create a `.env` file in the root directory and securely populate the following access protocols:
```env
# Database Schema
DATABASE_URL="postgresql://[USER]:[PASSWORD]@[ENDPOINT]/[DB_NAME]?sslmode=require"

# Cloudinary Storage Configurations
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

### Build Instructions

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Initialize Database**
   Push the defined database schemas securely to Neon PostgreSQL:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Start Development Application**
   ```bash
   npm run dev
   ```

Access the native local server at [http://localhost:3000](http://localhost:3000). The default root redirects logic into `/en` or `/ur` locale layers automatically.

---
*Developed & Designed for Advocate Muhammad Basit.*
