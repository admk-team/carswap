
import React, { useEffect, useState } from 'react';
import Image1 from '@/Assets/SliderImages/Slider (1).png';
import Image3 from '@/Assets/SliderImages/Slider (2).png';
import Image4 from '@/Assets/SliderImages/Slider (3).png';
import Image5 from '@/Assets/SliderImages/Slider (4).png';
import Image6 from '@/Assets/SliderImages/Slider (5).png';
import Image7 from '@/Assets/SliderImages/Slider (6).png';
import Image8 from '@/Assets/SliderImages/Slider (7).png';
import Image9 from '@/Assets/SliderImages/Slider (3).png';



const slides = [
    Image3,
    Image1,  
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image1,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length) );
        }, 4000);

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
                <img
                    src={slides[0]} 
                    alt={`Slide 1`}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Slider;


