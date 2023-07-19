import React from 'react'
import Screen1 from "@/Assets/StepsImages/screen1.png"
import Screen2 from "@/Assets/StepsImages/Untitled design.png"
import Screen3 from "@/Assets/StepsImages/screen3.png"
import Screen4 from "@/Assets/StepsImages/screen4.png"

const AfterStep = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full -mt-8 ">
                <div className=" mt-24 md:container md:mx-auto">
                    <div className="container mx-auto py-8 flex flex-wrap justify-center">
                        <div className="text-2xl md:text-3xl font-semibold text-center mb-6 w-full">
                            <h1>Your reliable partner for car sales</h1>
                        </div>
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-20 py-8 justify-center">
                                <div className="md:flex md:flex-col items-center md:text-center  ">
                                    <div className='flex justify-center'>
                                        <img
                                            src={Screen1}
                                            alt="Image 1"
                                            className=" "
                                        />
                                    </div>
                                    <div className='justify-center text-center mt-3 w-48'>
                                        <h1 className=" font-semibold text-xl">Guaranteed Purchase</h1>
                                        <p className='text-md mt-3'>We guarantee to buy any car at a fair price</p>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-col items-center md:text-center  ">
                                    <div className='flex justify-center'>
                                        <img
                                            src={Screen2}
                                            alt="Image 1"
                                            className="  "
                                        />
                                    </div>
                                    <div className='justify-center text-center mt-3 w-44'>
                                        <h1 className=" font-semibold text-xl">No Costs. <br /> No Obligation</h1>
                                        <p className='mt-3'>Book an appointment at any of our many branches across UAE at a date and time of your convenience</p>
                                    </div>
                                </div>

                                <div className="md:flex md:flex-col items-center md:text-center  ">
                                    <div className='flex justify-center'>
                                        <img
                                            src={Screen3}
                                            alt="Image 1"
                                            className="  "
                                        />
                                    </div>
                                    <div className='justify-center text-center mt-3 w-44'>
                                        <h1 className=" font-semibold text-xl">Quick and Easy</h1>
                                        <p className='mt-3'>All done in 30 minutes. Nation wide branches near you.</p>
                                    </div>
                                </div>

                                <div className="md:flex md:flex-col items-center md:text-center  ">
                                    <div className='flex justify-center'>
                                        <img
                                            src={Screen4}
                                            alt="Image 1"
                                            className="  "
                                        />
                                    </div>
                                    <div className='justify-center text-center mt-3 w-44'>
                                        <h1 className=" font-semibold text-xl">Fast and Secure</h1>
                                        <p className='mt-3'>No dodgy deals. We transfer the money straight in your bank account.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AfterStep
