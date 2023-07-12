import React, { useState } from 'react';
import ImageBWM from '@/Assets/BrandLogos/bmw.png';
import ImageHonda from '@/Assets/BrandLogos/honda-logo.png';
import ImagemMercedes from '@/Assets/BrandLogos/mercedes.png'
import ImageFord from '@/Assets/Ford-Logo.png';
import ImageTesla from '@/Assets/BrandLogos/tesla_logo_PNG19.png';
import ImageToryota from '@/Assets/BrandLogos/toyota-logo.png';
import ImageFerrari from '@/Assets/BrandLogos/ferrari_.png';
import ImageCharlo from '@/Assets/BrandLogos/сhevrolet_PNG157.png'
import ImageAudi from '@/Assets/BrandLogos/audi-logo-2.png';
import ImageMG from '@/Assets//BrandLogos/MgLogo.png';

const SliderCard = (brands:any) => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
        <h1 className="text-center text-2xl font-bold mb-4">Find your ideal car</h1>
        <div className="flex items-center mb-4">
          <input type="text" placeholder="Search location..." className="border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md" />
        </div>
        <h3 className='font-extrabold text-xl'>By Price:</h3>
        <div className="mb-3 mt-2">
          <button type="button" className="border text-sm focus:bg-emerald-500 font-bold bg-green border-gray-300 rounded-lg py-1 px-2 shadow-md mr-1">Under 3m</button>
          <button type="button" className="border text-sm focus:bg-emerald-500 font-bold bg-green border-gray-300 rounded-lg py-1 px-2 shadow-md mr-1">3M-6M</button>
          <button type="button" className="border text-sm focus:bg-emerald-500 font-bold bg-green border-gray-300 rounded-lg py-1 px-2 shadow-md mr-1">6M-10M</button>
          <button type="button" className="border text-sm focus:bg-emerald-500 font-bold bg-green border-gray-300 rounded-lg py-1 px-2 shadow-md">10M-15M</button>
          <button type="button" className="border text-sm focus:bg-emerald-500 font-bold bg-green border-gray-300 rounded-lg py-1 px-2 shadow-md">Above-15</button>
        </div>
        <h3 className='font-extrabold text-xl'>By Brand:</h3>
        <div className="grid grid-cols-6 gap-0 mt-2">
          {
            brands.brands.brands?.map((brand:any)=>(
                <button key={brand.id} className="border pt-1 pl-1 focus:bg-emerald-500">
                    <img src={"/storage/" + brand?.image} alt="Image 1" className="w-10 h-10 object-contain" />
                </button>
            ))
          }
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded">Search</button>
        </div>
      </div>

    </>
  )
}

export default SliderCard



