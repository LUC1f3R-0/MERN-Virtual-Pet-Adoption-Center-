
"First of all, my apologies for the rough UI. My expertise lies mainly in back-end development, and, to be honest, most of my UIs tend to look like this. I had only one day — actually just 12 hours — to complete this, so I hope you’ll understand. Looking forward to hearing some good news. Enjoy!"




# 🐾 Virtual Pet Adoption Center (MERN Stack)

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application that simulates a virtual pet adoption center. Users can view, edit, and manage pets with an intuitive interface styled using Tailwind CSS.

---

## 🚀 Features

- Add, edit, delete pet profiles
- View pet mood, species, and adoption status
- RESTful API integration
- Responsive UI built with Tailwind CSS
- Separate frontend and backend environments

---

## 🛠️ Technologies Used

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **API Style**: RESTful

---

## ⚙️ Setup Instructions

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/LUC1f3R-0/MERN-Virtual-Pet-Adoption-Center-.git
cd MERN-Virtual-Pet-Adoption-Center-
2. 🎨 Frontend Setup
Navigate to the frontend folder, install the required dependencies, and set up the environment variables.

bash
Copy
Edit
cd frontend
npm install
Create a .env file in the frontend/ folder with the following:

env
Copy
Edit
VITE_BACKEND_ENTRYPOINT=http://localhost:5000
Then, start the frontend:

bash
Copy
Edit
npm run dev
Frontend will typically run at: http://localhost:5173

3. 🧠 Backend Setup
Navigate to the backend folder, install the dependencies, and set up the backend environment variables.

bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend/ folder with the following variables:

env
Copy
Edit
BACKEND_HOST=localhost
BACKEND_PORT=5000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string_here
Then, start the backend server:

bash
Copy
Edit
npm run server
Backend will run at: http://localhost:5000

🌐 API Endpoints (Sample)
Method	Endpoint	Description
GET	/pets	Get all pets
GET	/pets/:id	Get pet by ID
POST	/pets	Add new pet
PUT	/pets/:id	Update pet by ID
DELETE	/pets/:id	Delete pet by ID

📁 Folder Structure
perl
Copy
Edit
MERN-Virtual-Pet-Adoption-Center-/
│
├── frontend/
├── backend/
├── README.md
```
