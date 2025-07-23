
**🧩 CRM Project – MERN Stack**

**Customer Relationship Management (CRM)** System — a robust full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js). This CRM system empowers teams to manage clients, employees, leads, and customer support efficiently via a modern UI and responsive backend.

---

Key Features 

- **Client Management (CRUD)** – Add, view, update, and delete client profiles.
- **Employee Management (CRUD)** – Full functionality to manage employee records.
- **Lead Tracking** – Create, assign, and update lead statuses.
- **Customer Support Issues** – Log, track, and resolve customer issues effectively.
- **Real-Time Updates** – Fast and responsive interactions using a RESTful API.

---

**Tech Stack**

 **Frontend:**
- React.js (with Hooks)
- React Router DOM
- Axios (for API communication)
- Bootstrap (for responsive UI)
- dotenv (for environment configuration)

**Backend:**
- Node.js + Express.js (RESTful API)
- MongoDB + Mongoose (NoSQL database)

---

**Installation & Setup**

**1. Clone the Repository**
```bash
git clone https://github.com/sakshipatil0717/CRM_MERN_Project.git
cd CRM_MERN_Project


2.Backend Setup
cd backend
npm install
npm start


3. Frontend Setup
cd ../frontend
npm install
npm start

---


📁 Folder Structure

CRM_MERN_Project/
│
├── backend/
│   ├── models/           # Mongoose schemas (Client, Employee, Lead, etc.)
│   ├── routes/           # Express route handlers (API logic)
│   ├── index.js          # Entry point of the backend server
│
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable React UI components
│   │   ├── App.js        # Main application routing
│   │   ├── index.js      # ReactDOM render
│   └── public/
│
├── README.md
├── package.json          # May include scripts for concurrently running backend & frontend
└── .gitignore






