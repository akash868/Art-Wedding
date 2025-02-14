const express = require('express');
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');
 
const router = express.Router();
 
// Portfolio edit-content
router.post('/portfolio', authMiddleware, contentController.addConentPortfolio("Portfolio"));
router.put('/portfolio', authMiddleware, contentController.updatePortfolio("Portfolio"));
router.get('/portfolio', contentController.getEditContent("Portfolio"));
 
// Testimonials edit-content
router.post('/testimonials', authMiddleware, contentController.addContentById("Testimonials"));
router.put('/testimonials', authMiddleware, contentController.updateContentById("Testimonials"));
router.get('/testimonials', contentController.getEditContent("Testimonials"));
 
// Our Work edit-content
router.post('/ourWork', authMiddleware, contentController.addConentPortfolio("Our-Work"));
router.put('/ourWork', authMiddleware, contentController.updatePortfolio("Our-Work"));
router.get('/ourWork', contentController.getEditContent("Our-Work"));
 
// Client Gallery edit-content
router.post('/clientGallery', authMiddleware, contentController.addConentPortfolio("Client-Gallery"));
router.put('/clientGallery', authMiddleware, contentController.updatePortfolio("Client-Gallery"));
router.get('/clientGallery', contentController.getEditContent("Client-Gallery"));
 
// Our Stories edit-content
router.post('/ourStories', authMiddleware, contentController.addTestimonials("Our-Stories"));
router.put('/ourStories', authMiddleware, contentController.updateTestimonials("Our-Stories"));
router.get('/ourStories', contentController.getEditContent("Our-Stories"));
 
// Other Service edit-content
router.post('/otherService', authMiddleware, contentController.addConentPortfolio("Other-Service"));
router.put('/otherService', authMiddleware, contentController.updatePortfolio("Other-Service"));
router.get('/otherService', contentController.getEditContent("Other-Service"));
 
// Other Service with Logo edit-content
router.post('/otherService-logo', authMiddleware, contentController.addContentById("Other-Service-Logo"));
router.put('/otherService-logo', authMiddleware, contentController.updateContentById("Other-Service-Logo"));
router.get('/otherService-logo', contentController.getEditContent("Other-Service-Logo"));
 
module.exports = router;