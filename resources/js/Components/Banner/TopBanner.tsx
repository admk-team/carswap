import React, { useEffect, useState } from 'react';
import backgroundImage from "@/Assets/hero-section.jpg";
import SliderCard from '../Cards/SliderCard';
import Slider from '../Slider/Slider';

const TopBanner = ({ brands,categories }: any) => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="top-0 w-full h-full">
                    <div className="container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4">
                        <div className="lg:w-1/2 mt-5 lg:mb-0">
                            <div className="type-form-container">
                                <p className='text-emerald-400 ml-2'>Welcome to Carswap.ng</p>
                                <h3 className="type-form-item text-white font-medium text-3xl md:text-start text-shadow-sm ml-8">
                                    {/* {currentText} */}
                                    <ul className='list-disc'>
                                        <li> Swap For Better</li>
                                        <li>Swap For Cash</li>
                                        <li>Buy & Sell like a Boss.</li>
                                    </ul>
                                </h3>
                            </div>
                            <div className="hidden lg:flex mt-10">
                                <Slider />
                            </div>
                        </div>
                        <div className="my-8 flex">
                            <SliderCard brands={brands} categories={categories}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;
