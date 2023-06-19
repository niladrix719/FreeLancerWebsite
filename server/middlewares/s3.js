const {
  S3: s3
} = require("@aws-sdk/client-s3");
const fs = require('fs');

const s3Client = new s3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION
});

function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename
  }

  s3.upload(uploadParams).promise();
}

exports.fileUpload = uploadFile;