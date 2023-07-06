import React from 'react'
import ImageBanerTwo from '@/Assets/Imagge5.jpg';

const BannerTwo = () => {
    const BannerTwo = {
        backgroundImage: `url(${ImageBanerTwo})`,

    };

    return (
        <>
            <div className="md:container md:mx-auto bg-cover bg-center h-96 flex items-center mt-28  " style={BannerTwo}>
                <div className="container mx-auto text-center">
                    <p className=' uppercase text-2xl font-bold text-amber-600'>We are since 2006</p>
                    <h1 className="text-4xl font-bold text-white mt-3">Buy Or Swap Your Car Quickly And Easily</h1>
                    <p className="mt-3 text-lg font-bold text-white">We favor creating fair and straitforward pricing Structures.</p>
                    <p className="text-lg font-bold text-white">Select your next effective strategy and begin right away.</p>
                    <button type="button" className="focus:outline-none text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium text-lg px-6 mt-6 mr-3 py-3 mr-2 mb-2 dark:focus:ring-yellow-900 w-36">View Car</button>
                    <button type="button" className="focus:outline-none text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-yellow-300 font-medium text-lg px-6 mt-6 ml-3 py-3  mb-2 dark:focus:ring-yellow-900 ">Sell Your Car</button>
                </div>
            </div>
        </>
    )
}

export default BannerTwo
