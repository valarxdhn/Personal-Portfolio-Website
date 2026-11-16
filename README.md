# Dhanush – Personal Portfolio Website

A production-ready, accessible, and responsive developer portfolio built with **Next.js (App Router)** and **React**.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black.svg)
![Styling: Modern CSS](https://img.shields.io/badge/Styling-Custom%20CSS-blueviolet.svg)

---

## 👨‍💻 About Dhanush

- **Role:** Computer Science Engineering Student
- **College:** Sahyadri College of Engineering and Management
- **Location:** Mangalore, Karnataka, India
- **Degree:** Bachelor of Engineering – Computer Science and Engineering
- **Academic Standing:** First-Year CGPA: **8.85 / 10.0**
- **Research:** Published in *International Journal of Innovative Research in Technology (IJIRT)* (2026, Vol. 13, Paper ID: 206803)

---

## 🚀 Key Features

1. **Seven Main Application Routes:**
   - `/`: Landing page with profile showcase, highlights, and quick CTAs.
   - `/about`: Academic narrative, educational breakdown, and engineering philosophy.
   - `/projects`: Featured projects gallery with interactive category filters.
   - `/projects/[slug]`: Deep-dive detail pages for each project:
     - `dynamic-train-eta`
     - `sustainable-bharat`
     - `campusloop`
   - `/experience`: Transparent technical activities, hackathon involvement, and project collaboration.
   - `/skills`: Confirmed technical skills organized by category (C, C++, Python, Java, Supabase, Git, GitHub).
   - `/achievements`: Published IJIRT research paper, international conference presentation, certifications, and academic milestones.
   - `/contact`: Interactive validated contact form with server-side API integration.

2. **UI/UX Design System:**
   - Premium developer dark palette (Deep navy `#0a0f1d`, Dark charcoal `#111827`, Electric blue accent `#3b82f6`).
   - Dynamic light theme toggle (`[data-theme="light"]`) with persistent `localStorage` preference.
   - Accessible keyboard focus rings (`:focus-visible`) and reduced motion support (`prefers-reduced-motion: reduce`).
   - Responsive layouts optimized across mobile (320px–480px), tablet (768px–1024px), and desktop (1280px+).

3. **Centralized Data Architecture:**
   - No hardcoded personal or project details duplicated across pages.
   - Centralized data modules in `src/data/` (`personal.js`, `education.js`, `projects.js`, `skills.js`, `research.js`, `achievements.js`, `social.js`).

4. **SEO & Discoverability:**
   - Dynamic sitemap generation (`/sitemap.xml`) via Next.js metadata routes.
   - Crawler directives (`/robots.txt`).
   - Full Open Graph metadata and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, JavaScript)
- **Library:** [React 18](https://react.dev/)
- **Styling:** Custom Modular CSS & CSS Variables (zero bloat, pure responsive CSS)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** Git & GitHub

---

## 💻 Local Development

### Prerequisites
- Node.js (v18.17.0 or newer)
- npm (v9.0.0 or newer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/valarxdhn/Personal-Portfolio-Website.git
   cd Personal-Portfolio-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
3. Import `valarxdhn/Personal-Portfolio-Website`.
4. Framework preset will automatically detect **Next.js**.
5. *(Optional)* Configure environment variables if integrating a third-party email service:
   - `CONTACT_EMAIL_API_KEY`: API key for email delivery (e.g. Resend, SendGrid)
   - `CONTACT_RECIPIENT_EMAIL`: Your destination inbox (e.g. `dhanush.cse.dev@gmail.com`)
6. Click **Deploy**. Vercel will build and host your portfolio with instant edge caching.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
