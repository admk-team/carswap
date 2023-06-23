import React from 'react';
import backgroundImageUrl from '@/Assets/Capture.jpg';


const Banner = () => {
   
    const bannerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        
    };

    return (
        <div className="md:container md:mx-auto bg-cover bg-center h-64 flex items-center mt-16" style={bannerStyle}>
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
                <p className="mt-4 text-lg text-white">Discover amazing things and explore the world of possibilities.</p>
            </div>
        </div>
    );
};

export default Banner;