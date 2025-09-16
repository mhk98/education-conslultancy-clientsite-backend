const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media"); // Set destination folder
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// ✅ Allow PDF (and optionally images too)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|pdf/;
  const isMimeTypeValid = allowedTypes.test(file.mimetype);
  const isExtNameValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (isMimeTypeValid && isExtNameValid) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file format. Supported formats: jpeg, jpg, png, gif, webp, pdf"
      )
    );
  }
};

// Upload handlers
const uploadSingle = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter,
}).single("image"); // Use "file" as the field name for PDF uploads

const uploadPdf = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter,
}).single("file"); // Use "file" as the field name for PDF uploads

const uploadDouble = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
]);

const uploadTriple = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
]);
const uploadFour = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
]);
const uploadFive = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB limit
  fileFilter: fileFilter,
}).fields([
  { name: "image1", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
  { name: "image5", maxCount: 1 },
]);

const uploadMultiple = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
}).array("files", 12); // Up to 12 files

module.exports = {
  uploadSingle,
  uploadMultiple,
  uploadDouble,
  uploadTriple,
  uploadFour,
  uploadFive,
  uploadPdf,
};
