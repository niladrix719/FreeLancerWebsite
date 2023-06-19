const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const fs = require('fs');

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log('Upload successful:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}

exports.uploadFile = uploadFile;

async function getFileStream(fileKey) {
  console.log(process.env.AWS_BUCKET_NAME);
  const downloadParams = {
    Key: fileKey,
    Bucket: process.env.AWS_BUCKET_NAME
  };

  try {
    const data = await s3Client.send(new GetObjectCommand(downloadParams));
    return data.Body;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

exports.getFileStream = getFileStream;