const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
// Example: app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;
