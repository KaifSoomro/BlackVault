
<div align="center">

<img src="./frontend/public/logo_1.png" width="150"/>

### Secure Password Management Made Simple

BlackVault is a modern full-stack MERN password manager that allows users to securely store, manage, and access their credentials through a protected digital vault.

Built with security, performance, and user experience in mind.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)

</div>

---

## 📖 Overview

Managing dozens of passwords across different websites can be frustrating and insecure. BlackVault solves this problem by providing a centralized, secure vault where users can store their credentials and access them whenever needed.

The application includes authentication, vault protection, session-based access verification, and a clean modern interface for managing sensitive information.

---

## ✨ Features

### 🔐 Authentication System

- User Registration
- User Login
- JWT Authentication
- Secure Logout
- Protected Routes
- Authentication Middleware

### 🛡️ Vault Protection

- Separate Vault Access Verification
- Temporary Vault Unlock Session
- Automatic Vault Lock Expiration
- Vault Lock After Logout
- Additional Security Layer Beyond Login

### 🔑 Password Management

- Add New Credentials
- Update Credentials
- Delete Credentials
- View Stored Passwords
- Hide / Show Passwords
- Copy Password
- Search Credentials

### 🎨 User Experience

- Modern SaaS Design
- Responsive Layout
- Mobile Friendly
- Smooth Animations
- Dark Theme Interface
- Fast Loading Experience

---

## 🏗️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- React Query (TanStack Query)
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- helmet
- nodemailer
- crypto-js

### Database

- MongoDB Atlas

---

# 📂 Folder Structure

```bash
BlackVault
│
├── frontend
│   │
│   ├── public
│   ├── src
│   │   │
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   ├── features
│   │   ├── utils
│   │   ├── store
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   │
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
│
└── README.md