# 🛒 E-Commerce App

A full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Redux Toolkit for state management and Tailwind CSS for responsive UI design.

This application allows users to browse products, add items to cart, place orders, and manage their profiles. It also includes an Admin Panel for managing products, users, and orders.

---

# 🚀 Features

## 👤 User Features

- User Authentication (Login/Register)
- JWT Authentication & Protected Routes
- Browse Products
- Product Filtering & Sorting
- Product Details Page
- Add to Cart
- Cart Drawer
- Checkout System
- PayPal Payment Integration
- Order Placement
- Order Confirmation
- My Orders Page
- User Profile Management
- Responsive Design

---

## 🛠️ Admin Features

- Admin Dashboard
- Product Management
  - Add Product
  - Edit Product
  - Delete Product
- Order Management
- User Management
- Upload Product Images

---

# 🧰 Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Multer

## Payment Gateway

- PayPal

---

# 📁 Project Structure

```bash
zademanish-ecommerce-app/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   ├── server.js
│   └── seeder.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── redux/
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
