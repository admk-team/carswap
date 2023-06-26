import React from 'react'
import ImageLuxay from '@/Assets/car.png';
import ImageTwenty from '@/Assets/24-hours-phone-service.png';
import ImageQuality from '@/Assets/quality-assurance.png';
import ImagePrice from '@/Assets/best-price.png';
import ImageFast from '@/Assets/speedometer.png';


const IconsBoxes = () => {
    return (
        <>
            <div className="container mx-auto mt-24">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                        <a href="#" className=" flex flex-col items-center justify-center max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={ImageLuxay} alt='' />
                            <p className='text-center mt-2 text-xl font-bold'>Luxury Selection</p>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                        <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={ImageTwenty} alt='' />
                            <p className='text-center mt-2 text-xl font-bold'>24/7 Order Available</p>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                        <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={ImageQuality} alt='' />
                            <p className='text-center mt-2 text-xl font-bold'>High Safety</p>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                        <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={ImagePrice} alt='' />
                            <p className='text-center mt-2 text-xl font-bold'>Best Prices</p>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                        <a href="#" className="flex flex-col items-center justify-center max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={ImageFast} alt='' />
                            <p className='text-center mt-2 text-xl font-bold'>Fast Car Delivery Service</p>
                        </a>
                    </div>

                    {/* Add more items with similar structure */}
                </div>
            </div>
        </>
    )
}

export default IconsBoxes
