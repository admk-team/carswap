

import React, { useState, useEffect } from 'react';
import Image1 from '@/Assets/Baner1.jpg';
import Image2 from '@/Assets/baner2.jpg';

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

      <div className="relative h-56 overflow-hidden md:h-96">
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-7xl font-bold text-white mb-4">SWAP A CAR</h1>
        <p className="text-white">
           Showcase multiple images or promotional content in a visually appealing manner using this dynamic.
        </p>
      </div>
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


