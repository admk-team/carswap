
import React from 'react';
import ImageElectric from '@/Assets/electric-car (1) 1.png';
import ImageElectric1 from '@/Assets/electric-car (2) 1.png';
import ImageElectric2 from '@/Assets/electric-car (3) 1.png';

const Frame = () => {
  return (
    <>
      <div className="w-full h-230 bg-green-500 flex flex-col items-center justify-center p-4 mt-12">
        <h2 className="text-white text-lg text-center font-bold mb-2">Dear Seller / Dealer,<br />
        Welcome to Carswap.ng, your No. 1 cars swap marketplace in Nigeria. You are about to sell a car; please go ahead and fill the form below. Don’t worry when a customer is interested in taking your car for swap. Carswap Limited will pay you complete cash of your car. You will be charged an inspection fee of N5,000, And no extra cost for a sell. If you are a dealer, you will get N100,000 thank you cash for every 10 cars closed deals on carswap.ng. A after your first 10 cars deal, you will be placed on our VIP dealer list which qualifies you to free car transactions on carswap.ng with other benefits which will be announced to you directly.
          <br />
          Welcome on board <br/>
          Carswap Limited Team.

        </h2>

      </div>
      {/* <div className="flex items-center">
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
        </div> */}

    </>
  );
};

export default Frame;
