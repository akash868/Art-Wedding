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
router.post('/add/ourWork', contentController.addOurWorkContent);
router.post('/update/ourWork', contentController.updateOurWorkContent);

// Client Gallery edit-content
router.post('/add/clientGallery', contentController.addClientGalleryContent);
router.post('/update/clientGallery', contentController.updateClientGalleryContent);

// Our Stories edit-content
router.post('/add/ourStories', contentController.addOurStoriesContent);
router.post('/update/ourStories', contentController.updateOurStoriesContent);

// Other Service edit-content
router.post('/add/otherService', contentController.addOtherServiceContent);
router.post('/update/otherService', contentController.updateOtherServiceContent);

// Other Service with Logo edit-content
router.post('/add/otherService/logo', contentController.addOtherServiceWithLogoContent);
router.post('/update/otherService/logo', contentController.updateOtherServiceWithLogoContent);

module.exports = router;