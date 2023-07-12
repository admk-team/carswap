import NavBar2 from '@/Components/Navbar/NabBar2'
import Footer from './Footer/Footer'
import UserProfile from '@/Components/UserDashboard/UserProfile'
import React, { useState, useEffect } from "react";

  const UserDashBoard = ({cars}: any) => {
 
  // const currentItems = carsData.slice();

  return (
    <>
      <NavBar2 />
      <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
        <h1 className='font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl'>My Dashboard</h1>
        {/* {cars && cars?.map((car: any) => (
            <tr key={car.id}>
                <td>{car?.first_name}</td>
                <td>{car?.last_name}</td>
            </tr>
        ))} */}

        <UserProfile cars={cars}/>
      </div>
      <Footer />
    </>
  )
}

export default UserDashBoard
