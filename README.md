# 🚀 MERN Boilerplate - Your Full-Stack Jumpstart Kit

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)

> Stop configuring. Start building. This boilerplate handles all the boring setup so you can focus on what matters - your app idea.

## 📸 What You Get

A production-ready full-stack template with:
- ✅ **React** frontend (Vite-powered for lightning-fast development)
- ✅ **Node.js + Express** backend (clean, modular architecture)
- ✅ **MongoDB** database (with Mongoose ODM)
- ✅ **Pre-configured deployment** for Vercel (frontend) and Render (backend)
- ✅ **Environment variables** set up and ready to go
- ✅ **CORS configured** for seamless local and production development
- ✅ **Clean folder structure** that scales with your project

## 🎯 Perfect For

- Hackathon projects when you need to move fast
- Portfolio pieces that look professional
- Learning full-stack development without the setup headache
- Side projects that might grow into something bigger
- Bootcamp students who want a solid foundation

## 📁 Project Structure - Where Everything Lives
```mern-boilerplate/
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

## 🏃‍♂️ Quick Start - Get Running in 5 Minutes

### Prerequisites (Stuff You Need Installed)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/atlas/database) (free Atlas account works great)
- [Git](https://git-scm.com/) (for version control)

### Step 1: Clone and Install

```
# Clone this repo to your computer
git clone https://github.com/your-username/mern-boilerplate.git my-awesome-project

# Move into your new project folder
cd my-awesome-project

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

```

Step 2: Set Up Your Database
```
Head over to MongoDB Atlas (it's free!)

Create a new cluster (the free tier is plenty for starting out)

Click "Connect" and choose "Connect your application"

Copy that connection string - it looks like this:

text
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your actual values

```
Step 3: Configure Environment Variables
```
For the backend (create server/.env):

env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
For the frontend (create client/.env):

env
VITE_API_URL=http://localhost:5000
Step 4: Fire It Up!
Terminal 1 - Start the backend:

bash
cd server
npm run dev
You should see: Server is running on port 5000 and MongoDB connected

Terminal 2 - Start the frontend:

bash
cd client
npm run dev
You should see: Local: http://localhost:5173/

Open your browser to http://localhost:5173 and you're off to the races! 🎉
```
🚢 Deployment - Taking Your App Live
Frontend → Vercel (Takes 2 minutes, seriously)
Push your code to GitHub

Go to Vercel and sign in with GitHub

Click "New Project" → Import your repository

Vercel auto-detects everything. Just set:

Root Directory: client

Environment Variable: VITE_API_URL = your deployed backend URL (from next step)

Click "Deploy" and grab a coffee - it's that fast

Backend → Render (Also super quick)
Push your code to GitHub (same repo as above)

Go to Render and sign in

Click "New +" → "Web Service"

Connect your GitHub repo

Configure:

Root Directory: server

Build Command: npm install

Start Command: npm start

Environment Variable: MONGODB_URI = your MongoDB Atlas connection string

Click "Create Web Service"

Once both are deployed, update your Vercel environment variable with your Render backend URL, and you're live! 🚀


If this boilerplate saves you time (and I bet it will), give it a star! It helps others find it and motivates me to keep improving it.

Happy coding! May your bugs be few and your deployments smooth. 🚀

