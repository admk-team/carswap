import React from 'react'
import Calender from "@/Assets/StepsImages/preview.png"
import FirstImage from "@/Assets/swap.png"
import thridImage from "@/Assets/StepsImages/Swap.png"
import Delivery from "@/Assets/eye-test.png"

const Steps = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                <div className='text-center text-3xl font-bold w-full'>
                    <h1 className='text-gray-950 font-semibold text-3xl'>4 Simple Steps To Swap A Car</h1>
                </div>
                <div>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 ">
                            <div className="md:flex md:flex-col items-center md:text-center p-4 ">
                                <div className='flex justify-center'>
                                    <h1 className='text-emerald-500 text-9xl font-bold -mr-3'>1</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mt-10" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-56">Post your car</p>
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
                                        src={FirstImage}
                                        alt="Image 3"
                                        className="w-26 h-20 mt-11 object-cover"
                                    />
                                </div>
                                <div className='flex justify-center text-center'>
                                    <p className="mt-4 font-semibold w-48 ">Choose car to swap
                                    </p>
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
