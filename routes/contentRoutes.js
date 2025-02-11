const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

// Portfolio edit-content
router.post('/add/portfolio', contentController.addConentPortfolio);
router.post('/update/portfolio', contentController.updatePortfolio);
router.get('/get', contentController.getEditContent);

// Testimonials edit-content
router.post('/add/testimonials', contentController.addTestimonials);
router.post('/update/testimonials', contentController.updateTestimonials);

// Our Work edit-content
router.post('/add/ourWork', contentController.addConentPortfolio);
router.post('/update/ourWork', contentController.updatePortfolio);

// Client Gallery edit-content
router.post('/add/clientGallery', contentController.addConentPortfolio);
router.post('/update/clientGallery', contentController.updatePortfolio);

// Our Stories edit-content
router.post('/add/ourStories', contentController.addTestimonials);
router.post('/update/ourStories', contentController.updateTestimonials);

// Other Service edit-content
router.post('/add/otherService', contentController.addConentPortfolio);
router.post('/update/otherService', contentController.updatePortfolio);

// Other Service with Logo edit-content
router.post('/add/otherService/logo', contentController.addTestimonials);
router.post('/update/otherService/logo', contentController.updateTestimonials);

module.exports = router;