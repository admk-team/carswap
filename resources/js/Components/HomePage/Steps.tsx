import React from 'react'
import Calender from "@/Assets/StepsImages/preview.png"
import FirstImage from "@/Assets/StepsImages/share-ride.png"
import thridImage from "@/Assets/StepsImages/Swap.png"
import Delivery from "@/Assets/StepsImages/delivery-van.png"

const Steps = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                <div className='text-center text-3xl font-bold w-full'>
                    <h1 className='text-gray-950 font-semibold text-3xl'>All In 4 Simple Steps</h1>
                </div>
                <div>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 ">
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
                                    <p className="mt-4 font-semibold w-56">Post your car.</p>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-2'>2</h1>
                                    <img
                                        src={Calender}
                                        alt="Image 2"
                                        className="w-20 h-20 mt-10"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-48 ">We Evaluate it.</p>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-2'>3 </h1>
                                    <img
                                        src={thridImage}
                                        alt="Image 3"
                                        className="w-26 h-20 mt-11 object-cover"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-48 ">Choose a car to Swap.</p>
                                </div>
                            </div>
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-0'>4</h1>
                                    <img
                                        src={Delivery}
                                        alt="Image 3"
                                        className="w-24 h-28 mt-8 object-cover"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className=" font-semibold w-48 ">Your Inspection and Delivery.</p>
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
