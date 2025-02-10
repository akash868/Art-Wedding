const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../config/awsConfig");
const Image = require("../models/imageModel");
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");

// Multer S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}_${file.originalname}`);
    },
  }),
});

// 🔹 Upload Image
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

// 🔹 Get All Images for Category
const getImages = (category) => async (req, res) => {
  try {
    const images = await Image.findAll({ where: { category }, attributes: ["id", "imageUrl"] });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Update Image by ID
const updateImage = (category) => async (req, res) => {
  try {
    const { id, newImageUrl } = req.body;
    if (!id || !newImageUrl) return res.status(400).json({ error: "ID and newImageUrl required" });

    const image = await Image.findOne({ where: { id, category } });
    if (!image) return res.status(404).json({ error: "Image not found" });

    image.imageUrl = newImageUrl;
    await image.save();

    res.json({ message: "Image updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Delete Image by ID
const deleteImage = (category) => async (req, res) => {
  try {
    const { id, imageUrl } = req.body;
    if (!id || !imageUrl) return res.status(400).json({ error: "ID and imageUrl required" });

    const image = await Image.findOne({ where: { id, category } });
    if (!image) return res.status(404).json({ error: "Image not found" });

    const key = imageUrl.split(".com/")[1];

    // Use `send` method in AWS SDK v3
    await s3.send(new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    }));

    await image.destroy();
    res.json({ message: "Image deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { upload, uploadImage, getImages, updateImage, deleteImage };