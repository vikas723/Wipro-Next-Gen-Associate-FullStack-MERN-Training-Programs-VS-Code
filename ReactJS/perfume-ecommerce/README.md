

# 📌 Project Development Phases

This project was developed in **four structured phases** to demonstrate progressive implementation of frontend architecture, routing, state handling, API integration, validation, authentication, and UI enhancements using modern web technologies including **React, TypeScript, Tailwind CSS, Vite, and Fetch API**.

## 🚀 Phase 1 — Component Architecture & Basic Navigation

### ✅ Objective

Establish a reusable component structure and implement navigation across the application.

### 🔧 Implementations

* Created a **Components** folder to ensure modular UI development.
* Built reusable UI components for better maintainability.
* Added a **Services** folder for organizing business logic and API-related utilities.
* Implemented navigation between components to simulate multi-page interaction.

### 🛠 Technologies Used

* React
* TypeScript
* HTML5
* CSS3
* Tailwind CSS
* Vite

### 📌 Outcome

This phase established a scalable project structure and reusable component design, enabling smoother development in later phases.

## 🚀 Phase 2 — Pages, Routing & JSON Server Integration

### ✅ Objective

Introduce structured page routing and mock backend data handling.

### 🔧 Implementations

* Created a **Pages** folder to manage application views.
* Implemented routing for seamless navigation between pages.
* Developed all page components except:

  * Admin
  * Admin Dashboard
  * Login
  * Admin Products
* Installed and configured **JSON Server** for mock backend data.
* Added product data for API simulation.

### 🛠 Technologies Used

* React Router
* JSON Server
* TypeScript
* Fetch API
* Tailwind CSS

### 📌 Outcome

This phase enabled dynamic navigation and backend simulation, making the application more realistic and data-driven.

## 🚀 Phase 3 — Admin Panel, Validation & API Integration

### ✅ Objective

Implement authentication, validation, and real-time data fetching.

### 🔧 Implementations

* Created an **Admin** folder structure.
* Developed:
  * Admin Page
  * Admin Dashboard
  * Login Page
  * Admin Products Page
* Implemented form validation for:
  * Login
  * Contact Us
* Integrated **Formik** and **Yup** for form handling and validation.
* Used **Fetch API** to retrieve product data from JSON Server.

### 🛠 Technologies Used

* Formik
* Yup
* Fetch API
* React Hooks
* TypeScript

### 📌 Outcome

This phase introduced authentication logic, form validation, and API communication, making the application more interactive and functional.

## 🚀 Phase 4 — Advanced Features & UI Enhancements

### ✅ Objective

Enhance user experience with protected routes, global state management, and UI animations.

### 🔧 Implementations

* Created a **HOC (Higher Order Component)** for login protection.
* Implemented protected routing for admin access.
* Developed a **Context API** setup for global state management.
* Applied **CSS Transition Groups** for button animations and smoother UI interactions.

### 🛠 Technologies Used

* React Context API
* Higher Order Components (HOC)
* CSS Transition Groups
* Tailwind CSS

### 📌 Outcome

This phase improved application security, state handling, and visual experience, delivering a more professional and polished product.

# 🧩 Overall Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML5 & CSS3
* Fetch API
* JSON Server
* Formik & Yup
* React Router
* Context API

# ⚙️ Installation & Setup Guide

Follow the steps below to run this project locally on your system.

# 📌 Prerequisites

Ensure the following tools are installed on your machine:

Node.js (v16 or higher recommended)

npm or yarn

Git

VS Code or any code editor

To verify installations:

node -v
npm -v
git --version

# 📥 1. Clone the Repository
git clone <your-repository-url>
cd <project-folder-name>

# 📦 2. Install Dependencies

Run the following command to install all required packages:

## npm install

This will install:

React

TypeScript

Tailwind CSS

React Router

Formik & Yup

Other project dependencies

# ▶️ 3. Start the Development Server

Since this project uses Vite, start the frontend server with:

npm run dev


After running the command, open your browser and go to:

http://localhost:5173

# 🗄 4. Start JSON Server (Mock Backend)

This project uses JSON Server to simulate a backend API.

Step 1 — Install JSON Server globally (if not installed)
npm install -g json-server

Step 2 — Run JSON Server
json-server --watch db.json --port 3000


The API will be available at:

http://localhost:3000/products

# 🔐 5. Admin Login

Use the credentials configured in the project for admin access.

Example:

Email: admin@example.com
Password: admin123

## 🛠 Available Scripts
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build

# 📂 Project Folder Structure Overview
src/
 ┣ admin/
 ┣ components/
 ┣ context/
 ┣ hoc/
 ┣ pages/
 ┣ services/
 ┣ utils/
 ┣ validation/
 

# 🚨 Troubleshooting
If node_modules error occurs:
rm -rf node_modules package-lock.json
npm install

If port already in use:

Change the port or stop the existing process

# 📌 Conclusion

This project demonstrates a structured, phase-wise approach to frontend development, starting from basic component design to advanced routing, authentication, state management, and UI enhancements. Each phase builds upon the previous one, ensuring scalability, maintainability, and modern best practices.
