// import React from 'react';
// import { Link } from 'react-router-dom';

// const BusinessSection = () => {
//     const cards = [
//         {
//             title: "Startups/Mentorship",
//             description: "Support for the Startups or looking for mentors from the community?",
//             icon: "🚀",
//             Link: "/StartupMentorshipSection",
//             img: "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/301390543_145401481512876_887003241309337346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VSSuFpQLSgoQ7kNvgFMOoXi&_nc_ht=scontent.fbom20-2.fna&oh=00_AYBPhnNwl479j351-djZxW64MhzxUzlI42FKBNixEvxjXA&oe=6700B99E",
//         },
//         {
//             title: "Partner With Us",
//             description: "We work with companies and tailor programs to get visibility within our community.",
//             icon: "🤝",
//             img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221013161257/partnership1.png",
//         },
//         {
//             title: "Achievements",
//             description: "Celebrate our community's successes: 5 startups launched, 200+ mentorship sessions conducted, and 15 community events organized!",
//             icon: "🏆",
//             img: "https://www.mangaloretoday.com/contentfiles/2018/Feb%202018/Pro%20Karting%201%20mar%2018%203.jpg",
//         },
//         {
//             title: "Community Events",
//             description: "Join our upcoming community events to meet and learn from each other.",
//             icon: "🎉",
//             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFSCuheGqq_g5-E15AP5Mc8M9OTxaHTQyMw&s",
//         },
//     ];


//     return (
//         <div className="py-10 px-4 max-w-6xl mx-auto bg-[#ede8f5]">
//             <h5 className="text-[#3d52a0] uppercase tracking-wider font-bold text-center">BUSINESS</h5>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#3d52a0] text-center">ENGAGING WITH IITAS COMMUNITY</h1>

//             <div className="flex  sm:grid overflow-x-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 sm:pb-0">
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className="flex-shrink-0 w-[280px] sm:w-auto bg-white border border-[#adbbda] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-95 hover:shadow-xl"
//                     >
//                         <div className="relative">
//                             <img
//                                 src={card.img}
//                                 alt={card.title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="absolute top-4 left-4 bg-[#ede8f5] bg-opacity-75 rounded-full p-2 text-2xl">
//                                 {card.icon}
//                             </div>
//                         </div>
//                         <div className="p-4 flex flex-col h-[calc(100%-192px)]">
//                             <h3 className="text-xl font-bold text-[#3d52a0] mb-2">{card.title}</h3>
//                             <p className="text-sm text-[#8697c4] mb-4 flex-grow">{card.description}</p>
//                             <button onClick={card.Link} className="w-full bg-[#7091e5] text-white rounded-full py-2 px-4 transition-colors duration-300 hover:bg-[#3d52a0] focus:outline-none focus:ring-2 focus:ring-[#3d52a0] focus:ring-opacity-50">
//                                 Learn More
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BusinessSection;

import React from 'react';
import { Link } from 'react-router-dom';

const BusinessSection = () => {
    const cards = [
        {
            title: "Startups/Mentorship",
            description: "Support for the Startups or looking for mentors from the community?",
            icon: "🚀",
            link: "/StartupMentorshipSection", // Changed to lowercase
            img: "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/301390543_145401481512876_887003241309337346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VSSuFpQLSgoQ7kNvgFMOoXi&_nc_ht=scontent.fbom20-2.fna&oh=00_AYBPhnNwl479j351-djZxW64MhzxUzlI42FKBNixEvxjXA&oe=6700B99E",
        },
        {
            title: "Partner With Us",
            description: "We work with companies and tailor programs to get visibility within our community.",
            icon: "🤝",
            img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221013161257/partnership1.png",
        },
        {
            title: "Achievements",
            description: "Celebrate our community's successes: 5 startups launched, 200+ mentorship sessions conducted, and 15 community events organized!",
            icon: "🏆",
            "link": "/achievementssection",
            img: "https://www.mangaloretoday.com/contentfiles/2018/Feb%202018/Pro%20Karting%201%20mar%2018%203.jpg",
        },
        {
            title: "Community Events",
            description: "Join our upcoming community events to meet and learn from each other.",
            icon: "🎉",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFSCuheGqq_g5-E15AP5Mc8M9OTxaHTQyMw&s",
        },
    ];

    return (
        <div className="py-10 px-4 max-w-6xl mx-auto rounded-md bg-[#ede8f5]">
            {/* <h5 className="text-[#3d52a0] uppercase tracking-wider font-bold text-center">BUSINESS</h5> */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#3d52a0] text-center">ENGAGING WITH VCET COMMUNITY</h1>

            <div className="flex sm:grid overflow-x-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 sm:pb-0">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[280px] sm:w-auto bg-white border border-[#adbbda] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-95 hover:shadow-xl"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-[#ede8f5] bg-opacity-75 rounded-full p-2 text-2xl">
                                {card.icon}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col h-[calc(100%-192px)]">
                            <h3 className="text-xl font-bold text-[#3d52a0] mb-2">{card.title}</h3>
                            <p className="text-sm text-[#8697c4] mb-4 flex-grow">{card.description}</p>
                            <Link
                                to={card.link} // Use Link here for navigation
                                className="w-full bg-[#7091e5] text-white rounded-full py-2 px-4 transition-colors duration-300 hover:bg-[#3d52a0] focus:outline-none focus:ring-2 focus:ring-[#3d52a0] focus:ring-opacity-50 text-center block" // Add block class for full-width
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessSection;
