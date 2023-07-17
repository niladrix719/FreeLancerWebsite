const multer = require('multer');

const companyUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploadFolder');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileName = file.originalname.replace(/\s+/g, '');
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + fileName);
    }
  })
}).fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'coverPicture', maxCount: 1 },
  { name: 'panCard', maxCount: 1 },
  { name: 'incorporationCertificate', maxCount: 1 },
]);

module.exports = companyUpload;