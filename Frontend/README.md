🚀 Features

🔑 User Authentication (Register/Login)

📞 Real-time Video Calling (WebRTC + Socket.IO)

📜 User Meeting History

🔐 JWT-based Authentication

🎨 Modern UI with Material UI

🛠️ Tech Stack

Frontend:

React.js (Vite)

Material UI

Axios

React Router DOM

Backend:

Node.js

Express.js

MongoDB (Mongoose)

Socket.IO

bcrypt & JWT

CORS

📂 Project Structure
project-root/
│── backend/        # Express + MongoDB + Socket.IO
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── ...
│   ├── package.json
│
│── frontend/       # React (Vite + MUI)
│   ├── src/
│   ├── package.json
│
│── .gitignore
│── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/video-calling-app.git
cd video-calling-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install


Create a .env file inside frontend/:

VITE_SERVER_URL=http://localhost:8000/api/v1/users


Run the frontend:

npm run dev

🖥️ Usage

Open the frontend in your browser (default: http://localhost:5173).

Register a new account or log in.

Start or join a video call.

Check your meeting history in your profile.

🤝 Contributing

Pull requests are welcome! Please fork the repo and submit a PR.

📜 License

This project is licensed under the MIT License.