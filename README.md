# Chat App Fullstack

This is a fullstack chat application built with a React frontend and a Node.js/Express backend. The app supports user authentication, real-time messaging with Socket.IO, and image uploads via Cloudinary.

---

## Project Structure

- **frontend/**: React app source code
- **backend/**: Node.js/Express backend API and WebSocket server

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- MongoDB instance (local or cloud)
- Cloudinary account for image uploads

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment variables (create a `.env` file in `backend/`):
   - `PORT`: Port number for backend server (e.g., 5000)
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT authentication
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Cloudinary credentials
   - `FRONTEND_URL`: URL of the frontend app (used for CORS configuration)

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## Key Dependencies and Why They Are Used

### Backend

- **express**: Web framework for building REST APIs and handling HTTP requests.
- **mongoose**: MongoDB object modeling tool for schema definition and data validation.
- **bcryptjs**: For hashing user passwords securely.
- **jsonwebtoken**: For generating and verifying JWT tokens for authentication.
- **cookie-parser**: To parse cookies for session management.
- **cors**: To enable Cross-Origin Resource Sharing between frontend and backend.
- **dotenv**: To load environment variables from `.env` files.
- **cloudinary**: For uploading and managing images in the cloud.
- **socket.io**: For real-time bidirectional communication between client and server.
- **nodemon** (dev dependency): Automatically restarts the server on code changes during development.

### Frontend

- **react**: UI library for building interactive user interfaces.
- **axios**: For making HTTP requests to the backend API.
- **zustand**: State management library for React.
- **vite**: Development build tool and dev server for fast frontend builds.

---

## Notes

- The backend uses Express v4.21.1 for stability and compatibility.
- CORS origin is configurable via the `FRONTEND_URL` environment variable to support different deployment environments.
- Socket.IO is configured to allow connections only from the frontend URL.
- Images are uploaded as base64 strings and stored in Cloudinary.
- JWT tokens are stored in HTTP-only cookies for security.

---

## Deployment

- The app can be deployed on platforms.
- Make sure to set all required environment variables in the deployment environment.
- After deployment, monitor logs for any errors and verify real-time messaging functionality.

---

This README provides a basic overview and setup instructions for the project.
