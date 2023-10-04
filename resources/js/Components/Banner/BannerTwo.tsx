import React from 'react'
import ImageBanerTwo from '@/Assets/Imagge5.jpg';
import { Link } from '@inertiajs/react';

const BannerTwo = () => {
    const BannerTwo = {
        backgroundImage: `url(${ImageBanerTwo})`,

    };

    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                <div className="md:container md:mx-auto bg-cover bg-center h-96 flex items-center  " style={BannerTwo}>
                    <div className="container mx-auto text-center">
                        <p className="uppercase text-xl md:text-2xl font-bold text-emerald-500">We are since 2006</p>
                        <h1 className="text-2xl md:text-3xl font-bold text-white mt-2 md:mt-3">BUY. SELL. and SWAP Your Swap Quickly.</h1>
                        <h1 className="text-2xl md:text-3xl font-bold text-white ">Best Prices, Confidential, and Seamless.</h1>
                        <p className="mt-2 md:mt-3 text-base md:text-lg font-bold text-white">We favor creating fair and straightforward pricing Structures.</p>
                        <p className="text-base md:text-lg font-bold text-white">Select your next effective strategy and begin right away.</p>

                        <Link href={route('ViewAllCars')} type="button" className="px-4 py-2.5 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 mr-3 mt-4">View Car</Link>
                        <Link href={route('user.postcar')} type="button" className="px-4 py-2.5 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 ml-3 mt-4">Sell Your Car</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerTwo

