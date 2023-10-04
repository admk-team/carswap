import React from 'react'
import ImageBWM from '@/Assets/bmw.png';
import ImageHonda from '@/Assets/honda-logo.png';
import ImagemMercedes from '@/Assets/mercedes.png';
import ImageFord from '@/Assets/ford-logo-icon-png-14228.png';
import ImageTesla from '@/Assets/tesla_logo_PNG19.png';
import ImageToryota from '@/Assets/toyota-logo.png';
import ImageFerrari from '@/Assets/ferrari_.png';
import ImageCharlo from '@/Assets/сhevrolet_PNG157.png'
import ImageAudi from '@/Assets/audi-logo-2.png';
import ImageMG from '@/Assets/car_logo_PNG1657.png';
import ImageAlfa from '@/Assets/alfa.png';
import ImageKIA from '@/Assets/kia_PNG46.png';


const BrandBoxes = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="container mx-auto mt-16">
                    <div className="flex flex-wrap justify-center">
                        <div className="text-4xl font-bold text-center mb-6 w-full">
                            <h1>Browse By Brands</h1>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageBWM} alt='' />
                                <p className='text-center mt-3 text-base font-bold'>BWM</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageHonda} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Honda</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImagemMercedes} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Mercedes</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageFord} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Ford</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageTesla} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Tesla</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageToryota} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Toyota</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageFerrari} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>ferrari</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageCharlo} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>chevrolet</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageAudi} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>Audi</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageMG} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>mg</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageAlfa} alt='' />
                                <p className='text-center mt-3 text-base font-bold uppercase'>alfa romeo</p>
                            </a>
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
                            <a href="#" className=" flex flex-col items-center justify-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <img className='w-24 h-24' src={ImageKIA} alt='' />
                                <p className='text-center mt-3 text-base font-bold'>KIA</p>
                            </a>
                        </div>
                        {/* Add more items with similar structure */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandBoxes
