import React, { useEffect, useState } from 'react';
import backgroundImage from "@/Assets/hero-section2.jpg";
import SliderCard from '../Cards/SliderCard';
import Slider from '../Slider/Slider';

const BannerThree = ({ brands, categories }: any) => {
    return (
        <>
            <div className='' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="top-0 w-full min-h-[14rem] mt-3 md:bg-white md:bg-opacity-50 xl:bg-white xl:bg-opacity-10">
                    <div className="container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4">
                        <div className="lg:w-[60%]  xl:w-[90%] mt-5 lg:mb-0">

                        </div>
                        <div className="ml-80 mt-10 xl:ml-10 xl:my-48 hidden md:block"  >
                            <h3 className="type-form-item text-black font-medium md:text-2xl xl:text-3xl md:text-start text-shadow-sm ml-8" >
                                About Carswap.ng.
                            </h3>
                            <p className='text-lg text-black  ml-10 font-bold'>Carswap.ng is Nigeria's first car swap marketplace launched in 2018 and incorporated in Corporate Affairs Commission Nigeria as Carswap Limited. Our objective is to end the hassle of car replacements, and liquidation among users.</p>
                            <h3 className="type-form-item text-black font-medium md:text-2xl xl:text-3xl md:text-start text-shadow-sm ml-8">
                                Our core services:
                            </h3>
                            <p className='text-lg text-black ml-10 font-bold md:mb-5 text-2xl'>A. UPGRADE: Here, a customer uses an existing car to buy their dream car by simply using our Swap calculator.<br/>
                                B. DOWNGRADE: A customer can use their existing car to get instant cash and a cheap car to drive.<br/>
                                C. Of course, you can buy and sell cars at carswap.ng<br/> <br/>
                                Earn Every Week, Partner with Carswap.ng Become a Field Manager

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerThree;
