// middleware/upload.js
import multer from "multer";
import fs from "fs";
import path from "path";
import { v2 as cloudinaryV2 } from 'cloudinary';

// Set up storage for multer to save files locally
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Change this path if needed
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to the filename
    },
});

// Create multer instance
const upload = multer({ storage });

// Middleware to handle the upload and Cloudinary integration
const uploadImageToCloudinary = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    try {
        // Upload the image to Cloudinary
        const result = await cloudinaryV2.uploader.upload(req.file.path, {
            resource_type: 'image'
        });

        // Store the image URL for later use
        req.imageUrl = result.secure_url;

        // Delete the local file after upload
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error("Error deleting local file:", err);
            }
        });

        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(500).send("Error uploading to Cloudinary");
    }
};

export { upload, uploadImageToCloudinary };
