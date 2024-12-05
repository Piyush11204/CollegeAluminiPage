import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AlumniCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://vcet.edu.in/wp-content/uploads/2021/11/3..png',
      heading: 'Annual Alumni Meet 2023',
      subheading: 'Reconnect, Reminisce, Inspire',
      text: 'Join us for a day of nostalgia and networking at VCET campus. Share your success stories and inspire the next generation of engineers.',
      date: 'December 15, 2023',
    },
    {
      image: 'https://scontent.fbom20-2.fna.fbcdn.net/v/t31.18172-8/19620388_547229415668722_6556255691033606984_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=-gQp1aIZa1MQ7kNvgFRtTQx&_nc_ht=scontent.fbom20-2.fna&oh=00_AYCX9zJw5BR05d7EAnkpWpqQ3307zStlZa2pFrYPibbRFw&oe=672262C7',
      heading: 'VCET Innovation Summit',
      subheading: 'Shaping the Future of Technology',
      text: 'Be part of our exclusive alumni panel discussing emerging technologies and their impact on various industries.',
      date: 'October 5, 2023',
    },
    {
      image: 'https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/434435528_1514605795936007_1584434340941578431_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bJJi3fDHTrEQ7kNvgFD--9C&_nc_ht=scontent.fbom20-2.fna&_nc_gid=AqVfTT_H3KplnDtcLYWpT5z&oh=00_AYBxtqZ8zF-y9jgCattWt5sfsgk-KFzIusIuC8DdSXwg0g&oe=6700DAD6',
      heading: 'Alumni Mentorship Program',
      subheading: 'Guiding the Leaders of Tomorrow',
      text: 'Share your expertise and experiences with current students. Sign up for our mentorship program and make a lasting impact.',
      date: 'Ongoing',
    },
    {
      image: 'https://scontent.fbom20-1.fna.fbcdn.net/v/t1.6435-9/67981434_991249494600043_4963119338010705920_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8MYNc7A-RZQQ7kNvgH0uRKY&_nc_ht=scontent.fbom20-1.fna&_nc_gid=AyYyR1r23S2BvDCZnVdX7Ar&oh=00_AYA5IQsT-y3iLECXcdhYLgLa6ZclO3OQLCRj1Clc-a-QCA&oe=67226E9A',
      heading: 'VCET Global Alumni Network Launch',
      subheading: 'Connecting VCETians Worldwide',
      text: 'Join our new online platform to connect with fellow alumni across the globe. Expand your professional network and explore new opportunities.',
      date: 'August 1, 2024',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-8xl mx-auto overflow-hidden shadow-lg h-[180px] md:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.image} alt={slide.heading} className="object-cover w-full h-full" />
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-2 md:p-10 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h2 className="text-sm md:text-4xl font-bold mb-1">{slide.heading}</h2>
            {/* Remove subheading for mobile view */}
            <h3 className="hidden md:block text-lg md:text-2xl mb-2">{slide.subheading}</h3>
            <p className="text-xs md:text-lg">{slide.text}</p>
            <p className="mt-2 text-xs md:text-lg font-semibold">{slide.date}</p>
          </div>
        </div>
      ))}

      {/* Left and Right Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition duration-300 shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition duration-300 shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AlumniCarousel;
