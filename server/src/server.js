const express = require('express');
const config = require('config');

const connectDB = require('./db');

const PORT = config.get('PORT');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
