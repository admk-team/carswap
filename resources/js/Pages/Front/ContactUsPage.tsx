
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '@/Components/Navbar/NavBar'
import Bg from '@/Assets/bgcontact.png'
// import backgroundedImage from '@/Assets/';
import contactimg from "@/Assets/contactimg.png"
const ContactUsPage = (auth: any) => {
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
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className='mt-9 mx-4 my-4 align-center'>
                                <h2 className="text-2xl text-center text-dark uppercase font-bold mt-12">Login</h2>
                                <p className="text xl text-center text-dark mb-4">Got any issue ? No problem contact us now</p>
                                <form>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <div className="w-60">
                                            <input
                                                placeholder="First Name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                            />
                                        </div>
                                        <div className="w-60">
                                            <input
                                                placeholder="Last Name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                            />
                                        </div>
                                    </div>



                                    <div className="mb-3 w-11/12">
                                        <input
                                            placeholder="Enter Email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div className="mb-3 w-11/12">
                                        <input
                                            placeholder="Phone Number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div className="mb-3 w-11/12">
                                        <textarea
                                            placeholder="Write your message"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-gray-50"

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
                                </form>
                            </div>
                            <div className="hidden md:block rounded-r-xl overflow-hidden">
                                <img src={contactimg} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUsPage
