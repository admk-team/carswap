import React, {useState} from 'react';
import BannerSlider from './BannerSlider'
//import Box from '@/Components/Box/Box'
//import Banner from '@/Components/Banner/Banner'
import PricingCard from '@/Components/Cards/PricingCard'
import Footer from '@/Pages/Footer/Footer'
import BannerTwo from '@/Components/Banner/BannerTwo'
//import IconsBoxes from '@/Components/Box/IconsBoxes'
import BrandBoxes from '@/Components/Box/BrandBoxes'
//import UpcomingCard from '@/Components/Cards/UpcomingCard'
import Reviews from '@/Components/Reviews/Reviews'
import BeforeFooterbanner from '@/Components/Banner/BeforeFooterbanner'
import NavBar from '@/Components/Navbar/NavBar'




export default function Test() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      
      <NavBar/>
      <BannerSlider />
      {/* <Box/> */}
      {/* <Banner/> */}
      <div className="text-4xl font-bold text-center w-full mt-16">
        <h1>Finds the Best Deals For You</h1>
      </div>
      <PricingCard />
      <BannerTwo />
      {/* <IconsBoxes /> */}
      {/* <UpcomingCard /> */}
      <BrandBoxes />
      <Reviews />
      <BeforeFooterbanner/>
      <Footer />
    </div>
  )
}
