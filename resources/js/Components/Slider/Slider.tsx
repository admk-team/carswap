
import React, { useState, useEffect } from 'react';
import Image1 from "@/Assets/SliderImages/Slider (2).png"
import Image2 from "@/Assets/SliderImages/Slider (3).png"
import Image3 from "@/Assets/SliderImages/Slider (4).png"
import Image4 from "@/Assets/SliderImages/Slider (1).png"
import Image5 from "@/Assets/SliderImages/Slider (5).png"
import Image6 from "@/Assets/SliderImages/Slider (6).png"
import Image7 from "@/Assets/SliderImages/Slider (7).png"


const Slider = ({ images }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = images?.length > 0 ? images : [Image3,  Image7];

  const slideFromRight = (index: number) => {
    return index === currentSlide ? 'translate-x-0' : 'translate-x-full';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <>
      <div id="default-carousel" className="relative w-full">
        <div
          className={`relative overflow-hidden ${
            images?.length > 0 ? 'h-screen bg-black flex justify-center ' : 'md:h-64'
          }`}
        >
          {slides.map((slide: any, index: number) => (
            <div
              key={index}
              className={`absolute w-full ${
                images?.length > 0 ? 'transform duration-700' : ''
              } ${slideFromRight(index)}`}
              style={{
                transition: 'transform 0.7s ease-in-out',
                right: 0, // Slide from right to left
              }}
            >
              <img
                src={slide}
                className={`absolute block ${
                  index === currentSlide ? 'opacity-100 mx-4' : 'opacity-0'
                } ${images?.length > 0 ? 'h-screen object-contain' : 'w-full'}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
