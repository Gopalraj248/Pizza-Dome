# 🍕 Pizza Dome - Artisan Neapolitan Pizza

A high-performance, production-ready web application designed for a premium street-style pizza establishment. This project features a seamless dine-in ordering experience with real-time payment integration and a dedicated administration dashboard.

![Project Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![Tech Stack](https://img.shields.io/badge/Tech-MERN--Stack-blue)

## ✨ Key Features

- **🚀 Dynamic Graphic Hero:** A high-impact visual experience with floating feature cards and animated pizza graphics.
- **🥦 Hybrid Menu:** Comprehensive support for both Vegetarian and Non-Vegetarian categories with a street-style artisan feel.
- **💳 Razorpay Integration:** Secure, real-time payment processing for a seamless checkout experience.
- **📊 Admin Dashboard:** A live, auto-refreshing dashboard for the owner to monitor orders, customer details, and sales.
- **📥 Excel Export:** One-click order history export to CSV/Excel for business analysis.
- **📱 Mobile-First Design:** Fully responsive and optimized for dine-in customers scanning QR codes on their mobile devices.
- **🌙 Dark Mode Support:** Premium aesthetics with a toggleable sleek dark mode.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (Local instance or MongoDB Atlas Cloud account)
- **Razorpay Account** (For Test/Live API keys)

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Vanilla CSS, Framer Motion (animations).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Cloud Atlas integration).
- **Payment Gateway:** Razorpay SDK.
- **Reporting:** JSON-to-CSV automated exports.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Gopalraj248/Pizza-Dome.git
cd Pizza-Dome
```

### 2. Setup Backend
```bash
cd backend
npm install
# Create a .env file and add your MONGO_URI and RAZORPAY keys
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

## 📋 Environment Variables (Backend)

| Variable | Description |
| --- | --- |
| `PORT` | Server port (default: 5000) |
| `MONGO_URI` | MongoDB Connection String |
| `RAZORPAY_KEY_ID` | Your Razorpay API Key |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Secret Key |

## 📸 Admin Dashboard
The admin can access the live order history via the **"Admin History 📋"** link in the footer of the application.

---
Crafted with passion for **Pizza Dome**. 🍕🔥
