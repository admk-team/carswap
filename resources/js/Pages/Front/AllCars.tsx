import React, { useEffect, useState } from 'react'
import NavBar2 from '@/Components/Navbar/NabBar2'
import Footer from '../Footer/Footer';
import Cover from "@/Assets/revo-img.png";
import Transfer from "@/Assets/transfer.png"
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'flowbite-react';
import PricingCard from '@/Components/Cards/PricingCard';

export default function AllCars({ brands, cars,auth }:any) {
    const [showModal, setShowModal] = useState(false);
    const [compare, setCompare]:any = useState([])
    const [total, setTotal]:any = useState(0)
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');

    const { data, setData, errors, get } = useForm({
        searchTerm: '',
        min: '0',
        model: '0',
        max: '0',
        minMileage:'0',
        maxMileage:'0',
        brand: ''
    })

    const handlePrice = (value:any) => {
        let newMin = '';
        let newMax = '';
        if (value === 'option1') {
            newMin = '0';
            newMax = '3000000';
        }
        if (value === 'option2') {
            newMin = '3000000';
            newMax = '6000000';
        }
        if (value === 'option3') {
            newMin = '6000000';
            newMax = '10000000';
        }
        if (value === 'option4') {
            newMin = '10000000';
            newMax = '15000000';
        }
        if (value === 'option5') {
            newMin = '15000000';
            newMax = '0';
        }
        setData({ ...data, min: newMin, max: newMax });
    };
    const handleMileage = (value:any) => {
        let newMinMileage = '';
        let newMaxMileage = '';
        if (value === 'mileage1') {
            newMinMileage = '0';
            newMaxMileage = '30000';
        }
        if (value === 'mileage2') {
            newMinMileage = '30000';
            newMaxMileage = '60000';
        }
        if (value === 'mileage3') {
            newMinMileage = '60000';
            newMaxMileage = '100000';
        }
        if (value === 'mileage4') {
            newMinMileage = '100000';
            newMaxMileage = '150000';
        }
        if (value === 'mileage5') {
            newMinMileage = '150000';
            newMaxMileage = '0';
        }
        setData({ ...data, minMileage: newMinMileage, maxMileage: newMaxMileage });
    };
    const handleSetCar = (id=0)=>{
        let car = cars.find((item:any) => (item.id === id))
        setCompare(car);
        setShowModal(true);
    }
    useEffect(() => {
        setTotal(cars.length);
    }, [cars]);
    const handleSearch = () => {
        get(route('search'));
    }
    const handleSetHeart = (id = 0) => {
        
        fetch('user/wishlist/' + id).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
        });
    };
    return (
        <div>
            <Head title='Nigeria’s No 1. Carswap place. Buy. Sell. Swap'/>
            <NavBar2 auth={auth} />
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="bg-gray-200 p-4">
                    <p className="font-black text-gray-950 text-3xl">Cars Up for Sale</p>
                    <form>
                        <div className="flex flex-col mt-2">
                            <div className="relative w-full max-w-xl shadow-md">
                                <input
                                    type="text"
                                    placeholder="Search For car by Model, brand"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name='search' value={data.searchTerm} onChange={(e) => setData('searchTerm',e.target.value)}
                                />
                                <button className="absolute top-0 right-0 h-full bg-green-500 text-white px-4 rounded-md focus:outline-none" onClick={() => handleSearch()} type="button">
                                    Search
                                </button>
                            </div>

                            <div className="flex flex-wrap mt-2 gap-2">

                                <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md" onChange={(e) => handlePrice(e.target.value)}>
                                    <option value="">Price</option>
                                    <option value="option1">Under 3M</option>
                                    <option value="option2">3M-6M</option>
                                    <option value="option3">6M-10M</option>
                                    <option value="option4">10M-15M</option>
                                    <option value="option5">Above 15M</option>
                                </select>

                                <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md" onChange={(e) => setData('brand',e.target.value)}>
                                    <option value="">Brand</option>
                                    {brands.map((option: any) => (
                                        <option key={option.id} value={option.id}>
                                            {option.title}
                                        </option>
                                    ))}

                                </select>
                                <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md" onChange={(e) => setData('model',e.target.value)}>
                                    <option value="">Model</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                    <option value="2005">2005</option>
                                </select>
                                <select className="w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md" onChange={(e) => handleMileage(e.target.value)}>
                                    <option value="">Mileage</option>
                                    <option value="mileage1">0-30,000 KM</option>
                                    <option value="mileage2">30,000-60,000 KM</option>
                                    <option value="mileage3">60,000-120,000 KM</option>
                                    <option value="mileage4">120,000-150,000 KM</option>
                                    <option value="mileage5">Above 150,000 KM</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div>
                        <p className="font-black text-gray-950 text-2xl mt-3">All Results({total?total:0})</p>
                        <div className="flex justify-center">
                            <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">

                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <div className="flex justify-center">
                            <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6">
                                {cars?.map((car: any, index: any) => (

                                    <div key={index} className="w-full bg-white border border-gray-200 shadow-2xl rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                        <div className="relative">
                                            <Link href={route('CarDetail', car.slug)}>
                                                <img className=" w-full h-72 rounded-t-lg object-cover" src={"/storage" + car?.images[0]} alt="product image" />
                                            </Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500 absolute top-2 right-2" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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
                                            <Link href={route('CarDetail', car.slug)}>
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

                                                <p className="text-white bg-black hover:bg-gray-600 font-medium  text-sm px-6 py-2.5 text-center  w-36 cursor-pointer" >Purchase</p>
                                                <Button href="#" className="text-white bg-green-500 hover:bg-green-600 font-medium  text-sm px-6  text-center  w-32" onClick={() => handleSetCar(car.id)}>Swap</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        <div>
                        <PricingCard cars={cars}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer auth={auth}/>
        </div>

    )
}
