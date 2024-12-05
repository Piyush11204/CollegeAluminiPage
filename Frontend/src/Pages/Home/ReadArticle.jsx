import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReadArticle = () => {
    const { id } = useParams(); // Get the article ID from the URL parameters
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/articles/${id}`);
                setArticle(response.data);
            } catch (err) {
                // Improved error handling
                if (err.response) {
                    // Server responded with a status other than 2xx
                    setError(`Error: ${err.response.data.message || 'Failed to load the article.'}`);
                } else if (err.request) {
                    // Request was made but no response received
                    setError('Error: No response from the server. Please try again later.');
                } else {
                    // Something else happened
                    setError(`Error: ${err.message}`);
                }
                console.error('Fetch article error:', err);
            }
        };

        fetchArticle();
    }, [id]);

    if (error) {
        return <p className="text-red-600 text-center">{error}</p>;
    }

    if (!article) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-[#ede8f5] rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-2">{article.title}</h1>
            {article.image && (
                <img src={article.image} alt={article.title} className="w-full h-auto mb-4 rounded" />
            )}
            <p className="text-lg text-[#3d52a0] mb-4"><strong>By: {article.author}</strong></p>
            <p className="text-base text-[#8697c4]">{article.content}</p>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-[#3d52a0]">Tags:</h2>
                <p className="text-base text-[#8697c4]">
                    {article.tags && article.tags.length > 0 ? article.tags.join(', ') : 'No tags available'}
                </p>
            </div>
        </div>
    );
};

export default ReadArticle;
