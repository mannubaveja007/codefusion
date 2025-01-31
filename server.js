require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Ensure correct path

const app = express();

// Call MongoDB connection
connectDB().then(() => {
  console.log("Database connection function executed.");
}).catch(err => {
  console.error("Error in database connection:", err);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
