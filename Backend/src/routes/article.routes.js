import express from 'express';
import { createArticle } from '../controllers/article.controller.js';
import { upload } from '../middlewares/upload.js'; // Ensure the path is correct
import { getAllArticles, getArticle } from "../controllers/getarticle.controller.js";

const router = express.Router();

router.post('/', upload.single('image'), createArticle); // Ensure only the upload middleware is called

router.get('/:id', getArticle);
router.get('/', getAllArticles);

export default router;
