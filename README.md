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
1. Clone the repo

```
git clone https://github.com/prakashsalapu/mern-boilerplate.git
cd mern-boilerplate
```
2. Setup Backend
```
cd server
npm install

Create .env inside server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend:

npm run dev
```

3. Setup Frontend
```
cd client
npm install
npm run dev
🔗 API Base URL
http://localhost:5000/api
```

### ✨ Features
1.Scalable folder structure (MVC pattern)
2.MongoDB integration with Mongoose
3.REST API setup
4.Environment-based configuration
5.Error handling middleware
6.Frontend-backend integration ready
7.Deployment-ready setup


### 🚀 Deployment Guide
🌐 Deploy Backend on Render

Steps:
1.Go to Render Dashboard
2.Click New Web Service
3.Connect your GitHub repo
4.Select:
Root Directory: server

Build Command:
```
npm install
```
Start Command:
```
npm start
```

5.Add Environment Variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=10000
```
6.Click Deploy

🌍 Deploy Frontend on Vercel
Steps:

1.Go to Vercel Dashboard
2.Click New Project
3.Import your GitHub repo
4.Select:
    1.Root Directory: client
    2.Framework: Vite (auto-detected)
5.Add Environment Variable:
```
VITE_API_URL=https://your-render-backend-url/api
```
6.Click Deploy


###🔗 Connecting Frontend & Backend

Make sure your frontend .env:
```
VITE_API_URL=https://your-render-backend-url/api
```

🧪 API Endpoints
Health Check
```
GET /
```

Users
```
GET    /api/users
POST   /api/users
```

🛠 Scripts
1.Backend
```
npm run dev     # development (nodemon)
npm start       # production
```
2.Frontend
```
npm run dev     # start dev server
npm run build   # production build
```


###📌 Notes
Never commit .env files
Use .env.example for sharing config
Ensure MongoDB Atlas IP is whitelisted (0.0.0.0/0)


###🔮 Future Improvements
JWT Authentication
Role-based access control
Input validation (Joi/Zod)
Logging & monitoring
Docker support

###🤝 Contributing

Pull requests are welcome. Feel free to fork and improve.

###📄 License

MIT License

### 👨‍💻 Author

Bhanu Prakash Salapu
GitHub: https://github.com/prakashsalapu

### ⭐ Star This Repo

If this project helped you, consider giving it a star ⭐
It helps others discover it and supports further improvements.