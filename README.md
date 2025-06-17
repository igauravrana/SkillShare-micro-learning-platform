# 🎓 SkillShare – A Micro Learning Platform

SkillShare is a MERN stack-based micro-learning platform where users can:
- 📌 Add tutorials
- 📖 View tutorials
- 💬 Comment on them
- 👍 Like tutorials

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose

---

## 🚀 Getting Started (For Team Members)

### 🔁 Clone the Repo
```bash
git clone https://github.com/your-username/SkillShare-MERN.git
cd SkillShare-MERN
```

### 🔧 1. Setup Backend
```bash
cd server
npm install
```

#### Create `.env` file in `server/`
```bash
touch .env
```

Add the following:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/Wipro
```

#### Start the Backend Server
```bash
npm start
```
Output:
```
🚀 Server is running on port 5000
✅ MongoDB connected
```

---

### 🌐 2. Setup Frontend
```bash
cd ../client
npm install
```

#### Start React App
```bash
npm start
```
> App runs at: `http://localhost:3000`

---

## ✅ Features Implemented
- Add tutorial (title, author, category, video URL, etc.)
- List all tutorials
- View details of a tutorial
- Like tutorial
- Comment on tutorial

---

## 📁 Folder Structure
```
SkillShare/
│
├── client/        # React frontend
│   └── src/
│       └── components/ (TutorialForm, TutorialList, TutorialDetails, etc.)
│
├── server/        # Express backend
│   ├── models/    # Mongoose schemas
│   ├── routes/    # Express routes
│   ├── .env       # Mongo URI config
│   └── server.js  # Main server file
```

---

## 📌 Future Improvements
- User authentication
- Categories and search filter
- Video upload support

---

## 👨‍💻 Maintainers
- Gaurav Rana (Lead Developer)
- Contributors: Your teammates here

---

Happy Hacking! 🚀
