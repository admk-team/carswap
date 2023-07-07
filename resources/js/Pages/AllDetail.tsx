import React from 'react'
import NavBar2 from '@/Components/Navbar/NabBar2'
import backgroundImage from '@/Assets/card1.jpg';
import logo1 from '@/Assets/alfa.png'
import logo2 from '@/Assets/audi-logo-2.png'
import logo3 from '@/Assets/mercedes.png'
import logo4 from '@/Assets/honda-logo.png'
import logo5 from '@/Assets/tesla_logo_PNG19.png'
import logo6 from '@/Assets/toyota-logo.png'
import logo7 from '@/Assets/bmw.png'
import Footer from './Footer/Footer';


export default function AllDetail() {
    return (
        <div>
            <NavBar2 />
            <div className="bg-gray-200 p-4">
                <p className="font-black text-gray-950 text-3xl">Cars Up for Sale</p>
                <div className="flex flex-col mt-2">
                    <div className="relative w-full max-w-xl shadow-md">
                        <input
                            type="text"
                            placeholder="Search For car by Model, brand"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute top-0 right-0 h-full bg-green-500 text-white px-4 rounded-md focus:outline-none">
                            Search
                        </button>
                    </div>

                    <div className="flex flex-wrap mt-2 gap-2">
                        <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md">
                            <option value="">Price</option>
                            <option value="option1">Under 3M</option>
                            <option value="option2">3M-6M</option>
                            <option value="option2">6M-10M</option>
                            <option value="option2">10M-15M</option>
                            <option value="option2">Above 15M</option>
                        </select>

                        <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md">
                            <option value="">Brand</option>
                            <option value="option1">BMW</option>
                            <option value="option2">Honda</option>
                            <option value="option2">Corolla</option>
                        </select>
                        <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md">
                            <option value="">Mileage</option>
                            <option value="option1">2019-2023</option>
                            <option value="option2">2014-2018</option>
                            <option value="option2">2009-2013</option>
                            <option value="option2">2004-2008</option>
                            <option value="option2">Below 2004</option>
                        </select>
                        <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md">
                            <option value="">Engine</option>
                            <option value="option1">0-30,000 KM</option>
                            <option value="option2">30,000-60,000 KM</option>
                            <option value="option2">60,000-120,000 KM</option>
                            <option value="option2">120,000-150,000 KM</option>
                            <option value="option2">Above 150,000 KM</option>
                        </select>
                    </div>
                </div>

                <div>
                    <p className="font-black text-gray-950 text-2xl mt-3">All Results(20)</p>
                    <div className="flex justify-center">
                        <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="w-full bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative">
                                        <a href="#">
                                            <img className=" w-full rounded-t-lg object-cover" src={backgroundImage} alt="product image" />
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <div className="absolute bottom-5 left-1">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                {/* SVG path */}

                                            </svg>
                                            {/* Repeat for other stars */}

                                            <span className=" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA534" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <p className='text-sm'>4.2</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-4">
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">2022 Toyota Revo</h5>

                                        <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-1">$ 43496.10</h5>
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
                                                        <th className="px-2 py-1 text-gray-600">Brand New</th>
                                                        <th className="px-2 py-1 text-gray-800">3000 CC</th>
                                                        <th className="px-2 py-1 text-gray-800">35000 (MI)</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="flex flex-col items-center mt-4 md:flex-row md:justify-between md:items-center">
                                            <a href="#" className="text-white bg-gray-950 hover:bg-emerald-800 focus:outline-none font-medium text-sm px-6 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Cash Purchase
                                            </a>
                                            <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:outline-none font-medium text-sm px-6 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Swap
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg text-gray-950 font-bold mb-4 text-center">Filter By</h2>
                            <div className="flex flex-wrap justify-center gap-2">
                                <button className="hover:bg-emerald-600  text-black py-2 px-4 rounded-md focus:outline-none shadow-md">
                                    Under 3M
                                </button>

                                <button className="hover:bg-emerald-600 text-black py-2 px-4 rounded-md focus:outline-none shadow-md">
                                    3M-6M
                                </button>
                                <button className=" hover:bg-emerald-600 text-black py-2 px-4 rounded-md focus:outline-none shadow-md">
                                    6M-10M
                                </button>
                                <button className=" hover:bg-emerald-600 text-black py-2 px-4 rounded-md focus:outline-none shadow-md">
                                    10M-15M
                                </button>
                                <button className=" hover:bg-emerald-600 text-black py-2 px-4 rounded-md focus:outline-none shadow-md">
                                    Above 15M
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="w-full bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative">
                                        <a href="#">
                                            <img className=" w-full rounded-t-lg object-cover" src={backgroundImage} alt="product image" />
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <div className="absolute bottom-5 left-1">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                {/* SVG path */}

                                            </svg>
                                            {/* Repeat for other stars */}

                                            <span className=" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA534" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <p className='text-sm'>4.2</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-4">
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">2022 Toyota Revo</h5>

                                        <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-1">$ 43496.10</h5>
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
                                                        <th className="px-2 py-1 text-gray-600">Brand New</th>
                                                        <th className="px-2 py-1 text-gray-800">3000 CC</th>
                                                        <th className="px-2 py-1 text-gray-800">35000 (MI)</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="flex flex-col items-center mt-4 md:flex-row md:justify-between md:items-center">
                                            <a href="#" className="text-white bg-gray-950 hover:bg-emerald-800 focus:outline-none font-medium text-sm px-6 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Cash Purchase
                                            </a>
                                            <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:outline-none font-medium text-sm px-6 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Swap
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg text-gray-950 font-bold mb-4 text-center">Filter By</h2>
                            <div className="flex flex-wrap justify-center items-center gap-2">
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo1} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo2} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo3} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo4} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo5} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo6} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                                <a href="#" className="w-24  object-contain">
                                    <img src={logo7} alt="Car Logo" className="hover:opacity-80 transition-opacity duration-300 w-full h-auto object-contain" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="w-full bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="relative">
                                        <a href="#">
                                            <img className=" w-full rounded-t-lg object-cover" src={backgroundImage} alt="product image" />
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <div className="absolute bottom-5 left-1">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                {/* SVG path */}

                                            </svg>
                                            {/* Repeat for other stars */}

                                            <span className=" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA534" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <p className='text-sm'>4.2</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-4">
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">2022 Toyota Revo</h5>

                                        <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-1">$ 43496.10</h5>
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
                                                        <th className="px-2 py-1 text-gray-600">Brand New</th>
                                                        <th className="px-2 py-1 text-gray-800">3000 CC</th>
                                                        <th className="px-2 py-1 text-gray-800">35000 (MI)</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="flex flex-col items-center mt-4 md:flex-row md:justify-between md:items-center">
                                            <a href="#" className="text-white bg-gray-950 hover:bg-emerald-800 focus:outline-none font-medium text-sm py-2.5 px-4 md:px-6 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Cash Purchase
                                            </a>
                                            <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-800 focus:outline-none font-medium text-sm py-2.5 px-4 md:px-6 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-green-800 inline-block rounded-md shadow-md md:w-auto">
                                                Swap
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    )
}
