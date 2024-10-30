const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME; //doesn`t work as destructusised

cloudinary.config({
  cloud_name,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
