import { React, useEffect } from 'react';
import { Trophy, Users, Book, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AchievementCard = ({ icon, title, value, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2" style={{ color: '#3d52a0' }}>{title}</h3>
        <p className="text-3xl font-bold mb-2" style={{ color: '#7091e5' }}>{value}</p>
        <p style={{ color: '#8697c4' }}>{description}</p>
    </div>
);

const AchievementsPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // The empty array ensures this runs only once when the component mounts

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#ede8f5' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#3d52a0' }}>
                    Our Community Achievements
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AchievementCard
                        icon={<Trophy size={48} color="#7091e5" />}
                        title="Total Events"
                        value="250+"
                        description="Successful events organized"
                    />
                    <AchievementCard
                        icon={<Users size={48} color="#7091e5" />}
                        title="Community Members"
                        value="10,000+"
                        description="Active participants"
                    />
                    <AchievementCard
                        icon={<Book size={48} color="#7091e5" />}
                        title="Mentorship Sessions"
                        value="500+"
                        description="One-on-one guidance provided"
                    />
                    <AchievementCard
                        icon={<Star size={48} color="#7091e5" />}
                        title="Success Stories"
                        value="100+"
                        description="Community members achieving their goals"
                    />
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#3d52a0' }}>
                        Recent Milestones
                    </h2>
                    <div className="space-y-6">
                        {[
                            "Launched 50 new courses covering emerging technologies",
                            "Organized our largest annual conference with 5000+ attendees",
                            "Initiated a global mentorship program connecting experts with newcomers",
                            "Achieved a 95% satisfaction rate in our community feedback survey"
                        ].map((milestone, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6" style={{ borderLeft: '4px solid #7091e5' }}>
                                <p style={{ color: '#3d52a0' }}>{milestone}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link to={"/signup"} className="px-8 py-3 rounded-full text-white text-lg font-semibold transition duration-300 ease-in-out"
                        style={{ backgroundColor: '#3d52a0', hover: { backgroundColor: '#7091e5' } }}>
                        Join Our Community
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AchievementsPage;