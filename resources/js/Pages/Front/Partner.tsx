import React from 'react';
import NavBar from '@/Components/Navbar/NavBar';
import AnotherBG from '@/Assets/AboutUsWalpeper.png';
import Footer from '../Footer/Footer';
import { Head, Link } from '@inertiajs/react';
import PreviouImage from "@/Assets/left.png"


export default function Partner({ auth, success, errors }: any) {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AnotherBG})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center items-center h-full">
                <div className="bg-white w-11/12 p-7 rounded-md shadow-lg max-w-xl mx-auto bg-opacity-80 backdrop-blur-lg">
                <div className='absolute flex -mt-4 -ml-2'>
                        <Link href={route('front.index')} className=' text-blue-500 text-lg'>Home</Link>
                        <img src={PreviouImage} alt="" className='w-6 h-6 mt-1' />
                        <p className='text-lg'>Become A Partner</p>
                    </div>
                    <h2 className="text-3xl text-center text-dark uppercase font-bold mt-12">Become A Partner</h2>
                    <p className="text-lg text-center text-dark mb-6">Become a partner with us right now.</p>
                    <hr className="mb-6 border-t-2 border-gray-500 border-opacity-50" />
                    <form>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="w-full">
                                <input
                                    placeholder="Name"
                                    className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <input
                                placeholder="Enter Email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                placeholder="Telephone number"
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                placeholder="Age"
                                type="number"
                                className="w-full px-4 py-3 border border-gray-500 rounded-xl bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            ></input>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
