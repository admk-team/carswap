import React, { useEffect, useState } from "react";
import backgroundImage from "@/Assets/hero-section.jpg";
import SliderCard from "../Cards/SliderCard";
import SliderCardBackup from "../Cards/SliderCardBackup";
import Slider from "../Slider/Slider";

const TopBanner = ({ brands, categories }: any) => {
    return (
        <>
            <div className="mx-auto w-full max-w-screen-xl">
                <div
                    className="-ml-[50px] sm:ml-0"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="top-0 w-full md:h-[27rem] h-[15rem] ">
                    <div className="container flex flex-col lg:flex-row lg:ml-0 xl:ml-0 items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4 flex justify-end  w-[100vw] ml-[42px]">

                            {/* <div className="lg:w-1/2 mt-5 lg:mb-0">
                             
                        </div> */}
                            {/* <div className="ml-80 mt-10 xl:ml-0 xl:my-48 hidden sm:flex md:hidden xl:block "  >
                            <h3 className="type-form-item text-black font-medium xl:text-3xl md:text-start text-shadow-sm ml-8">
                                Welcome to CarSwap.ng
                                <ul className='list-disc ml-20'>
                                    <li> Swap For Better</li>
                                    <li>Swap For Cash</li>
                                    <li>Buy & Sell like a Boss.</li>
                                </ul>
                            </h3>
                        </div> */}
                        <div className="mt-4">
                        <SliderCardBackup brands={brands} categories={categories} />

                        </div>
                        </div>
                        
                    </div>
                    
                </div>
               
            </div>
        </>
    );
};

export default TopBanner;
