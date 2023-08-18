import NavBar2 from '@/Components/Navbar/NabBar2'
import UserProfile from '@/Components/UserDashboard/UserProfile'
import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react'
import Footer from '../Footer/Footer';
import { Inertia } from '@inertiajs/inertia';

const UserDashBoard = ({auth,success,cars,error,pendings,approved,swaped,payment_data}:any) => {
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentData, setPaymentData] = useState(null)
  useEffect(() => {
    if (paymentData !== null) {
        paymentResponse();
      }
    }, [paymentData]);

    const paymentResponse = () => {
      if (paymentData !== null) {
        Inertia.post(route('user.storePayment'), { paymentData});
      }
    }
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
        <h1 className='font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl mb-2'>My Dashboard</h1>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <UserProfile auth={auth} cars={cars} pendings={pendings} approved={approved} swaped={swaped} payment_data={payment_data}/>
      </div>
      <Footer auth={auth}/>
    </>
  )
}

export default UserDashBoard
