import React from 'react';
import backgroundImage from '@/Assets/card1.jpg'; // Replace with the actual filename and extension of your image

const PricingCard = () => {
    return (
        <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({ length: 12 }).map((_, index) => (
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
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                    </div>
                    <div className="px-5 pb-5">

                        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">2022 Toyota Revo</h5>

                        <h5 className="text-2xl font-bold dark:text-white text-amber-500">$ 43496.10</h5>
                        <div className="flex items-center">
                            <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" className="w-5 h-5 mr-2">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg></span>
                            <span className="text-xl font-bold text-gray-600"><u>California, USA</u></span>
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
                            <a href="#" className="text-white bg-amber-600 hover:bg-amber-800 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32">Swap</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingCard;
