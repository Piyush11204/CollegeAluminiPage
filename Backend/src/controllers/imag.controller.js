const cloudinary = require('../config/cloudinaryConfig');
const Article = require('../routes/article.routes'); // Assuming you're using the Article model

// Upload image and create article
const uploadImageAndCreateArticle = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        // Check if an image was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required.' });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create a new Article instance with the image URL
        const newArticle = new Article({
            title,
            content,
            author,
            imageUrl: result.secure_url, // Store the image URL in MongoDB
        });

        // Save the article to the database
        const savedArticle = await newArticle.save();

        res.status(201).json({
            message: 'Article created successfully!',
            article: savedArticle,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating article', error: error.message });
    }
};

// Export the controller
module.exports = {
    uploadImageAndCreateArticle,
};
