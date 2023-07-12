import React from 'react';
import backgroundImage from '@/Assets/card1.jpg';
import { Link } from '@inertiajs/react';

const PricingCard = (cars:any) => {
    console.log(cars)
    return (
        <div className="mx-auto max-w-screen-xl w-full h-full mt-8 ">
            <div className="flex justify-center">
                <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
                    { cars.cars?.map((car:any,index:any) => (

                            <div key={index} className="w-full bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="relative">
                                <Link href={route('CarDetail',car.id)}>
                                    <img className=" w-full h-72 rounded-t-lg object-cover" src={"storage/" + car?.images} alt="product image" />
                                </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <div className="absolute bottom-5 left-1">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    </svg>
                                    <span className=" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA534" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <p className='text-sm'>4.2</p>
                                    </span>
                                </div>
                            </div>
                            <div className="px-2 pb-4">
                                <Link href={route('CarDetail',car.id)}>
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">{car?.title}</h5>
                                </Link>
                                <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-1">$ {car?.price}</h5>
                                <div className="flex items-center">
                                </div>
                                <hr className='border-t-2 border-black mt-2' />
                                <div className="mt-4">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="px-2 py-1 font-bold-300 text-gray-600">Condition</th>
                                                <th className="px-2 py-1 text-gray-800">Engine</th>
                                                <th className="px-2 py-1 text-gray-800">Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className="px-2 py-1 text-gray-600">{car?.condition}</th>
                                                <th className="px-2 py-1 text-gray-800">{car?.engine_capacity}</th>
                                                <th className="px-2 py-1 text-gray-800">{car?.mileage}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex items-center justify-between mt-4">

                                    <a href="#" className="text-white bg-black hover:bg-gray-600 font-medium  text-sm px-6 py-2.5 text-center  w-36">Cash Purchase</a>
                                    <a href="#" className="text-white bg-green-500 hover:bg-green-600 font-medium  text-sm px-6 py-2.5 text-center  w-32">Swap</a>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default PricingCard;
