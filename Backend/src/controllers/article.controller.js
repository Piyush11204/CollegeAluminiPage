import { v2 as cloudinary } from 'cloudinary';
import Article from '../models/article.model.js';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Create Article
export const createArticle = async (req, res) => {
    try {
        // Log the incoming request body and file for debugging
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);

        // Destructure required fields from the request body
        const { title, content, author, tags } = req.body;

        // Validate required fields
        if (!title || !content || !author) {
            return res.status(400).json({ message: 'Title, content, and author are required.' });
        }

        let imageUrl = '';
        // Handle image upload to Cloudinary if a file is present
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url; // Get the secure URL from the upload result
        }

        // Create a new article object
        const article = new Article({
            title,
            content,
            author,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [], // Split and trim tags if present
            imageUrl,
        });

        // Save the article to the database
        await article.save();
        res.status(201).json({ message: 'Article created successfully!', article });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ message: 'Error creating article', error: error.message });
    }
};
