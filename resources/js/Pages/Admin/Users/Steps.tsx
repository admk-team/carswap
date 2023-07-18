import React from 'react'
import Calender from "@/Assets/calendar.png"
import FirstImage from "@/Assets/verified-text-paper.png"
import thridImage from "@/Assets/coins.png"

const Steps = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                <div className='text-center text-3xl font-bold w-full'>
                    <h1 className='text-gray-950 font-extrabold'>All in 3 simple steps</h1>
                </div>
                <div>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 ">
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-3'>1</h1>
                                    <img
                                        src={FirstImage}
                                        alt="Image 1"
                                        className="w-20 h-20 mt-11 object-cover "
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-56">Get a free no obligation valuation above.</p>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold'>2</h1>
                                    <img
                                        src={Calender}
                                        alt="Image 2"
                                        className="w-20 h-20 object-cover mt-10"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-48 ">Book an appointment for a free car inspection near you.</p>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-0'>3 </h1>
                                    <img
                                        src={thridImage}
                                        alt="Image 3"
                                        className="w-20 h-20 mt-11 object-cover"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-48 ">Complete the sale and get paid if you are happy with the offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Steps
