# 🚀 MERN Boilerplate

A clean, scalable, and production-ready starter template for building full-stack applications using the **MERN stack** (MongoDB, Express, React, Node.js).

This boilerplate helps you skip repetitive setup and start building real features immediately.

---

## 📦 Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Others:** Axios, dotenv, CORS, Nodemon

---

## 📁 Project Structure

```
mern-boilerplate/
│
├── client/                # React frontend (UI)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/      # API calls
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── server/                # Backend API
│   ├── src/
│   │   ├── config/        # DB connection
│   │   ├── controllers/   # Logic
│   │   ├── models/        # Schemas
│   │   ├── routes/        # Endpoints
│   │   ├── middleware/    # Error/Auth
│   │   ├── utils/
│   │   └── server.js      # Entry point
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/prakashsalapu/mern-boilerplate.git
cd mern-boilerplate
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create `.env` inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔗 API Base URL

```
http://localhost:5000/api
```

---

## ✨ Features

- Scalable folder structure (MVC pattern)
- MongoDB integration with Mongoose
- REST API setup
- Environment-based configuration
- Error handling middleware
- Frontend-backend integration ready
- Deployment-ready setup

---

## 🚀 Deployment Guide

### 🌐 Deploy Backend on Render

1. Go to Render Dashboard  
2. Click **New Web Service**  
3. Connect your GitHub repo  
4. Configure:
   - Root Directory: `server`
   - Build Command:
     ```bash
     npm install
     ```
   - Start Command:
     ```bash
     npm start
     ```

5. Add Environment Variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=10000
```

6. Click **Deploy**

---

### 🌍 Deploy Frontend on Vercel

1. Go to Vercel Dashboard  
2. Click **New Project**  
3. Import your GitHub repo  
4. Configure:
   - Root Directory: `client`
   - Framework: Vite (auto-detected)

5. Add Environment Variable:

```env
VITE_API_URL=https://your-render-backend-url/api
```

6. Click **Deploy**

---

## 🔗 Connecting Frontend & Backend

Make sure your frontend `.env`:

```env
VITE_API_URL=https://your-render-backend-url/api
```

---

## 🧪 API Endpoints

### Health Check

```
GET /
```

### Users

```
GET    /api/users
POST   /api/users
```

---

## 🛠 Scripts

### Backend

```bash
npm run dev     # development (nodemon)
npm start       # production
```

### Frontend

```bash
npm run dev     # start dev server
npm run build   # production build
```

---

## 📌 Notes

- Never commit `.env` files
- Use `.env.example` for sharing config
- Ensure MongoDB Atlas IP is whitelisted (`0.0.0.0/0`)

---

## 🔮 Future Improvements

- JWT Authentication
- Role-based access control
- Input validation (Joi/Zod)
- Logging & monitoring
- Docker support

---

## 🤝 Contributing

Pull requests are welcome. Feel free to fork and improve.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Bhanu Prakash Salapu**  
GitHub: https://github.com/prakashsalapu

---

## ⭐ Star This Repo

If this project helped you, consider giving it a star ⭐  
It helps others discover it and supports further improvements.
