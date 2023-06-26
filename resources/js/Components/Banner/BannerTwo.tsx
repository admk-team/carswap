import React from 'react'
import ImageBanerTwo from '@/Assets/BannerTwo.jpg';

const BannerTwo = () => {
    const BannerTwo = {
        backgroundImage: `url(${ImageBanerTwo})`,

    };

    return (
        <>
            <div className="md:container md:mx-auto bg-cover bg-center h-96 flex items-center mt-28  " style={BannerTwo}>
                <div className="container mx-auto text-center">
                    <p className=' uppercase text-2xl font-bold text-yellow-600'>We are since 1970</p>
                    <h1 className="text-5xl font-bold text-white">Welcome to Our Website</h1>
                <p className="mt-4 text-lg font-bold text-white">Discover amazing things and explore the world of possibilities.</p>
                <button type="button" className="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-6 mt-6 mr-3 py-3 mr-2 mb-2 dark:focus:ring-yellow-900">View Inventory</button>
                <button type="button" className="focus:outline-none text-black bg-white hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-6 mt-6 ml-3 py-3  mb-2 dark:focus:ring-yellow-900">Swap Your Car</button>
                </div>
            </div>
        </>
    )
}

export default BannerTwo
