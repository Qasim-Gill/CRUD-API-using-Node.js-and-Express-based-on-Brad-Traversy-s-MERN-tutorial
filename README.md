# 📝 CRUD API with Node.js and Express

A simple and secure CRUD API that allows users to register, log in, and manage their goals. Built using Node.js, Express, and MongoDB with JWT authentication and error handling.

## 🚀 Features

### 👤 User Management
- Register a new user
- Login with email and password
- Get current logged-in user data

### 🎯 Goal Management (Protected Routes)
- Create a new goal
- Retrieve all goals of the logged-in user
- Update a specific goal
- Delete a goal

---

## 📦 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JSON Web Token (JWT)
- **Security:** bcryptjs for password hashing
- **Error Handling:** express-async-handler middleware

---

## 📂 API Endpoints

### User Routes (`/api/users`)
| Method | Endpoint             | Access   | Description               |
|--------|----------------------|----------|---------------------------|
| POST   | `/api/users`         | Public   | Register a new user       |
| POST   | `/api/users/login`   | Public   | Login and receive token   |
| GET    | `/api/users/me`      | Private  | Get current user info     |

### Goal Routes (`/api/goals`)
| Method | Endpoint             | Access   | Description                  |
|--------|----------------------|----------|------------------------------|
| GET    | `/api/goals`         | Private  | Get all goals for user       |
| POST   | `/api/goals`         | Private  | Create a new goal            |
| PUT    | `/api/goals/:id`     | Private  | Update a specific goal       |
| DELETE | `/api/goals/:id`     | Private  | Delete a specific goal       |

---

## 🔐 Authentication

All protected routes require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your_token_here>
```

---

## 🧠 Learn How It Was Built

🎥 **Watch the full tutorial series here:**  
[📺 YouTube Playlist](https://www.youtube.com/playlist?list=PLUqb0avkeLcezXihuwEGhtJYWb91fRpF4)

---

## 🗂 GitHub Repository

🔗 **Source Code:**  
[📁 View on GitHub](https://github.com/QasimAbbasi/goal-app)
