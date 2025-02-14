const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const Image = require("../models/imageModel");

const s3 = new S3Client({ region: process.env.AWS_REGION });

// Multer S3 Storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}_${file.originalname}`);
    },
  }),
});

// Middleware to Check Image Limits
const checkImageLimit = (category, maxImages) => async (req, res, next) => {
  try {
    const imageCount = await Image.count({ where: { category } });
    if (imageCount >= maxImages) {
      return res.status(400).json({ error: `Maximum ${maxImages} images allowed for ${category}` });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Upload Image Function
const uploadImage = (category) => async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "Please upload an image" });

    const imageUrl = req.file.location;
    const newImage = await Image.create({ category, imageUrl });

    res.json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Upload Image Based on User
const uploadImageBasedOnUser = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "Please upload an image" });

    const { category } = req.body;
    const imageUrl = req.file.location;

    if (!category) return res.status(400).json({ error: "Category is required" });

    const newImage = await Image.create({ category, imageUrl });

    res.json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Images by Category
const getImagesByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    if (!category) return res.status(400).json({ error: "Category is required" });

    const images = await Image.findAll({ where: { category } });

    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Images for Specific Category
const getImages = (category) => async (req, res) => {
  try {
    const images = await Image.findAll({ where: { category }, attributes: ["id", "imageUrl"] });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Image by ID
const updateImage = (category) => async (req, res) => {
  try {
    const { id } = req.body;
    if (!id || !req.file) return res.status(400).json({ error: "ID and new image required" });

    const image = await Image.findOne({ where: { id, category } });
    if (!image) return res.status(404).json({ error: "Image not found" });

    const oldImageUrl = image.imageUrl;
    const newImageUrl = req.file.location;

    if (oldImageUrl) {
      try {
        const oldKey = oldImageUrl.split(".com/")[1];
        await s3.send(new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: oldKey }));
      } catch (err) {
        console.error("Error deleting old image:", err);
      }
    }

    image.imageUrl = newImageUrl;
    await image.save();

    res.json({ message: "Image updated successfully", imageUrl: newImageUrl });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete Image by ID
const deleteImage = (category) => async (req, res) => {
  try {
    const { id, imageUrl } = req.body;
    if (!id || !imageUrl) return res.status(400).json({ error: "ID and imageUrl required" });

    const image = await Image.findOne({ where: { id, category } });
    if (!image) return res.status(404).json({ error: "Image not found" });

    const key = imageUrl.split(".com/")[1];
    await s3.send(new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: key }));

    await image.destroy();
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { upload, uploadImage, getImages, updateImage, deleteImage, uploadImageBasedOnUser, getImagesByCategory, checkImageLimit };
