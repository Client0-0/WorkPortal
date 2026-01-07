# SkillLink - Modern Job Portal

**SkillLink** is a comprehensive full-stack application connecting job seekers with employers. It features a modern, high-contrast "Deep Space" UI with glassmorphism effects, ensuring a premium user experience.

## 🚀 Features

*   **Role-Based Access**: Distinct workflows for **Employers** and **Job Seekers**.
*   **Job Management**: Employers can post, edit, and delete job listings seamlessly.
*   **Application Tracking**: Employers can view a list of all applicants for their posted jobs.
*   **Modern UI/UX**:
    *   **Dark Mode**: A rich "Deep Space" indigo variant.
    *   **Glassmorphism**: Translucent cards and navigation.
    *   **Responsive Grid**: Adapts perfectly to different screen sizes.
*   **Interactive Forms**: High-readability forms with validation.

## 🛠️ Tech Stack

*   **Frontend**: Angular 19, Angular Material, SCSS, RxJS
*   **Backend**: Node.js, Express.js
*   **Database**: MySQL

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js (v18 or higher)
*   MySQL Server

### 1. Database Setup
Ensure your MySQL server is running.
1.  Navigate to the backend folder:
    ```bash
    cd job-portal-backend
    ```
2.  Run the setup script to create tables:
    ```bash
    node setup_db.js
    ```
    *(Note: Ensure your database credentials in `models/db.js` matches your local MySQL setup)*

### 2. Backend Setup
Start the API server.
```bash
cd job-portal-backend
npm install
node server.js
```
*The backend server will start on port `8080`.*

### 3. Frontend Setup
Start the Angular application.
```bash
cd job-portal-frontend
npm install
npm start
```
*Access the application at `http://localhost:4200`.*

## 📖 How to Use

1.  **Select Your Role**: Upon launching, choose between **Job Seeker** or **Employer**.
2.  **For Employers**:
    *   Click "Post New Job" to create a listing.
    *   Navigate to "Applications" to see who has applied.
3.  **For Job Seekers**:
    *   Browse the "Available Jobs" grid.
    *   Click "Apply" regarding any job card to submit your application.

## 📂 Project Structure

```
job-portal/
├── job-portal-backend/   # Node.js API & Database Logic
├── job-portal-frontend/  # Angular Source Code
└── README.md             # Project Documentation
```
