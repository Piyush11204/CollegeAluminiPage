
// import React, { useState } from 'react';
// import axios from 'axios';

// const ContributeArticle = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         content: '',
//         author: '',
//         tags: '',
//         image: null,
//     });

//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: files ? files[0] : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);
//         setSuccess(null);

//         if (!formData.title || !formData.content || !formData.author || !formData.image) {
//             setError('Please fill in all required fields.');
//             return;
//         }

//         const formDataToSend = new FormData();
//         formDataToSend.append('title', formData.title);
//         formDataToSend.append('content', formData.content);
//         formDataToSend.append('author', formData.author);
//         formDataToSend.append('tags', formData.tags);
//         formDataToSend.append('image', formData.image);

//         try {
//             const response = await axios.post('http://localhost:8000/api/articles', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             if (response.status === 201) {
//                 setSuccess('Article submitted successfully!');
//                 setFormData({ title: '', content: '', author: '', tags: '', image: null });
//             } else {
//                 setError('Failed to submit article. Please try again.');
//             }
//         } catch (err) {
//             setError('Failed to submit article. Please try again.');
//         }
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-8 bg-[#ede8f5] rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-6">Contribute an Article</h1>

//             {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//             {success && <p className="text-green-600 text-center mb-4">{success}</p>}
//             <ToastContainer />
//             <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Title */}
//                     <div className="col-span-1 md:col-span-2">
//                         <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="title">Title *</label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
//                             required
//                         />
//                     </div>

//                     {/* Author */}
//                     <div>
//                         <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="author">Author Name *</label>
//                         <input
//                             type="text"
//                             id="author"
//                             name="author"
//                             value={formData.author}
//                             onChange={handleChange}
//                             className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
//                             required
//                         />
//                     </div>

//                     {/* Tags */}
//                     <div>
//                         <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="tags">Tags (comma-separated)</label>
//                         <input
//                             type="text"
//                             id="tags"
//                             name="tags"
//                             value={formData.tags}
//                             onChange={handleChange}
//                             className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div>
//                     <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="content">Content *</label>
//                     <textarea
//                         id="content"
//                         name="content"
//                         value={formData.content}
//                         onChange={handleChange}
//                         className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
//                         rows="6"
//                         required
//                     />
//                 </div>

//                 {/* Image Upload */}
//                 <div>
//                     <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="image">Upload Image *</label>
//                     <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         onChange={handleChange}
//                         className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
//                         required
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-[#7091e5] text-white font-semibold text-lg rounded-lg py-3 hover:bg-[#3d52a0] transition duration-300"
//                 >
//                     Submit Article
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ContributeArticle;



import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContributeArticle = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        tags: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.content || !formData.author || !formData.image) {
            toast.error('Please fill in all required fields.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('author', formData.author);
        formDataToSend.append('tags', formData.tags);
        formDataToSend.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:8000/api/articles', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                toast.success('Article submitted successfully!');
                setFormData({ title: '', content: '', author: '', tags: '', image: '' });
            } else {
                toast.error('Failed to submit article. Please try again.');
            }
        } catch (err) {
            toast.error('Failed to submit article. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8  mt-4 mb-4 bg-[#ede8f5] rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-[#3d52a0] mb-6">Contribute an Article</h1>

            <ToastContainer />
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="title">Title *</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
                            required
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="author">Author Name *</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
                            required
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="tags">Tags (comma-separated)</label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
                        />
                    </div>
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="content">Content *</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
                        rows="6"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-[#3d52a0]" htmlFor="image">Upload Image *</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-[#adbbda] rounded-lg"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#7091e5] text-white font-semibold text-lg rounded-lg py-3 hover:bg-[#3d52a0] transition duration-300"
                >
                    Submit Article
                </button>
            </form>
        </div>
    );
};

export default ContributeArticle;
