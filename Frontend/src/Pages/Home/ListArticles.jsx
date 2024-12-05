// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ListArticles = () => {
//     const [articles, setArticles] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchArticles = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/articles');
//                 setArticles(response.data);
//             } catch (err) {
//                 setError('Failed to load articles. Please try again later.');
//                 console.error(err);
//             }
//         };

//         fetchArticles();
//     }, []);

//     if (error) {
//         return <p className="text-red-600 text-center">{error}</p>;
//     }

//     if (!articles.length) {
//         return <p className="text-center">No articles found.</p>;
//     }

//     return (
//         <div className="max-w-6xl mx-auto p-6 bg-[#ede8f5] rounded-lg shadow-md">
//             <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-4">All Articles</h1>
//             <ul className="space-y-4">
//                 {articles.map((article) => (
//                     <li key={article.id} className="border-b border-[#adbbda] pb-4">
//                         <Link to={`/articles/${article.id}`} className="text-xl text-[#3d52a0] hover:text-[#7091e5]">
//                             {article.title}
//                         </Link>
//                         <p className="text-sm text-[#8697c4]">By: {article.author}</p>
//                         <p className="text-base text-[#8697c4]">{article.content.slice(0, 100)}...</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ListArticles;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListArticles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/articles');
                setArticles(response.data);
            } catch (err) {
                setError('Failed to load articles. Please try again later.');
                console.error(err);
            }
        };

        fetchArticles();
    }, []);

    if (error) {
        return <p className="text-red-600 text-center">{error}</p>;
    }

    if (!articles.length) {
        return <p className="text-center">No articles found.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-[#ede8f5] rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-4">All Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <Link to={`/articles/${article.id}`} className="text-xl text-[#3d52a0] hover:text-[#7091e5] font-semibold">
                            {article.title}
                        </Link>
                        <p className="text-sm text-[#8697c4]">By: {article.author}</p>
                        <p className="text-base text-[#8697c4]">{article.content.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListArticles;
