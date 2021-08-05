const multer = require('multer');
const path = require('path');

const tempDir = path.join(process.cwd(), 'temp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  fileName: (req, file, cb) => {
    const ext = path.parse(file.originalname).ext;
    cb(null, Date.now() + ext);
    // cb(null,file.originalname);
  },
  limits: {
    fileSize: 100000,
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
