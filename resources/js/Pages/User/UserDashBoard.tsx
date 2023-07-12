import NavBar2 from '@/Components/Navbar/NabBar2'
import React from 'react'
import UserProfile from '@/Components/UserDashboard/UserProfile'
import Footer from '../Footer/Footer'
import { Head } from '@inertiajs/react'

const UserDashBoard = ({auth}:any) => {
  return (
    <>
    <Head title='User | Dashboard'/>
      <NavBar2 auth={auth}/>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
        <h1 className='font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl'>My Dashboard</h1>
        <UserProfile />
      </div>
      <Footer />
    </>
  )
}

export default UserDashBoard
