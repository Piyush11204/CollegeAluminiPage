import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, DollarSign, MapPin, Users, Award, FileText } from 'lucide-react';

const DetailedAboutUs = () => {
    const [openSection, setOpenSection] = useState('');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    const Section = ({ title, children, id, icon: Icon }) => (
        <div className="mb-8 border-b pb-4">
            <button
                onClick={() => toggleSection(id)}
                className="flex justify-between items-center w-full text-left font-semibold text-xl text-blue-800 hover:text-blue-600 focus:outline-none"
            >
                <span className="flex items-center">
                    <Icon className="mr-2" size={24} />
                    {title}
                </span>
                {openSection === id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {openSection === id && <div className="mt-4">{children}</div>}
        </div>
    );

    const NewsletterItem = ({ title, date, image, description }) => (
        <div className="flex items-center mb-4 p-4 bg-gray-100 rounded-lg">
            <img src={image} alt={title} className="w-16 h-16 rounded mr-4" />
            <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600">{date}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side with image and name */}
                <div className="text-center lg:text-left lg:pr-8">
                    <img src="https://image-static.collegedunia.com/public/college_data/images/appImage/45852_VCET_New.jpg?h=260&w=360&mode=crop" alt="VCET Logo" className="mx-auto lg:mx-10 mb-4" />
                    <h1 className="text-2xl font-bold text-blue-900 mb-2">Vidyavardhini's College Of Engineering & Technology (VCET)</h1>
                </div>

                {/* Right side with sections */}
                <div>
                    <Section title="About VCET" id="about" icon={Users}>
                        <p className="text-gray-700 mb-4">
                            Vidyavardhini's College of Engineering and Technology (VCET) was established in 1994 under the aegis of Vidyavardhini Trust. Located in Vasai Road (W), Maharashtra, VCET is approved by AICTE and affiliated with the University of Mumbai.
                        </p>
                        <p className="text-gray-700 mb-4">
                            With a legacy of over 25 years, VCET has been at the forefront of technical education, consistently producing skilled engineers who contribute significantly to various industries across the globe.
                        </p>
                    </Section>

                    <Section title="Our Vision & Mission" id="vision-mission" icon={Award}>
                        <h3 className="font-semibold text-lg mb-2">Vision</h3>
                        <p className="text-gray-700 mb-4">
                            To achieve excellence in imparting technical education so as to meet the professional and societal needs.
                        </p>
                        <h3 className="font-semibold text-lg mb-2">Mission</h3>
                        <ul className="list-disc pl-5 text-gray-700 mb-4">
                            <li>Developing technical skills by imparting knowledge and providing hands-on experience.</li>
                            <li>Creating an environment that nurtures ethics, leadership and team building.</li>
                            <li>Providing industrial exposure for minimizing the gap between academics & industry.</li>
                        </ul>
                    </Section>

                    <Section title="Our Alumni" id="alumni" icon={Users}>
                        <p className="text-gray-700 mb-4">
                            VCET takes pride in its accomplished alumni who have made significant contributions in various fields. Here are some of our notable alumni:
                        </p>
                        <NewsletterItem
                            title="Akshay Vartak"
                            date="Batch of 2007"
                            image="https://vcet.edu.in/wp-content/uploads/2021/12/alumini_01.png"
                            description="SPITZEN GROUP (Co-Founder and Director, Business Development and Operations)"
                        />
                        <NewsletterItem
                            title="	Gauri Parkar"
                            date="Batch of 2017"
                            image="https://vcet.edu.in/wp-content/uploads/2022/01/alumni_05.png"
                            description="FedEx Engineering and quality specialist"
                        />
                        <NewsletterItem
                            title="Asmit Ganesh Gamre"
                            date="Batch of 2017"
                            image="https://vcet.edu.in/wp-content/uploads/2022/01/alumni_06.png"
                            description="University of Wollongong Master of Engineering Management"
                        />
                    </Section>

                    <Section title="Articles" id="articles" icon={Calendar}>
                        <p className="text-gray-700 mb-4">
                            Explore the latest research, articles, and publications from VCET faculty, students, and alumni:
                        </p>
                        <NewsletterItem
                            title="The Foundation of Success: Education at Vidyavardhini College"
                            date="July 2023"
                            image="https://media.licdn.com/dms/image/v2/D5603AQGn4f_rOPt8zA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667664005688?e=2147483647&v=beta&t=8-KSjEoilmsopQooG7mjjjvPTAW6ICPAvewrHmXo6Ag"
                            description="A deep dive into how AI is revolutionizing education."
                        />
                        <NewsletterItem
                            title="Empowering Future Leaders at Vidyavardhini College"
                            date="June 2023"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNco1vxGM1bQWTHoOvbBEDnutnRLz-qT0C-g&s"
                            description="The role of IoT in streamlining operations in various sectors."
                        />
                        <NewsletterItem
                            title="Cultivating a Culture of Excellence at Vidyavardhini College"
                            date="May 2023"
                            image="https://vcet.edu.in/wp-content/uploads/2022/07/Dr.Thaksen-Parvat.jpg"
                            description="Latest breakthroughs in Information Technology."
                        />
                    </Section>

                    {/* Newsletters Section */}
                    <Section title="Newsletters" id="newsletters" icon={FileText}>
                        <p className="text-gray-700 mb-4">
                            Stay updated with the latest events, achievements, and updates at VCET by reading our newsletters:
                        </p>

                        <h3 className="text-lg font-semibold mt-4">Recent Newsletters</h3>
                        <NewsletterItem
                            title="Innovations for Inspirations - VCET Bulletin - July 2024"
                            date="July 2024"
                            image="https://yt3.googleusercontent.com/ytc/AIdro_naou0I-Ohuilbdn4F3D4o9kjlOrpQ-FSOZEhZkpxDZCBI=s900-c-k-c0x00ffffff-no-rj"
                            description="Insights on the recent VCET Tech Fest, workshops on emerging technologies, and alumni success stories."
                        />

                        <h3 className="text-lg font-semibold mt-4">Past Highlights</h3>
                        <NewsletterItem
                            title="Empowering Futures - VCET Bulletin - April 2024"
                            date="April 2024"
                            image="https://sendat.academy/wp-content/uploads/2023/06/Empowering-Furures-v2-Logo.png"
                            description="Recap of the annual tech symposium, student achievements, and collaborations with industry partners."
                        />

                        <NewsletterItem
                            title="New Beginnings - VCET Bulletin - January 2024"
                            date="January 2024"
                            image="https://st2.depositphotos.com/2393921/6559/i/950/depositphotos_65591231-stock-photo-concept-for-a-new-beginning.jpg"
                            description="Kick-off the year with updates on new courses, faculty achievements, and the upcoming VCET Innovation Summit."
                        />

                        <h3 className="text-lg font-semibold mt-4">Archived Newsletters</h3>
                        <NewsletterItem
                            title="Navigating Change - VCET Bulletin - October 2023"
                            date="October 2023"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tNMRhSxoKRra44UUputFY7y3NbxSoBt74A&s"
                            description="Highlights from the start of the semester, including new initiatives and events in the IT department."
                        />
                    </Section>


                    <Section title="Donations" id="donations" icon={DollarSign}>
                        <p className="text-gray-700 mb-4">
                            Contribute to the growth and development of VCET by donating to our scholarship fund, infrastructure development, or research initiatives. Every contribution helps us create a better future for our students.
                        </p>
                        <a href="/contribution" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block">
                            Donate Now
                        </a>

                    </Section>
                </div>
            </div>
            <Section title="Contact Us" id="contact" icon={MapPin}>
                <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra, India - 401202
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +91-250-2338234
                </p>
                <p className="text-gray-700 mb-4">
                    <strong>Email:</strong> principal@vcet.edu.in
                </p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.941647193016!2d72.82282431491144!3d19.38281298691319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1632910428454!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full"
                    ></iframe>
                </div>
            </Section>
        </div>
    );
};

export default DetailedAboutUs;
