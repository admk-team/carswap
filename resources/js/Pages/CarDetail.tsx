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
import Body from "@/Assets/car-wash.png"

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
                        <p className="ml-2 underline">Share Now</p>
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
                <h3>Key Features:</h3>
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
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Engine Size</p>
                        </div>
                        <div>
                           <p>2982 cc</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Drive</p>
                        </div>
                        <div>
                           <p>4WD</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
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
                            <img src={Body} className="w-6 h-6" />
                            <p>Mileage</p>
                        </div>
                        <div>
                           <p>35,000 (Mi)</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Year</p>
                        </div>
                        <div>
                           <p>2022</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Condition</p>
                        </div>
                        <div>
                           <p>Used</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
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
                            <img src={Body} className="w-6 h-6" />
                            <p>Transmission</p>
                        </div>
                        <div>
                           <p>Semi Automatic</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Fuel Type</p>
                        </div>
                        <div>
                           <p>Diesel</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>Exterior Color</p>
                        </div>
                        <div>
                           <p>Black</p>
                        </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between bg-purple-50 p-4'>
                        <div className="flex gap-2">
                            <img src={Body} className="w-6 h-6" />
                            <p>No of Owners</p>
                        </div>
                        <div>
                           <p>First Owner</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
