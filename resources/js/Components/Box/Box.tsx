
import ImageCoupe from '@/Assets/coupe-1.png';
import ImageCrouse from '@/Assets/crossover-1.png';
import ImageTruck from '@/Assets/truck-1.png';
import ImageWagon from '@/Assets/wan.png';
import ImageSedam from '@/Assets/sedan-1.png';
import ImageConvertible from '@/Assets/convertable.png';
import React from 'react'

const Box = () => {
    return (
        <div className="container mx-auto mt-24">
            <div className="flex flex-wrap justify-center">
                <div className="text-4xl font-bold text-center mb-6 w-full">
                <h1>Explore By Body Type</h1>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className=" shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                       <img src={ImageCoupe} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Coupe</p>
                    </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className=" shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img src={ImageCrouse} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Crossover</p>
                    </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className="shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img src={ImageTruck} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Truck</p>
                    </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className="shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img src={ImageWagon} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Wagon</p>
                    </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className="shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img src={ImageSedam} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Sedan</p>
                    </a>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                    <a href="#" className="shadow-xl block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <img src={ImageConvertible} alt=''/>
                       <p className='text-center mt-2 text-xl font-bold'>Convertible</p>
                    </a>
                </div>
                {/* Add more items with similar structure */}
            </div>
        </div>
    )
}

export default Box

