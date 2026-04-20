# 🚀 MERN Boilerplate

A simple and clean starter template for building full-stack apps using the **MERN stack** (MongoDB, Express, React, Node.js).

This boilerplate helps you skip setup time and start building features right away.

---

### 📦 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Others:** Axios, dotenv, CORS  

---

### 📁 Project Structure

```
mern-boilerplate/
│
├── client/ # React frontend (what users see)
│ ├── public/ # Static files like favicon
│ ├── src/
│ │ ├── components/ # Reusable pieces (buttons, cards, etc.)
│ │ ├── pages/ # Full page components (Home, About, etc.)
│ │ ├── services/ # API calls to your backend
│ │ ├── utils/ # Helper functions
│ │ ├── App.jsx # Main app component
│ │ └── main.jsx # Entry point
│ ├── .env # Frontend environment variables
│ └── package.json # Frontend dependencies
│
├── server/ # Backend API (the brain)
│ ├── src/
│ │ ├── config/ # Database setup
│ │ ├── controllers/ # Request handlers (the logic)
│ │ ├── models/ # MongoDB schemas
│ │ ├── routes/ # API endpoints
│ │ ├── middleware/ # Auth, error handlers, etc.
│ │ ├── utils/ # Helper functions
│ │ ├── app.js # Express app setup
│ │ └── server.js # Server startup
│ ├── .env # Backend secrets (NEVER commit this!)
│ └── package.json # Backend dependencies
│
├── .gitignore # Files Git should ignore
└── README.md # You're reading it!
```

---

### ⚙️ Setup Instructions

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-boilerplate.git
cd mern-boilerplate
```

---

#### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

---

#### 3. Setup Frontend

```bash
cd client
npm install
```

Run frontend:

```bash
npm start
```

---

### 🔗 API Base URL

```
http://localhost:5000/api
```

---

### ✨ Features

- Clean folder structure
- Pre-configured Express server
- MongoDB connection setup
- Ready-to-use API routing
- React frontend setup
- Axios integration ready

---

### 🧠 How to Use

- Add your models in `server/models`
- Create routes in `server/routes`
- Handle logic in `server/controllers`
- Build UI inside `client/src`

---

### 🛠 Scripts

#### Backend

```bash
npm run dev     # run with nodemon
npm start       # production
```

#### Frontend

```bash
npm start       # start React app
npm run build   # build for production
```

---

### 📌 Notes

- Make sure MongoDB is running or use MongoDB Atlas
- Don’t forget to add `.env` to `.gitignore`

---

### 🤝 Contributing

Feel free to fork this repo and improve it. PRs are welcome.

---

### 📄 License

MIT License

---

### ⭐ Star This Repo!
If this boilerplate saves you time (and I bet it will), give it a star! It helps others find it and motivates me to keep improving it.

Happy coding! May your bugs be few and your deployments smooth. 🚀