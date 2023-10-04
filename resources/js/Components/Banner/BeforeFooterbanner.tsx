import React from 'react'
import ImageBefore from '@/Assets/BeforFooterPoster.png';

const BeforeFooterbanner = () => {
  const BannerThree = {
    backgroundImage: `url(${ImageBefore})`,
    // width: '941px', 
    // height: '545px',
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
        <div className="md:container md:mx-auto bg-cover bg-center h-96 flex items-center mt-16  " style={BannerThree}>
          <div className="container mx-auto text-center">
            <h4 className="text-3xl font-bold text-white mt-3">Do You have something to Swap?</h4>
            <h4 className="text-3xl font-bold text-white mt-3">Lets make deal quick and Easy</h4>
            <button type="button" className=" text-white font-bold text-2xl bg-amber-600 hover:bg-amber-700 px-6 mt-6 ml-3 py-3  mb-2 dark:focus:ring-yellow-900 ">Swap Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BeforeFooterbanner
