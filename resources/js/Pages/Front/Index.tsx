import React, { useState } from 'react';
import PricingCard from '@/Components/Cards/PricingCard'
import Footer from '@/Pages/Footer/Footer'
//import BannerTwo from '@/Components/Banner/BannerTwo'
//import Reviews from '@/Components/Reviews/Reviews'
import NavBar from '@/Components/Navbar/NavBar'
import TopBanner from '@/Components/Banner/TopBanner';
import { Head, Link } from '@inertiajs/react';
import Steps from '../../Components/HomePage/Steps';
import AfterStep from '@/Components/HomePage/AfterStep';
import Featured from '@/Components/HomePage/Featured';
import WhyUs from '@/Components/HomePage/Whyus';
import Newsletter from './Newsletter';
import SliderCard from '@/Components/Cards/SliderCard';
import {BannerThree} from '@/Components/Banner/BannerThree';
import backgroundImage from "@/Assets/SliderImages/banner.png";

interface IndexProps {
    brands: any;
    swap_cars: any;
    auth: any;
    sale_cars :any;
    categories :any;
    errors:any;
    success:any;
}

const Index: React.FC<IndexProps> = ({ brands,swap_cars,auth,sale_cars,categories ,errors , success }) =>{
  return (
    <>
    <Head title='Nigeria’s No 1. Carswap place. Buy. Sell. Swap'/>
      <NavBar auth={auth} />
      <TopBanner brands={brands} categories={categories}/>
      <div className="text-3xl text-center w-full mt-12">
        {/* <h1 className='text-gray-950 font-semibold'>Find Your Ideal Car</h1> */}
        {/* <div className="mx-auto w-full max-w-screen-xl">
          <img src={backgroundImage} className='w-full mt-[140px] lg:mt-0'/>                  
        </div> */}
        {/* <SliderCard brands={brands} categories={categories}/> */}
      </div>
      {/* <BannerThree/> */}
      <div className="text-3xl text-center w-full mt-[140px] sm:mt-0">
        <h1 className='text-gray-950 font-semibold'>Swap or Buy best car deals in Nigeria</h1>
      </div>
      <PricingCard cars={swap_cars} />
      <div className="mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ">
        <Link href={route('ViewAllCars','swap')} className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32">View More</Link>
      </div>
      {/* <BannerTwo /> */}
      <Steps/>
      {/* <div className="text-3xl text-center w-full mt-12">
        <h1 className='text-gray-950 font-semibold'>Cars for Sale</h1>
      </div> */}
      {/* <PricingCard cars={sale_cars} /> */}
      {/* <div className="mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ">
        <Link href={route('ViewAllCars','sale')} className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32">View More</Link>
      </div> */}
      {/* <Reviews /> */}
      {/* <AfterStep/> */}
      {/* <WhyUs/> */}
      {/* <Featured/> */}
      <Newsletter errors={errors} success={success}/>
      <Footer auth={auth} brands={brands}/>
    </>
  )
}
export default Index
