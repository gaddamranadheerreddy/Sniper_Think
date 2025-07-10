# SniperThink Frontend

This is the **frontend** of the SniperThink SaaS Landing Page built with **React** and **Bootstrap**. It connects to a Node.js + Express backend and provides a responsive, animated UI for showcasing product features, pricing, testimonials, and more.

---

## 🚀 Features

- Responsive hero section with carousel
- Dynamic feature, pricing, and testimonial sections (fetched from backend)
- Validated contact form
- Loading skeletons
- Scroll animations & hover effects
- Dark mode toggle
- Smooth navigation

---

## 🛠️ Tech Stack

- **React**
- **Bootstrap**
- **Framer Motion**
- **Axios**
- **React Router**
- **CSS Modules**

---

## 🔗 Live Site

[https://your-frontend-url.vercel.app](https://sniper-think.vercel.app/)

---

## 🔧 Setup Instructions

```bash

cd frontend
npm install
npm start

```

Folder Structure
src/
├── components/
│   ├── HeroSection.js
│   ├── FeaturesSection.js
│   ├── PricingSection.js
│   └── ...
├── pages/
│   └── Home.js
├── App.js


 Known Issues : 
- Contact form won't work if backend is down or CORS is misconfigured

 - Image URLs must be publicly accessible
