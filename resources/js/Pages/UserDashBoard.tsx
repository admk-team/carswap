import NavBar2 from '@/Components/Navbar/NabBar2'
import React from 'react'
import Footer from './Footer/Footer'
import UserProfile from '@/Components/UserDashboard/UserProfile'

const UserDashBoard = () => {
  return (
    <>
      <NavBar2 />
      <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
        <h1 className='font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl'>My Dashboard</h1>
        <UserProfile />
      </div>
      <Footer />
    </>
  )
}

export default UserDashBoard
