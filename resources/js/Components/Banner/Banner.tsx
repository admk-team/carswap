import React from 'react';
import backgroundImageUrl from '@/Assets/small_baner.gif';


const Banner = () => {

    const bannerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,

    };

    return (
        <>
            <div className="text-4xl font-bold text-center mb-6 w-full mt-24">
                <h1>We Got Monthly Offer for You</h1>
            </div>
            <div className="md:container md:mx-auto bg-cover bg-center h-64 flex items-center" style={bannerStyle}>
                <div className="container mx-auto text-center">
                    {/* <h1 className="text-4xl font-bold text-blue-700">Welcome to Our Website</h1>
                <p className="mt-4 text-lg text-blue-700">Discover amazing things and explore the world of possibilities.</p> */}
                </div>
            </div>
        </>
    );
};

export default Banner;