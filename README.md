# 🧑‍💻 Admin Dashboard — React + Tailwind + Router

A fully functional, responsive admin dashboard built with **React**, **Tailwind CSS**, and **React Router DOM**, featuring protected routes, card-based UI, modal interaction, and live search filtering.

---

## 🔑 Features

- ✅ Login with localStorage-based authentication
- 🔒 Protected Routes (`/dashboard`)
- 🧩 Modular folder structure (`components/`, `pages/`)
- 📱 Fully responsive design using Tailwind CSS
- 🔍 Real-time search filtering
- 🪟 Clickable cards open modals
- 🚪 Logout functionality

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: Simulated with localStorage token
- **State**: React Hooks (`useState`, `useEffect`)
- **Deployment**: Vercel (or Netlify)

---

## 📂 Folder Structure

src/
├── components/
│ ├── Sidebar.jsx
│ ├── Topbar.jsx
│ ├── PrivateRoute.jsx
│ └── Modal.jsx
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│ └── CardGrid.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/mk00786/dashboard-app.git
cd dashboard-app
npm install
npm run dev

🌐 Live Demo
🚀 View on Vercel-https://dashboard-app-smoky-five.vercel.app/

👤 Author
Developed by Mridul Kapoor
LinkedIn | GitHub