const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../config/awsConfig");
const db = require("../config/dbConfig");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}_${file.originalname}`);
    },
  }),
});

const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please upload an image" });
  }

  const imageUrl = req.file.location;

  db.query("INSERT INTO images (url) VALUES (?)", [imageUrl], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      message: "Image uploaded successfully",
      imageUrl: imageUrl,
    });
  });
};

module.exports = { upload, uploadImage };
