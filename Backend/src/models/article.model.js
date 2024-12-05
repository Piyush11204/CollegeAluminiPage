// src/models/article.js
import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    tags: {
        type: [String], // Array of strings
        default: ['#AluminiArticle'],    // Default value is an empty array
    },
    author: {
        type: String,
        required: true, // Author is required
    },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

export default Article; // Make sure to use default export
