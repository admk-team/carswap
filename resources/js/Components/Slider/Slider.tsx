import React, { useState, useEffect } from 'react';
import Image1 from '@/Assets/SliderImages/blanco.png';
import Image3 from '@/Assets/SliderImages/mers.png';
import Image4 from '@/Assets/SliderImages/kia.png';


const Slider = ({ images }: any) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = (images?.length > 0) ? images : [Image1, Image3, Image4];

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
                <div className={`relative overflow-hidden ${(images?.length > 0) ? 'h-screen  bg-black  flex justify-center ' : 'md:h-64'}`}>
                    {slides.map((slide:any, index:any) => (
                        <div
                            key={index}
                            className={`absolute w-full ${images?.length > 0 ? 'transform duration-700' : ''} ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            <img
                                src={slide}
                                className={`absolute block ${index === currentSlide ? 'opacity-100 mx-4' : 'opacity-0'} ${images?.length > 0 ? 'h-screen object-contain ' : 'w-full'
                                    } `}
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