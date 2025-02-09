const express = require('express');
const authRoutes = require('./authRoutes');
const uploadRoutes = require('./uploadRoutes');

const router = express.Router();

// Import your route modules here

// Use the route modules
router.use('/users', authRoutes);
router.use('/uploads', uploadRoutes);

module.exports = router;