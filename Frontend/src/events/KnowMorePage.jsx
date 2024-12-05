// src/Pages/Events/KnowMore.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from './eventsData';

const KnowMore = () => {
    const { eventId } = useParams();
    const event = events.find((ev) => ev.id === parseInt(eventId));

    return (
        <div className="max-w-4xl mx-auto py-6 px-4 mt-4 rounded-md" style={{ backgroundColor: '#ede8f5' }}>
            <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#3d52a0' }}>
                Know More about {event?.title}
            </h1>
            <p className="text-center mb-4" style={{ color: '#8697c4' }}>
                {event?.description}
            </p>
            <p className="text-center mb-4" style={{ color: '#8697c4' }}>
                Date: {event?.date} | Time: {event?.time} | Location: {event?.location}
            </p>
            <div className="text-center">
                <button className="text-white px-6 py-2 rounded transition" style={{ backgroundColor: '#3d52a0' }}>
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default KnowMore;
