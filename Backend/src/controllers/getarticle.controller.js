import Article from '../models/article.model.js';

// Get single article by ID
export const getArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const article = await Article.findById(articleId);

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving article', error });
    }
};

// Get all articles
export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving articles', error });
    }
};
