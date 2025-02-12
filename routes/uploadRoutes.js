const express = require("express");
const { upload, uploadImage, getImages, updateImage, deleteImage } = require("../controllers/imageUploadController");
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// 🏠 Home Image
router.post("/homeImage", authMiddleware, upload.single("image"), uploadImage("homeImage"));
router.get("/homeImage", getImages("homeImage"));

// 📋 List Images (Add, Update, Get, Delete)
router.post("/listImages", authMiddleware, upload.single("image"), uploadImage("listImages"));
router.get("/listImages", getImages("listImages"));
router.put("/listImages", authMiddleware, updateImage("listImages"));
router.delete("/listImages", authMiddleware, deleteImage("listImages"));

// 🌟 Testimonials (Add, Update, Get)
router.post("/testimonials", authMiddleware, upload.single("image"), uploadImage("testimonials"));
router.get("/testimonials", getImages("testimonials"));
router.put("/testimonials", authMiddleware, updateImage("testimonials"));

// 📸 Client Gallery (Add, Update, Get)
router.post("/clientGallery", authMiddleware, upload.single("image"), uploadImage("clientGallery"));
router.get("/clientGallery", getImages("clientGallery"));
router.put("/clientGallery", authMiddleware, updateImage("clientGallery"));

// 📞 Contact Us (Add, Update, Get)
router.post("/contactUs", authMiddleware, upload.single("image"), uploadImage("contactUs"));
router.get("/contactUs", getImages("contactUs"));
router.put("/contactUs", authMiddleware, updateImage("contactUs"));

// 📰 Our Stories (Add, Update, Get)
router.post("/ourStories", authMiddleware, upload.single("image"), uploadImage("ourStories"));
router.get("/ourStories", getImages("ourStories"));
router.put("/ourStories", authMiddleware, updateImage("ourStories"));

// 📲 Follow Us (Add, Update, Get)
router.post("/followUs", authMiddleware, upload.single("image"), uploadImage("followUs"));
router.get("/followUs", getImages("followUs"));
router.put("/followUs", authMiddleware, updateImage("followUs"));

// 🎉 Other Services (Add, Update, Get)
router.post("/otherServices", authMiddleware, upload.single("image"), uploadImage("otherServices"));
router.get("/otherServices", getImages("otherServices"));
router.put("/otherServices", authMiddleware, updateImage("otherServices"));

module.exports = router;
