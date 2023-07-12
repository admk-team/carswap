import React, { useState } from 'react';
//import BannerSlider from './BannerSlider'
//import Box from '@/Components/Box/Box'
//import Banner from '@/Components/Banner/Banner'
import PricingCard from '@/Components/Cards/PricingCard'
import Footer from '@/Pages/Footer/Footer'
import BannerTwo from '@/Components/Banner/BannerTwo'
//import IconsBoxes from '@/Components/Box/IconsBoxes'
//import BrandBoxes from '@/Components/Box/BrandBoxes'
//import UpcomingCard from '@/Components/Cards/UpcomingCard'
import Reviews from '@/Components/Reviews/Reviews'
//import BeforeFooterbanner from '@/Components/Banner/BeforeFooterbanner'
import NavBar from '@/Components/Navbar/NavBar'
import TopBanner from '@/Components/Banner/TopBanner';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';





export default function Test() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>

      <NavBar />
      <TopBanner/>
      {/* <BannerSlider /> */}
      {/* <Box/> */}
      {/* <Banner/> */}
      <div className="text-3xl font-bold text-center w-full mt-12">
        <h1>Finds the Best Deals For You</h1>
      </div>
      <PricingCard />
      <div className="mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ">
        <a href="#" className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32">View More</a>
      </div>
      <BannerTwo />
      {/* <IconsBoxes /> */}
      {/* <UpcomingCard /> */}
      {/* <BrandBoxes /> */}
      <Reviews />
      {/* <BeforeFooterbanner /> */}
      <SignUpPage/>
      <LoginPage/>
      <Footer />
    </>
  )
}
