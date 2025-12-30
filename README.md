# MERN Notes Application

A full-stack notes management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to create, read, update, and delete notes with a clean and intuitive interface.

## 🚀 Live Demo

**Deployed Application:** [https://your-deployed-app-url.com](https://your-deployed-app-url.com)

> **Note:** Replace the URL above with your actual deployment URL.

## ✨ Features

- 📝 Create, read, update, and delete notes
- 🎨 Modern and responsive UI built with React and TailwindCSS
- 🔒 Rate limiting for API protection
- ⚡ Fast and efficient with Vite
- 🗄️ MongoDB database for data persistence
- 🚦 Real-time toast notifications for user feedback

## 🛠️ Technology Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - TailwindCSS component library
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **React Router** - Client-side routing
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Upstash Redis** account (for rate limiting)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aBDULQADARmANASAWALA/MERN.git
   cd MERN
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   # MongoDB Configuration
   MONGO_URI=your_mongodb_connection_string

   # Server Configuration
   PORT=5001
   NODE_ENV=development

   # Upstash Redis Configuration (for rate limiting)
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

   **Note:** Replace the placeholder values with your actual credentials.

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on `http://localhost:5001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the application**
   ```bash
   # From the root directory
   npm run build
   ```
   This will install all dependencies and build the frontend.

2. **Start the production server**
   ```bash
   npm start
   ```
   The application will be served from the backend on port 5001.

## 📁 Project Structure

```
MERN/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # Database configuration
│   │   │   └── upstash.js         # Upstash Redis configuration
│   │   ├── controllers/
│   │   │   └── notesControllers.js # Note CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # Entry point
│   ├── public/                    # Static assets
│   └── package.json
├── .gitignore
└── package.json                   # Root package configuration
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 🧪 Testing

```bash
# Run frontend linting
cd frontend
npm run lint
```

## 🌐 Deployment

The application is configured for production deployment. When `NODE_ENV` is set to `production`, the backend serves the built frontend from the `frontend/dist` directory.

### Deployment Steps:

1. Set environment variables on your hosting platform
2. Run `npm run build` to build the frontend
3. Run `npm start` to start the production server
4. Ensure MongoDB and Upstash Redis are accessible from your hosting environment

## 📝 Environment Variables Reference

### Backend `.env` file

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `PORT` | Server port (default: 5001) | No |
| `NODE_ENV` | Environment (development/production) | Yes |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL for rate limiting | Yes |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis authentication token | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Abdul Qadar Manasawala**

- GitHub: [@aBDULQADARmANASAWALA](https://github.com/aBDULQADARmANASAWALA)

## 🙏 Acknowledgments

- MongoDB for the database
- Upstash for Redis rate limiting
- Vercel/Vite team for the amazing build tool
- TailwindCSS and DaisyUI for the UI components
