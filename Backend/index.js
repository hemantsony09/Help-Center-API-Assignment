require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Define your routes for the cards API
app.use('/cards', require('./routes/cards')); // This uses the cards route

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
