const express = require("express");
const { upload, uploadImage, getImages, updateImage, deleteImage, uploadImageBasedOnUser, getImagesByCategory } = require("../controllers/imageUploadController");
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// 🏠 Home Image
router.post("/homeImage", authMiddleware, upload.single("image"), uploadImageBasedOnUser);
router.get("/homeImage", getImagesByCategory);

// router.post("/homeImage", authMiddleware, upload.single("image"), uploadImage());
// router.get("/homeImage", getImages("homeImage"));

// 📋 List Images (Add, Update, Get, Delete)
router.post("/listImages", authMiddleware, upload.single("image"), uploadImage("listImages"));
router.get("/listImages", getImages("listImages"));
router.put("/listImages", authMiddleware, upload.single("image"), updateImage("listImages"));
router.delete("/listImages", authMiddleware, deleteImage("listImages"));

// 🌟 Testimonials (Add, Update, Get)
router.post("/testimonials", authMiddleware, upload.single("image"), uploadImage("testimonials"));
router.get("/testimonials", getImages("testimonials"));
router.put("/testimonials", authMiddleware, upload.single("image"), updateImage("testimonials"));

// 📸 Client Gallery (Add, Update, Get)
router.post("/clientGallery", authMiddleware, upload.single("image"), uploadImage("clientGallery"));
router.get("/clientGallery", getImages("clientGallery"));
router.put("/clientGallery", authMiddleware, upload.single("image"), updateImage("clientGallery"));

// 📞 Contact Us (Add, Update, Get)
router.post("/contactUs", authMiddleware, upload.single("image"), uploadImage("contactUs"));
router.get("/contactUs", getImages("contactUs"));
router.put("/contactUs", authMiddleware, upload.single("image"), updateImage("contactUs"));

// 📰 Our Stories (Add, Update, Get)
router.post("/ourStories", authMiddleware, upload.single("image"), uploadImage("ourStories"));
router.get("/ourStories", getImages("ourStories"));
router.put("/ourStories", authMiddleware, upload.single("image"), updateImage("ourStories"));

// 📲 Follow Us (Add, Update, Get)
router.post("/followUs", authMiddleware, upload.single("image"), uploadImage("followUs"));
router.get("/followUs", getImages("followUs"));
router.put("/followUs", authMiddleware, upload.single("image"), updateImage("followUs"));

// 🎉 Other Services (Add, Update, Get)
router.post("/otherServices", authMiddleware, upload.single("image"), uploadImage("otherServices"));
router.get("/otherServices", getImages("otherServices"));
router.put("/otherServices", authMiddleware, upload.single("image"), updateImage("otherServices"));

module.exports = router;
