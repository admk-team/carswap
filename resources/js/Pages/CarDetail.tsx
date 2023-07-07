import React, { useEffect } from 'react'
import NavBar from '@/Components/Navbar/NavBar';
import TimeClock from "@/Assets/timeclock.png";
import PriceTag from "@/Assets/pricetag.png";
import Location from "@/Assets/geo-location.png";
import Share from "@/Assets/send.png";
import CoverImg from "@/Assets/revo-img.png";
import Img2 from "@/Assets/revo_2 .png";
import Img3 from "@/Assets/revo_3.png";
import Img4 from "@/Assets/revo_3.png";
import Body from "@/Assets/car-wash.png";
import Engine from "@/Assets/car-engine.png";
import Drive from "@/Assets/steering-wheel.png";
import Color from "@/Assets/car-painting.png";
import Mileage from "@/Assets/speed-test.png";
import Gear from "@/Assets/gear-stick.png";
import Fuel from "@/Assets/gas-station.png";
import Color1 from "@/Assets/car-color.png";
import backgroundImage from '@/Assets/card1.jpg';
import Footer from './Footer/Footer';

export default function CarDetail() {

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-200 p-4">
                <div className="flex">
                    <div className="bg-green-600 text-white py-2 px-4 mr-2">Nigerian</div>
                    <div className="bg-emerald-500 text-white py-2 px-4 mr-2">Urgent</div>
                </div>
                <div className="flex mt-3">
                    <div className="text-black font-bold text-lg text-5xl">2022 Toyota Revo</div>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex items-center">
                        <img src={TimeClock} className="w-6 h-6" />
                        <p className="mx-2">listed on: July 3, 2023</p>
                    </div>
                    <div className="flex justify-end">
                        <div className="relative">
                            <img src={PriceTag} alt="PriceTag" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white self-center mx-3 pb-3 font-bold">
                                $ 43496.10
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="flex items-center">
                        <img src={Location} className="w-6 h-6" />
                        <p className="mx-2">California, USA</p>
                    </div>
                    <div className="flex items-center mr-10" >
                        <img src={Share} className="w-6 h-6" />
                        <p className="ml-2 underline hover:text-blue-500 cursor-pointer">Share Now</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-7">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-col">
                            <img src={CoverImg} className="w-full h-5/6 object-cover" alt="Cover Image" />
                            <div className="flex flex-wrap gap-2 mt-3">
                                <img src={Img2} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6" />
                                <img src={Img3} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6" />
                                <img src={Img4} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6" />
                            </div>

                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-col mx-3 h-5/6">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-bold mb-4">Verified Cars:</h2>
                                <p className="text-gray-700">Carswap carries out many inspections on cars to make sure a high quality is kept. These inspections cover both the documentation and the state of the vehicle.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 mt-3">
                                <h2 className="text-lg font-bold mb-4">Dedicated Support Team:</h2>
                                <p className="text-gray-700">Carswap has a committed support team on hand to provide you with the necessary knowledge to help you make better purchasing decisions.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 mt-3">
                                <h2 className="text-lg font-bold mb-4">Inspection:</h2>
                                <p className="text-gray-700">Carswap carries out best inspections on cars to make sure a high quality is kept. These inspections cover both the documentation and the state of the vehicle. We deal with the best vehicles out there.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="p-4">
                <h3 className="font-bold text-2xl">Key Features:</h3>
                <div className="grid grid-cols-12 gap-4 mt-7">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Body} className="w-6 h-6" />
                                <p>Body Type</p>
                            </div>
                            <div>
                                <p>Truck</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Engine} className="w-6 h-6" />
                                <p>Engine Size</p>
                            </div>
                            <div>
                                <p>2982 cc</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Drive} className="w-6 h-6" />
                                <p>Drive</p>
                            </div>
                            <div>
                                <p>4WD</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Color} className="w-6 h-6" />
                                <p>Interior Color</p>
                            </div>
                            <div>
                                <p>Jet Black</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Mileage} className="w-6 h-6" />
                                <p>Mileage</p>
                            </div>
                            <div>
                                <p>35,000 (Mi)</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                                <p>Year</p>
                            </div>
                            <div>
                                <p>2022</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                </svg>

                                <p>Condition</p>
                            </div>
                            <div>
                                <p>Used</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p>Seller Type</p>
                            </div>
                            <div>
                                <p>Dealer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Gear} className="w-6 h-6" />
                                <p>Transmission</p>
                            </div>
                            <div>
                                <p>Semi Automatic</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Fuel} className="w-6 h-6" />
                                <p>Fuel Type</p>
                            </div>
                            <div>
                                <p>Diesel</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <img src={Color1} className="w-6 h-6" />
                                <p>Exterior Color</p>
                            </div>
                            <div>
                                <p>Black</p>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between bg-purple-50 p-4'>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>

                                <p>No of Owners</p>
                            </div>
                            <div>
                                <p>First Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-2xl">Features:</h3>
                <div className="grid grid-cols-12 gap-4 mt-7">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>ABS</p>
                        </div>


                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>AM/FM Radio</p>
                        </div>

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Immobilizer Key</p>
                        </div>

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Rear Parking Sensor</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Air Bags</p>
                        </div>

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Brake Assist</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Navigation System</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Steering Adjustment</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Air Condition</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Central Locking</p>
                        </div>

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Power Steering</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Xenon Headlight</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Alloy Rims</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Cruise Control</p>
                        </div>

                        <div className="flex gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p>Power Windows</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='p-4'>
                <h3 className="font-bold text-2xl">Description:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi laudantium, nam odit, asperiores alias fugiat ratione vel earum maiores unde tempore nobis possimus reprehenderit assumenda, culpa aliquid vitae at?</p>
            </div>
            <div className='p-4 '>
                <h3 className="font-bold text-3xl text-green-600">Explore More:</h3>
                <h3 className="font-bold text-2xl mt-2">Similar Listings</h3>
                <div className="flex justify-center">
                    <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="w-full max-w-xs max-w-sm bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="relative">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={backgroundImage} alt="product image" />
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <div className="absolute  top-36 left-2">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            {/* SVG path */}

                                        </svg>
                                        {/* Repeat for other stars */}

                                        <span className=" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA534" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            <p className='text-sm'>4.2</p>
                                            </span>
                                    </div>
                                </div>
                                <div className="px-5 pb-5">

                                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">2022 Toyota Revo</h5>

                                    <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-2">$ 43496.10</h5>
                                    <div className="flex items-center">
                                    </div>
                                    <hr className='border-t-2 border-black mt-4' />
                                    <div className="mt-4">
                                        <table className="w-full">
                                            <tbody>
                                                <tr>
                                                    <th className="px-2 py-1 font-bold-300 text-gray-600">Condition</th>
                                                    <th className="px-2 py-1 text-gray-800">Engine</th>
                                                    <th className="px-2 py-1 text-gray-800">Mileage</th>
                                                </tr>
                                                <tr>
                                                    <th className="px-2 py-1 text-gray-600">Brand New</th>
                                                    <th className="px-2 py-1 text-gray-800">3000 CC</th>
                                                    <th className="px-2 py-1 text-gray-800">35000 (MI)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <a href="#" className="text-white bg-black hover:bg-gray-600 focus:outline-none font-medium  text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cash Purchase</a>
                                        <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 w-32">Swap</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>

    )
}
