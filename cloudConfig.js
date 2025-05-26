const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'nestin',
    allowedFormats: ["png","jpg","jpeg","avif"],
  },
});

module.exports = {cloudinary, storage};
