# Full Stack Developer Assignment - Future Skills

## Overview
This project is part of my assignment for Full Stack Developer job at Future Skills, I developed a simple Full Stack web application using Node.js, Express, MongoDB for the backend, and React.js for the frontend. The application features a basic API that handles operations like creating and retrieving "cards," which are stored in a MongoDB database.

## Features
- Create Cards: Users can create new cards with a title and description.
- View All Cards: Fetch and display all cards stored in the database.
- Search by Title: Search for specific cards by title using a URL parameter.

## Technology Stack

### Frontend:
- React.js
- HTML/CSS

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose for data modeling)

### Tools:
- MongoDB Compass
- Postman (for API testing)

## Project Structure
```
fullstack-assignment/
│
├── Backend/
│   ├── models/
│   │   └── Card.js        # Mongoose model for Card
│   ├── routes/
│   │   └── cards.js       # API routes for Card operations
│   ├── .env               # Environment variables (MongoDB URI, etc.)
│   ├── index.js           # Main server file
│   └── package.json       # Node.js dependencies and scripts
│
├── Frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main React app component
│   │   └── index.js       # Entry point for React
│   ├── public/
│   └── package.json       # Frontend dependencies and scripts
│
└── README.md              # Project documentation
```
## Getting Started
### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
Clone the repository:

```bash
git clone https://github.com/iAmritMalviya/fullstack-assignment
cd fullstack-assignment
```

#### Backend Setup:

Navigate to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

Set up your .env file with your MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/HelpCenterApi
PORT=5000
```

Run the backend server:

```bash
node index.js
```

#### Frontend Setup:

Navigate to the frontend directory and install dependencies:

```bash
cd ../Frontend
npm install
```

Start the frontend development server:
```bash
npm start
```

### Usage
Access the Frontend: Visit http://localhost:3000 in your web browser to interact with the application.

Access the Backend: The backend API runs on http://localhost:5000.

API Endpoints
- Create a Card: POST /cards
- Get All Cards: GET /cards
- Search by Title: GET /cards/:title

### Insert Data
Example data can be inserted into the MongoDB collection using the /cards API.
```json
{
  "title": "Sample Card",
  "description": "This is a sample card for testing."
}
```

use below curl command to insert data
```bash
curl --location 'http://localhost:5000/cards' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Sample Card",
  "description": "This is a sample card for testing."
}'
```


