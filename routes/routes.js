const express = require('express');
const authRoutes = require('./authRoutes');
const uploadRoutes = require('./uploadRoutes');
const editContentRoutes = require('./contentRoutes')

const router = express.Router();

// Import your route modules here

// Use the route modules
router.use('/users', authRoutes);
router.use('/uploads', uploadRoutes);
router.use('/content', editContentRoutes);

module.exports = router;