// src/Pages/Events/Register.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from './eventsData';

const Register = () => {
    const { eventId } = useParams();
    const event = events.find((ev) => ev.id === parseInt(eventId));

    return (
        <div className="max-w-4xl mx-auto py-6 px-4 mt-4 rounded-md" style={{ backgroundColor: '#ede8f5' }}>
            <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#3d52a0' }}>
                Register for {event?.title}
            </h1>
            <p className="text-center mb-4" style={{ color: '#8697c4' }}>
                Date: {event?.date} | Time: {event?.time}
            </p>
            <form className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name" style={{ color: '#3d52a0' }}>
                        Full Name
                    </label>
                    <input type="text" id="name" className="w-full p-2 border rounded-md" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email" style={{ color: '#3d52a0' }}>
                        Email Address
                    </label>
                    <input type="email" id="email" className="w-full p-2 border rounded-md" required />
                </div>
                <button className="w-full text-white py-2 rounded" style={{ backgroundColor: '#3d52a0' }}>
                    Register Now
                </button>
            </form>
        </div>
    );
};

export default Register;
