
# Task Management App - Backend

This repository contains the backend code for the Task Management App. It is built with Node.js and Express.js, providing RESTful APIs for task management.

## Features

### 🔹 Signup

The backend allows users to create a new account by providing their name, email, and password. The API will handle user registration and store the data securely.

---

### 🔹 Login

Users can log into the system with their email and password. The backend authenticates the credentials and returns a JSON Web Token (JWT) for session management.

---

### 🔹 Dashboard

The dashboard API fetches the list of all tasks assigned to the logged-in user. The user can view the tasks, their statuses, and other related information.

---

### 🔹 Create New Task

A form where the user can create a new task. The backend API allows users to input task details like the title, description, and priority level.

---

### 🔹 Edit Task

The user can edit a task's details such as title, description, or due date. The API updates the task information in the database.

---

### 🔹 Delete Task

Users can delete tasks. The backend API provides an endpoint to delete a task from the database based on its ID.

---

## Technologies Used

- **Node.js**: JavaScript runtime used for server-side code.
- **Express.js**: Web framework for building the RESTful APIs.
- **MongoDB**: Database to store user and task information.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **Mongoose**: ORM for MongoDB, to interact with the database.
  
---

## Setup and Installation

1. Clone the repository.
    ```bash
    git clone https://github.com/your-username/task-management-backend.git
    ```

2. Navigate to the backend directory.
    ```bash
    cd task-management-backend
    ```

3. Install the dependencies.
    ```bash
    npm install
    ```

4. Create a `.env` file and configure it with your environment variables (e.g., MongoDB URI, JWT secret).
    Example:
    ```env
    MONGODB_URI=mongodb://localhost:27017/taskdb
    JWT_SECRET=your-secret-key
    ```

5. Start the server.
    ```bash
    npm start
    ```

---

## API Endpoints

### POST /api/signup

Registers a new user.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

### POST /api/login

Logs a user in and returns a JWT token.

**Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

### GET /api/tasks

Fetches all tasks for the logged-in user.

---

### POST /api/tasks

Creates a new task.

**Body:**
```json
{
  "title": "Task 1",
  "description": "This is a task description",
  "priority": "high"
}
```

---

### PUT /api/tasks/:id

Edits a task by its ID.

**Body:**
```json
{
  "title": "Updated Task 1",
  "description": "Updated task description",
  "priority": "medium"
}
```

---

### DELETE /api/tasks/:id

Deletes a task by its ID.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
