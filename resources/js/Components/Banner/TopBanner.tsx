import React, { useEffect, useState } from 'react';
import backgroundImage from "@/Assets/hero-section.jpg";
import SliderCard from '../Cards/SliderCard';
import Slider from '../Slider/Slider';

const TopBanner = ({ brands, categories }: any) => {
    return (
        <>
            <div className='-ml-[50px] sm:ml-0' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className="top-0 w-full md:min-h-[36rem] h-[14rem]">
                    <div className="container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4">
                        <div className="lg:w-1/2 mt-5 lg:mb-0">
                             
                        </div>
                        <div className="ml-80 mt-10 xl:ml-0 xl:my-48 hidden sm:flex md:hidden xl:block "  >
                            <h3 className="type-form-item text-black font-medium xl:text-3xl md:text-start text-shadow-sm ml-8">
                                Welcome to CarSwap.ng
                                <ul className='list-disc ml-20'>
                                    <li> Swap For Better</li>
                                    <li>Swap For Cash</li>
                                    <li>Buy & Sell like a Boss.</li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;
