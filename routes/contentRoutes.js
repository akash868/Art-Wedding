const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

// Portfolio edit-content
router.post('/add/portfolio/edit-content', contentController.addConentPortfolio);
router.post('/update/portfolio/edit-content', contentController.updatePortfolio);
router.get('/get/edit-content', contentController.getEditContent);

// Testimonials edit-content
router.post('/add/testimonials/edit-content', contentController.addTestimonials);
router.post('/update/testimonials/edit-content', contentController.updateTestimonials);

// Our Work edit-content
router.post('/add/ourWork/edit-content', contentController.addOurWorkContent);
router.post('/update/ourWork/edit-content', contentController.updateOurWorkContent);

// Client Gallery edit-content
router.post('/add/clientGallery/edit-content', contentController.addClientGalleryContent);
router.post('/update/clientGallery/edit-content', contentController.updateClientGalleryContent);

// Our Stories edit-content
router.post('/add/ourStories/edit-content', contentController.addOurStoriesContent);
router.post('/update/ourStories/edit-content', contentController.updateOurStoriesContent);

// Other Service edit-content
router.post('/add/otherService/edit-content', contentController.addOtherServiceContent);
router.post('/update/otherService/edit-content', contentController.updateOtherServiceContent);

// Other Service with Logo edit-content
router.post('/add/otherService/logo/edit-content', contentController.addOtherServiceWithLogoContent);
router.post('/update/otherService/logo/edit-content', contentController.updateOtherServiceWithLogoContent);

module.exports = router;