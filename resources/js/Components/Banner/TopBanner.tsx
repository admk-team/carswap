import React, { useEffect, useState } from 'react';
import backgroundImage from "@/Assets/hero-section.jpg";
import SliderCard from '../Cards/SliderCard';
import Slider from '../Slider/Slider';

const TopBanner = ({ brands }:any) => {
    const typeFormItems = ['Swap For Better Car', 'Swap For Cash', 'Buy & Sell'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let typingTimeout:any;
        const currentTextToType = typeFormItems[currentTextIndex];
        const textLength = currentTextToType.length;

        const animateTyping = (currentIndex:any) => {
            setCurrentText(currentTextToType.slice(0, currentIndex));
            if (currentIndex <= textLength) {
                typingTimeout = setTimeout(() => {
                    animateTyping(currentIndex + 1);
                }, 100); // Adjust the typing speed here (smaller value means faster typing)
            } else {
                // Typing complete, wait for a few seconds, and then move to the next text
                setTimeout(() => {
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typeFormItems.length);
                }, 2000); // Wait for 2 seconds before moving to the next text
            }
        };

        animateTyping(0);

        return () => clearTimeout(typingTimeout);
    }, [currentTextIndex]);

    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="top-0 w-full h-full">
                    <div className="container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4">
                        <div className="lg:w-1/2 mt-6 lg:mb-0">
                            <div className="type-form-container">
                                <p className='text-emerald-400'>Welcome to Carswap</p>
                                <h3 className="type-form-item text-white font-medium text-base md:text-3xl md:text-start text-shadow-sm">
                                    {currentText}
                                </h3>
                            </div>
                            <div className="hidden lg:flex">
                                <Slider />
                            </div>
                        </div>
                        <div className="my-8 flex">
                            <SliderCard brands={brands} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;
