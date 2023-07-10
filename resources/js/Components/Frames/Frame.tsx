
import React from 'react';
import ImageElectric from '@/Assets/electric-car (1) 1.png';
import ImageElectric1 from '@/Assets/electric-car (2) 1.png';
import ImageElectric2 from '@/Assets/electric-car (3) 1.png';

const Frame = () => {
  return (
    <>
      <div className="w-full h-230 bg-green-500 flex flex-col items-center justify-center p-4 mt-12">
        <h1 className="text-white text-2xl font-black mt-2">Sell your Car in Simple Steps</h1>
        <h2 className="text-white text-xl font-bold mb-2">It will take less time</h2>
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <div className="bg-white rounded-full p-1">
              <img src={ImageElectric} alt="Icon 1" className="w-6 h-6" />
            </div>
            <span className="text-white text-sm ml-2">Enter Car Information</span>
          </div>
          <div className="mr-4 flex items-center">
            <div className="bg-white rounded-full p-1">
              <img src={ImageElectric1} alt="Icon 2" className="w-6 h-6" />
            </div>
            <span className="text-white text-sm ml-2">Upload Images</span>
          </div>
          <div className="mr-4 flex items-center">
            <div className="bg-white rounded-full p-1">
              <img src={ImageElectric2} alt="Icon 3" className="w-6 h-6" />
            </div>
            <span className="text-white text-sm ml-2">Price Tag</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame;
