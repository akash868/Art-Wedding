const express = require('express');
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Portfolio edit-content
router.post('/add/portfolio', authMiddleware, contentController.addConentPortfolio("Portfolio"));
router.post('/update/portfolio', authMiddleware, contentController.updatePortfolio("Portfolio"));
router.get('/get/portfolio', contentController.getEditContent("Portfolio"));

// Testimonials edit-content
router.post('/add/testimonials', authMiddleware, contentController.addTestimonials("Testimonials"));
router.post('/update/testimonials', authMiddleware, contentController.updateTestimonials("Testimonials"));
router.get('/get/testimonials', contentController.getEditContent("Testimonials"));

// Our Work edit-content
router.post('/add/ourWork', authMiddleware, contentController.addConentPortfolio("Our-Work"));
router.post('/update/ourWork', authMiddleware, contentController.updatePortfolio("Our-Work"));
router.get('/get/ourWork', contentController.getEditContent("Our-Work"));

// Client Gallery edit-content
router.post('/add/clientGallery', authMiddleware, contentController.addConentPortfolio("Client-Gallery"));
router.post('/update/clientGallery', authMiddleware, contentController.updatePortfolio("Client-Gallery"));
router.get('/get/clientGallery', contentController.getEditContent("Client-Gallery"));

// Our Stories edit-content
router.post('/add/ourStories', authMiddleware, contentController.addTestimonials("Our-Stories"));
router.post('/update/ourStories', authMiddleware, contentController.updateTestimonials("Our-Stories"));
router.get('/get/ourStories', contentController.getEditContent("Our-Stories"));

// Other Service edit-content
router.post('/add/otherService', authMiddleware, contentController.addConentPortfolio("Other-Service"));
router.post('/update/otherService', authMiddleware, contentController.updatePortfolio("Other-Service"));
router.get('/get/otherService', contentController.getEditContent("Other-Service"));

// Other Service with Logo edit-content
router.post('/add/otherService/logo', authMiddleware, contentController.addTestimonials("Other-Service-Logo"));
router.post('/update/otherService/logo', authMiddleware, contentController.updateTestimonials("Other-Service-Logo"));
router.get('/get/otherService/logo', contentController.getEditContent("Other-Service-Logo"));

module.exports = router;