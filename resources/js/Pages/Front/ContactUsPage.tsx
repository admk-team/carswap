
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '@/Components/Navbar/NavBar'
import Bg from '@/Assets/bgcontact.png'
// import backgroundedImage from '@/Assets/';
import contactimg from "@/Assets/contactimg.png"
import PreviouImage from '@/Assets/left.png';
import { Head, Link, useForm } from '@inertiajs/react';


const ContactUsPage = ({auth}: any) => {
    const { data, setData, post } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message:''
    });

    const handleSubmit = (e: any) => {
        // console.log('data',data)
        e.preventDefault();
        post(route('mail'));
    };
    return (
        <>
            <NavBar auth={auth} />
            <section className="bg-white">
                <div className="hero-section bg-cover bg-center h-96 flex justify-center items-center" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="hero-content text-center">
                        <h1 className="text-5xl text-emerald-500 font-bold ">Contact Us</h1>
                        <p className="text-xl text-white">Home - Contact Us.</p>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl w-full h-full mt-12 p-12">
                    <div className="border border-gray-500 rounded-xl shadow-md">
                    <div className='absolute flex mt-1 ml-3'>
                        <Link href={route('front.index')} className=' text-blue-500 text-lg'>Home</Link>
                        <img src={PreviouImage} alt="" className='w-6 h-6 mt-1' />
                        <p className='text-lg'>Contact Us</p>
                    </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className='mt-9 mx-4 my-4 align-center'>
                                <h2 className="text-2xl text-center text-dark uppercase font-bold mt-12">Contact Now</h2>
                                <p className="text xl text-center text-dark mb-4">Got any issue ? No problem contact us now</p>
                                <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-1 mb-3">
            <div className="w-64">
              <input
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                value={data.first_name}
                onChange={(e) => setData('first_name', e.target.value)}
              />
            </div>
            <div className="w-64">
              <input
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                value={data.last_name}
                onChange={(e) => setData('last_name', e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 w-11/12">
            <input
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </div>
          <div className="mb-3 w-11/12">
            <input
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              value={data.phone_number}
              onChange={(e) => setData('phone_number', e.target.value)}
            />
          </div>
          <div className="mb-3 w-11/12">
            <textarea
              placeholder="Write your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-gray-50"
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl mt-2"
            >
              SEND NOW
            </button>
          </div>
     <div className='mt-3 text-center'> 
For complaints
Contact CEO. @twitter.com/festusox
     </div>

        </form>
                            </div>
                            <div className="hidden md:block rounded-r-xl overflow-hidden">
                                <img src={contactimg} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer auth={auth}/>
        </>
    )
}

export default ContactUsPage
