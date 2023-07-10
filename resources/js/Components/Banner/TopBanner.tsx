
import React from 'react'

import backgroundImage from "@/Assets/hero-section.jpg"
import SliderCard from '../Cards/SliderCard'
import { url } from 'inspector'

const TopBanner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})` ,backgroundSize: 'cover'  }}>

                <div className="top-0 w-full h-full">
                    <div className="container flex flex-col lg:flex-row items-center xl:gap-x-80 lg:gap-x-32">
                        <div className="lg:w-1/2 mt-3 lg:mb-0">
                            <h3 className="text-white font-bold text-base md:text-3xl md:text-start">
                                Need a better car? Swap it for the best.
                                Thinking of selling your car for cash? Swap it for cash and get another car.
                            </h3>
                            {/* <div className="text-white hidden lg:flex">
                                <img src={backgroundImage} alt="ok"/>
                            </div>
                             */}
                        </div>
                        <div className="my-8 flex">
                        <SliderCard />
                    </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default TopBanner
