import React from 'react';
import UserCards from '../Alumini/UserCards';
import { Link } from 'react-router-dom';

const VCETAlumniConnect = () => {
    return (
        <div className="bg-blue-900 text-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold">VCET Alumni</div>
                <div className="text-xl">1995-2024</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                CONNECT TO ALUMNI COMMUNITY
            </h1>
            <div className="text-center mb-4">
                <p className="text-lg mb-2">VidyaVardhini's College of Engineering and Technology</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    CHECK STATUS
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    JOIN
                </button>
                <Link to='/aluminilist' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    SEARCH ALUMNI
                </Link>
            </div>
        </div>
    );
};

export default VCETAlumniConnect;