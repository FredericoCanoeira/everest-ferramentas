const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON in request bodies
app.use(express.json());

// MongoDB connection URI from environment variables
const mongoURI = process.env.DB_URI || 'mongodb+srv://EverestApp:Everest1@cluster0.nr4o5.mongodb.net/EverestAppDB?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process if connection fails
    });

// Basic server configuration
app.get('/', (req, res) => res.send('Server is running'));

// Importing user routes
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes); // Prefix routes with `/api/users`

// Importing report routes
const reportRoutes = require('./routes/reportRoutes');
app.use('/api/reports', reportRoutes); // Prefix routes with `/api/reports`

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
