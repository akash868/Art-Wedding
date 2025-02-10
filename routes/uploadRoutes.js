const express = require("express");
const { upload, uploadImage, getImages, updateImage, deleteImage } = require("../controllers/imageUploadController");

const router = express.Router();

// 🏠 Home Image
router.post("/homeImage", upload.single("image"), uploadImage("homeImage"));
router.get("/homeImage", getImages("homeImage"));

// 📋 List Images (Add, Update, Get, Delete)
router.post("/listImages", upload.single("image"), uploadImage("listImages"));
router.get("/listImages", getImages("listImages"));
router.put("/listImages", updateImage("listImages"));
router.delete("/listImages", deleteImage("listImages"));

// 🌟 Testimonials (Add, Update, Get)
router.post("/testimonials", upload.single("image"), uploadImage("testimonials"));
router.get("/testimonials", getImages("testimonials"));
router.put("/testimonials", updateImage("testimonials"));

// 📸 Client Gallery (Add, Update, Get)
router.post("/clientGallery", upload.single("image"), uploadImage("clientGallery"));
router.get("/clientGallery", getImages("clientGallery"));
router.put("/clientGallery", updateImage("clientGallery"));

// 📞 Contact Us (Add, Update, Get)
router.post("/contactUs", upload.single("image"), uploadImage("contactUs"));
router.get("/contactUs", getImages("contactUs"));
router.put("/contactUs", updateImage("contactUs"));

// 📰 Our Stories (Add, Update, Get)
router.post("ourStories", upload.single("image"), uploadImage("ourStories"));
router.get("ourStories", getImages("ourStories"));
router.put("ourStories", updateImage("ourStories"));

// 📲 Follow Us (Add, Update, Get)
router.post("followUs", upload.single("image"), uploadImage("followUs"));
router.get("followUs", getImages("followUs"));
router.put("followUs", updateImage("followUs"));

// 🎉 Other Services (Add, Update, Get)
router.post("otherServices", upload.single("image"), uploadImage("otherServices"));
router.get("otherServices", getImages("otherServices"));
router.put("otherServices", updateImage("otherServices"));

module.exports = router;
