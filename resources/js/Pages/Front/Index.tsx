import React, { useState } from 'react';
import PricingCard from '@/Components/Cards/PricingCard'
import Footer from '@/Pages/Footer/Footer'
import BannerTwo from '@/Components/Banner/BannerTwo'
import Reviews from '@/Components/Reviews/Reviews'
import NavBar from '@/Components/Navbar/NavBar'
import TopBanner from '@/Components/Banner/TopBanner';
import { Head, Link } from '@inertiajs/react';
interface IndexProps {
    brands: any;
    cars: any;
    auth: any;
}

const Index: React.FC<IndexProps> = ({ brands,cars,auth }) =>{
  return (
    <>
    <Head title='Index'/>
      <NavBar auth={auth} />
      <TopBanner brands={brands}/>
      <div className="text-3xl font-bold text-center w-full mt-12">
        <h1>Finds the Best Deals For You</h1>
      </div>
      <PricingCard cars={cars} />
      <div className="mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ">
        <Link href={route('ViewAllCars')} className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32">View More</Link>
      </div>
      <BannerTwo />
      <Reviews />
      <Footer />
    </>
  )
}
export default Index
