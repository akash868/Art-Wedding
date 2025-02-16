const express = require("express");
const {
  upload,
  uploadImage,
  getImages,
  updateImage,
  deleteImage,
  uploadImageBasedOnUser,
  getImagesByCategory,
  checkImageLimit,
  updateImageBasedOnUserCategory
} = require("../controllers/imageUploadController");
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// 🏠 Home Image
router.post("/homeImage", authMiddleware, upload.single("image"), uploadImageBasedOnUser);
router.put("/homeImage", authMiddleware, upload.single("image"), updateImageBasedOnUserCategory);
router.get("/homeImage", getImagesByCategory);

// 📋 List Images (No Limit)
router.post("/listImages", authMiddleware, upload.single("image"), uploadImage("listImages"));
router.get("/listImages", getImages("listImages"));
router.put("/listImages", authMiddleware, upload.single("image"), updateImage("listImages"));
router.delete("/listImages", authMiddleware, deleteImage("listImages"));

// 🌟 Testimonials (Max 5 Images)
router.post("/testimonials", authMiddleware, upload.single("image"), checkImageLimit("testimonials", 5), uploadImage("testimonials"));
router.get("/testimonials", getImages("testimonials"));
router.put("/testimonials", authMiddleware, upload.single("image"), updateImage("testimonials"));

// 📸 Client Gallery (Max 3 Images)
router.post("/clientGallery", authMiddleware, upload.single("image"), checkImageLimit("clientGallery", 3), uploadImage("clientGallery"));
router.get("/clientGallery", getImages("clientGallery"));
router.put("/clientGallery", authMiddleware, upload.single("image"), updateImage("clientGallery"));

// 📞 Contact Us (Max 1 Image)
router.post("/contactUs", authMiddleware, upload.single("image"), checkImageLimit("contactUs", 1), uploadImage("contactUs"));
router.get("/contactUs", getImages("contactUs"));
router.put("/contactUs", authMiddleware, upload.single("image"), updateImage("contactUs"));

// 📰 Our Stories (Max 1 Image)
router.post("/ourStories", authMiddleware, upload.single("image"), checkImageLimit("ourStories", 1), uploadImage("ourStories"));
router.get("/ourStories", getImages("ourStories"));
router.put("/ourStories", authMiddleware, upload.single("image"), updateImage("ourStories"));

// 📲 Follow Us (Max 3 Images)
router.post("/followUs", authMiddleware, upload.single("image"), checkImageLimit("followUs", 6), uploadImage("followUs"));
router.get("/followUs", getImages("followUs"));
router.put("/followUs", authMiddleware, upload.single("image"), updateImage("followUs"));

// 🎉 Other Services (Max 3 Images)
router.post("/otherServices", authMiddleware, upload.single("image"), checkImageLimit("otherServices", 3), uploadImage("otherServices"));
router.get("/otherServices", getImages("otherServices"));
router.put("/otherServices", authMiddleware, upload.single("image"), updateImage("otherServices"));

module.exports = router;
