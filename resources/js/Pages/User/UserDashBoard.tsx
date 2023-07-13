import NavBar2 from '@/Components/Navbar/NabBar2'
import UserProfile from '@/Components/UserDashboard/UserProfile'
import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react'
import Footer from '../Footer/Footer';

const UserDashBoard = ({auth,success,cars,error}:any) => {
  console.log(success)
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (success) {
    setSuccessMessage(success);
    }
    if (error) {
    setErrorMessage(error);
    }
}, []);
  return (
    <>
    <Head title='User | Dashboard'/>
      <NavBar2 auth={auth}/>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
        <h1 className='font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl'>My Dashboard</h1>
        
        {successMessage && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                     {successMessage}
                    <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                )}
                {errorMessage && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {errorMessage}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                           )}
        <UserProfile cars={cars}/>
      </div>
      <Footer />
    </>
  )
}

export default UserDashBoard
