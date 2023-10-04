import React, { useState, useEffect } from 'react';
import Image1 from '@/Assets/hero-section.jpg';
import Image2 from '@/Assets/hero-section2.jpg';
import SliderCard from '@/Components/Cards/SliderCard';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
  };

  return (
    <div className="relative w-full">

      <div className="relative overflow-hidden h-[62vh]">
        {/* Item 1 */}
        <div className={currentSlide === 0 ? '' : 'hidden'}>
          <img
            src={Image1}
            className="absolute block w-full h-full object-cover"
            alt="Slide 1"
          />

        </div>
        {/* Item 2 */}
        <div className={currentSlide === 1 ? '' : 'hidden'}>
          <img
            src={Image2}
            className="absolute block w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>
      </div>


      {/* side panel */}

      {/* // side panel */}
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-200/50 text-gray-800 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
        onClick={goToPreviousSlide}
      >
        <span className="sr-only">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-200/50 text-gray-800 hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
        onClick={goToNextSlide}
      >
        <span className="sr-only">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default BannerSlider;


