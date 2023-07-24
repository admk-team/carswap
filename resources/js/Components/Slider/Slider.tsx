
import React, { useEffect, useState } from 'react';
import Image1 from '@/Assets/SliderImages/blanco.png';
import Image3 from '@/Assets/SliderImages/mers.png';
import Image4 from '@/Assets/SliderImages/kia.png';


const slides = [
    Image1,
    Image3,
    Image4,
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto"
                    />
                ))}
              
            </div>
        </div>
    );
};

export default Slider;
