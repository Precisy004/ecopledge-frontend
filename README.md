 🌿 EcoPledge Tracker

*A MERN Stack project aligned with UN SDG 13 – Climate Action*

### 💡 Overview

**EcoPledge** is a full-stack web application that encourages individuals to take positive environmental actions.
Users can log their eco-friendly activities — such as recycling, using bicycles, or planting trees — and track their progress through a personal dashboard, leaderboard, and weekly activity chart.

This project was built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** and styled using **TailwindCSS** and **Recharts**.

---

### 🌍 Why This Project Matters

Climate change remains one of the most urgent global challenges. EcoPledge contributes to **UN Sustainable Development Goal 13 (Climate Action)** by:

* Promoting environmentally conscious habits
* Quantifying and visualizing individual contributions
* Encouraging friendly competition through the leaderboard system
* Building a community of people committed to sustainable living

---

### 🚀 Features

✅ Log eco-friendly actions (e.g., recycling, carpooling, tree planting)
✅ Automatically calculate total eco points
✅ Live leaderboard with motivational badges
✅ Interactive weekly performance chart
✅ Fully responsive TailwindCSS design
✅ RESTful API built with Express and MongoDB

---

### 🧩 Tech Stack

| Category       | Technologies                           |
| -------------- | -------------------------------------- |
| **Frontend**   | React.js, TailwindCSS, Axios, Recharts |
| **Backend**    | Node.js, Express.js                    |
| **Database**   | MongoDB (Atlas or Local)               |
| **Deployment** | Render (Backend), Vercel (Frontend)    |

---

### ⚙️ Installation & Setup

#### 1️⃣ Clone the project

```bash
git clone https://github.com/<your-username>/ecopledge.git
cd ecopledge
```

#### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Then start the backend server:

```bash
npm run dev
```

You should see:

```
✅ MongoDB Connected
Server running on port 5000
```

#### 3️⃣ Frontend setup

```bash
cd ../frontend
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view your app locally.

---

### ☁️ Deployment

#### Backend (Render)

1. Push your backend code to GitHub.
2. Go to [https://render.com](https://render.com) → **New Web Service**.
3. Connect your GitHub repo.
4. Add environment variables from `.env`.
5. Deploy and get your backend URL (e.g., `https://ecopledge-backend.onrender.com`).

#### Frontend (Vercel)

1. Push your frontend code to GitHub.
2. Go to [https://vercel.com](https://vercel.com) → **Add New Project**.
3. Import your repo and click Deploy.
4. Update your frontend’s `api.js`:

   ```js
   export const api = axios.create({
     baseURL: 'https://ecopledge-backend.onrender.com/api',
   });
   ```
5. Your app will be live at `https://ecopledge.vercel.app`.

---

### 🌱 Example Use

| Name    | Action                | Points |
| ------- | --------------------- | ------ |
| Ayomide | Planted a tree        | 5      |
| Tolu    | Used public transport | 2      |
| Ada     | Recycled plastic      | 3      |

Total eco points and leaderboard update automatically — inspiring healthy competition for sustainability.

---

### 🧠 Lessons Learned

* Connecting React frontend with a live Node/Express backend
* Working with REST APIs and MongoDB
* Handling CORS and environment variables
* Visualizing data using Recharts
* Deploying full MERN apps on free cloud services

---

###  Acknowledgment

This project was built as part of the **PLP Academy MERN Stack Specialization**, with a focus on promoting **climate-conscious technology** and supporting **SDG 13: Climate Action**.

---

###  Author

**Adesanya Ayomide Precious**
