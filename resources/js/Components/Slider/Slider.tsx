import React, { useState, useEffect } from 'react';
import Image1 from '@/Assets/SliderImages/suv-1.webp';
import Image2 from '@/Assets/SliderImages/suv-2.webp';
import Image3 from '@/Assets/SliderImages/sedan.webp';
import Image4 from '@/Assets/SliderImages/jeep.webp';


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [Image1, Image2, Image3, Image4];

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
            <div id="default-carousel" className="relative w-full ">
                <div className="relative overflow-hidden md:h-64">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute w-full transform duration-700 ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                }`}

                        >
                            <img
                                src={slide}
                                className={`absolute block -translate-x-1/2 top-10 left-1/2 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default Slider



