const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
  })
}).fields([{ name: 'profilePicture' }, { name: 'coverPicture' }, { name: 'addharCard' },
{ name: 'panCard' }, { name: 'works', maxCount: 8}]);

module.exports = upload;