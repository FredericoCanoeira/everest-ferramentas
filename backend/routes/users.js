const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get all users' });
});

// Create a new user
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Create a new user' });
});

module.exports = router;
