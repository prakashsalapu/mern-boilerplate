# 🚀 MERN Boilerplate

A clean, scalable, and production-ready starter template for building full-stack applications using the **MERN stack** (MongoDB, Express, React, Node.js).

This boilerplate helps you skip repetitive setup and start building real features immediately.

---

### 📦 Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Others:** Axios, dotenv, CORS, Nodemon

---

### 📁 Project Structure
```
mern-boilerplate/
│
├── client/ # React frontend (UI)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/ # API calls
│ │ ├── utils/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ └── package.json
│
├── server/ # Backend API
│ ├── src/
│ │ ├── config/ # DB connection
│ │ ├── controllers/ # Logic
│ │ ├── models/ # Schemas
│ │ ├── routes/ # Endpoints
│ │ ├── middleware/ # Error/Auth
│ │ ├── utils/
│ │ └── server.js # Entry point
│ ├── .env
│ └── package.json
│
├── .gitignore
└── README.md
```
---

### ⚙️ Local Setup

#### 1. Clone the repo
```
git clone https://github.com/prakashsalapu/mern-boilerplate.git  
cd mern-boilerplate  
```
---

#### 2. Setup Backend
```
cd server  
npm install  
```
Create `.env`:
```
MONGO_URI=your_mongodb_connection_string  
PORT=5000  
```
Run:
```
npm run dev  
```
---

#### 3. Setup Frontend
```
cd client  
npm install  
npm run dev  
```
---

### 🚀 Deployment

#### Backend (Render)
```
- Root: `server`
- Build: `npm install`
- Start: `npm start`
```
Env:
```
MONGO_URI=your_mongodb_connection_string  
PORT=10000  
```
---

#### Frontend (Vercel)
```
- Root: `client`
- Add env:

VITE_API_URL=https://your-backend-url/api  
```
---

### ⭐ Author

Bhanu Prakash Salapu  
https://github.com/prakashsalapu  
