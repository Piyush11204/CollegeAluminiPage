import React from 'react';

const AlumniShowcase = () => {
    const alumni = [
        { name: 'Accenture', logo: 'https://i.ibb.co/3TNCPT8/Accenture.png' },
        { name: 'Bristlecone', logo: 'https://i.ibb.co/94QdvJS/Bristlecone.png' },
        { name: 'ContentStack', logo: 'https://i.ibb.co/gvx2rgn/content-Stack1-png.jpg' },
        { name: 'Tata Consultancy Services', logo: 'https://i.ibb.co/xMZBmST/TCS.png' },
        { name: 'Infosys', logo: 'https://i.ibb.co/qmmtTs2/Infosys.png' },
        { name: 'Wipro', logo: 'https://i.ibb.co/vhdDhnM/Wipro.png' },
        { name: 'Tech Mahindra', logo: 'https://i.ibb.co/mqb4NJD/Tech-Mahindra.png' },
        { name: 'Zeus-Learning', logo: 'https://i.ibb.co/MNStCWN/Zeus-Learning1.png' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#3d52a0] mb-2">OUR ALUMNI</h2>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 ">VCET GRADUATES AT TOP COMPANIES</h1>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">Fortune 500 Companies</h3>
                    <div className="flex flex-wrap justify-center items-center">
                        <img src="https://i.ibb.co/xMZBmST/TCS.png" alt="TCS" className="h-12 sm:h-16 m-2 sm:m-4" />
                        <img src="https://i.ibb.co/qmmtTs2/Infosys.png" alt="Infosys" className="h-12 sm:h-16 m-2 sm:m-4" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">Other Top Employers</h3>
                    <div className="flex flex-wrap justify-center items-center">
                        {alumni.map((company, index) => (
                            <img
                                key={index}
                                src={company.logo}
                                alt={company.name}
                                className="h-8 sm:h-12 m-2 sm:m-4"
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AlumniShowcase;