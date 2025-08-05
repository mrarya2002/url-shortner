# 🔗 URL Shortener

A secure and user-friendly URL Shortener web application built with **Spring Boot**, **MySQL**, and **React.js**. It includes **user authentication using JWT**, allowing users to shorten URLs and manage them securely.

---

## 📌 Features

- ✅ User Signup & Login with JWT Authentication
- 🔐 Protected API routes for shortening URLs
- 🔗 Generate short URLs for long links
- 🚀 Redirect short URLs to original URLs
- 📊 Track number of clicks
- 🖥️ Responsive and modern UI using React

---

## 🛠️ Tech Stack

### 🔧 Backend
- Spring Boot
- Spring Security (JWT)
- Spring Data JPA
- MySQL
- Java 17+

### 🎨 Frontend
- React.js
- Tailwind CSS (or any preferred styling)
- Axios (for API calls)
- React Router (for navigation)

---

## 🔐 Authentication with JWT

- The app supports **user registration and login**.
- After successful login, the server returns a **JWT token**.
- This token must be included in the `Authorization` header for protected routes:
