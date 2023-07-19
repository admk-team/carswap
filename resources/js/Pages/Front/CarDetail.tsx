import { usePage, useForm } from '@inertiajs/react';
import NavBar2 from '@/Components/Navbar/NabBar2';
import TimeClock from "@/Assets/timeclock.png";
import PriceTag from "@/Assets/pricetag.png";
import Location from "@/Assets/geo-location.png";
import Share from "@/Assets/send.png";
import Engine from "@/Assets/car-engine.png";
import Drive from "@/Assets/steering-wheel.png";
import Color from "@/Assets/car-painting.png";
import Mileage from "@/Assets/speed-test.png";
import Gear from "@/Assets/gear-stick.png";
import Fuel from "@/Assets/gas-station.png";
import Color1 from "@/Assets/car-color.png";
import Footer from '../Footer/Footer';
import { Head, Link } from '@inertiajs/react';
import Star from '@/Components/Rating/Star';
import Cover from "@/Assets/revo-img.png";
import Transfer from "@/Assets/transfer.png"
import React, { useState, useEffect } from "react";
import Test from '../Test';

export default function CarDetail({ car, auth, similarCars, success, error }: any) {
    const { errors } = usePage().props
    const [checkReview, setCheckReview] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (success) {
            setSuccessMessage(success);
        }
        if (error) {
            setErrorMessage(error);
        }
    }, []);

    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [IsEditMode, setIsEditMode] = useState(true);
    const { data, setData, post, processing, } = useForm({
        star: '',
        car_id: car.id || '',
        user_id: auth.user.id || '',
        message: '',

    });
    const baseUrl = window.location.origin;

    const handleRatingChange = (event: any) => {
        setRating(Number(event.target.value));
    };

    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        post(route('user.ratings.store'))
        setIsEditMode(false);
    };

    const handleEdit = () => {
        setIsEditMode(true);
    };


    const formattedDate = new Date(car.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const [yourCarPrice, setYourCarPrice] = useState('');
    const [priceDifference, setPriceDifference] = useState(0);
    const carPrice = car?.price || 0;

    const calculatePriceDifference = () => {
        const enteredPrice = parseInt(yourCarPrice);
        const difference = enteredPrice - carPrice;
        setPriceDifference(difference);
    };
    return (
        <div>
            <Head title={car.title} />
            <div>
                <NavBar2 auth={auth} />
            </div>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="bg-gray-200 p-4">
                    <div className="flex">
                        <div className="bg-emerald-500 text-white py-2 px-4 mr-2">{car.condition}</div>
                    </div>
                    <div className="flex mt-3">
                        <div className="text-black font-bold  text-6xl">{car.title}</div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex items-center">
                            <img src={TimeClock} className="w-6 h-6" />
                            <p className="mx-2">Listed on: {formattedDate}</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="relative">
                                <img src={PriceTag} alt="PriceTag" />
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white self-center mx-3 pb-3 font-bold">
                                    $ {car.price}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex items-center">
                            <img src={Location} className="w-6 h-6" />
                            <p className="mx-2">{car.location}</p>
                        </div>
                        <div className="flex items-center mr-10" >
                            <img src={Share} className="w-6 h-6" />
                            <p className="ml-2 underline hover:text-blue-500 cursor-pointer">Share Now</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex flex-col">
                                <img src={'/storage/' + car.images[0]} className="w-full h-5/6 object-cover" alt="Cover Image" />
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {
                                        car.images.map((image: any, index: any) => (
                                            <img key={index} src={'/storage/' + image} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6" />
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex flex-col mx-3 h-5/6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    {
                                        car.type && car.type == 'swap' ?
                                            <>
                                                <h2 className="text-lg font-bold mb-4 text-center text-emerald-900">Swap Buy Calculator</h2>
                                                <hr className='mb-4' />
                                                <div className='flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow'>
                                                    <p className='font-bold'>Car Price</p>
                                                    <p>$ {car?.price}</p>
                                                </div>
                                                <div className='flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5'>
                                                    <p className='font-bold mt-1'>Your Car Price</p>
                                                    <input
                                                        type='text'
                                                        className='w-48 border-gray-300 rounded px-2 py-1'
                                                        placeholder='Enter price'
                                                        value={yourCarPrice}
                                                        onChange={(e) => setYourCarPrice(e.target.value)}
                                                    />
                                                </div>
                                                <div className='flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5'>
                                                    <p className='font-bold mt-1'>Price Difference</p>
                                                    <p>$ {priceDifference}</p>
                                                </div>
                                                <button
                                                    className='bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3'
                                                    onClick={calculatePriceDifference}
                                                >
                                                    Calculate
                                                </button>
                                                <div className="flex justify-center items-center mt-3">
                                                    <hr className="w-3/6 sm:w-1/6 border-0 border-t-2 border-black" />
                                                    <p className="font-bold text-2xl uppercase mx-4">or</p>
                                                    <hr className="w-3/6 sm:w-1/6 border-0 border-t-2 border-black" />
                                                </div>
                                            </>
                                            :
                                            auth && auth.user ?
                                                <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
                                                    <input type="hidden" name="public_key" value="FLWPUBK_TEST-5362dd26662af2fa2bb22c99f29ab2c3-X" />
                                                    <input type="hidden" name="customer[email]" value={auth.user.email} />
                                                    <input type="hidden" name="customer[name]" value={auth.user.first_name} />
                                                    <input type="hidden" name="tx_ref" value="bitethtx-019203" />
                                                    <input type="hidden" name="amount" value="1000" />
                                                    <input type="hidden" name="currency" value="NGN" />
                                                    <input type="hidden" name="meta[token]" value="54" />
                                                    <input type="hidden" name="redirect_url" value={baseUrl + '/payment/callback'} />
                                                    <button type='submit' className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3' > Buy Now </button>
                                                </form>
                                                :
                                                <Link href={route('user.login')} className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3' > Buy Now </Link>

                                    }
                                </div>
                                {
                                    car.type && car.type == 'swap' ?

                                        <div className="bg-white rounded-lg shadow-md p-6 mt-3">
                                            <h2 className="text-lg font-bold mb-4 text-center text-emerald-900">Swapping</h2>
                                            <hr />
                                            <div className="relative p-4 flex">
                                                <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
                                                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                        <p className='text-gray-950 mt-2 text-2xl font-bold mb-2'>Your Car</p>
                                                        <img src={"/storage" + car.images[0]} className="w-full h-4/5 object-contain"></img>
                                                    </div>
                                                    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
                                                        <img src={Transfer} className="w-full h-20 object-contain"></img>
                                                    </div>
                                                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                        <p className='text-gray-950 mt-2 text-2xl font-bold mb-2'>My Car</p>
                                                        <img src={Cover} className="w-full h-4/5 object-contain"></img>
                                                    </div>
                                                </div>

                                            </div>
                                            <button
                                                className='bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3'
                                            >
                                                Swap Now
                                            </button>
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                    </div>


                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-2xl">Key Features:</h3>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            {/* <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Body} className="w-6 h-6" />
                                    <p>Body Type</p>
                                </div>
                                <div>
                                    <p>Truck</p>
                                </div>
                            </div> */}
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Engine} className="w-6 h-6" />
                                    <p>Engine Size</p>
                                </div>
                                <div>
                                    <p>{car.engine_capacity} CC</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Drive} className="w-6 h-6" />
                                    <p>Drive</p>
                                </div>
                                <div>
                                    <p>{car.drive} KM</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Color} className="w-6 h-6" />
                                    <p>Interior Color</p>
                                </div>
                                <div>
                                    <p>{car.interior_color}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Mileage} className="w-6 h-6" />
                                    <p>Mileage</p>
                                </div>
                                <div>
                                    <p>{car.mileage} (Mi)</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>

                                    <p>Year</p>
                                </div>
                                <div>
                                    <p>2022</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                    </svg>

                                    <p>Condition</p>
                                </div>
                                <div>
                                    <p>{car.condition}</p>
                                </div>
                            </div>
                            <hr />
                            {/* <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>Seller Type</p>
                                </div>
                                <div>
                                    <p>Dealer</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Gear} className="w-6 h-6" />
                                    <p>Transmission</p>
                                </div>
                                <div>
                                    <p>{car.transmission}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Fuel} className="w-6 h-6" />
                                    <p>Fuel Type</p>
                                </div>
                                <div>
                                    <p>{car.fuel_type}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <img src={Color1} className="w-6 h-6" />
                                    <p>Exterior Color</p>
                                </div>
                                <div>
                                    <p>{car.exterior_color}</p>
                                </div>
                            </div>
                            <hr />
                            {/* <div className='flex justify-between bg-purple-50 p-4'>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>

                                    <p>No of Owners</p>
                                </div>
                                <div>
                                    <p>First Owner</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-2xl">Features:</h3>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>ABS</p>
                            </div>


                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>AM/FM Radio</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Immobilizer Key</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Rear Parking Sensor</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Air Bags</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Brake Assist</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Navigation System</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Steering Adjustment</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Air Condition</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Central Locking</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Power Steering</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Xenon Headlight</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Alloy Rims</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Cruise Control</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>Power Windows</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <h3 className="font-bold text-gray-900 text-2xl">Description:</h3>
                    <p>{car.description}</p>
                </div>
                {
                    car.rattings.map((review:any)=>(
                        review&&review.user?
                        auth&&auth.user&&auth.user.id==review.user_id?
                        <form className="row g-3" method='post'>
                            <div className='p-4'>
                                <h3 className="font-bold text-gray-900 text-2xl">Reviews:</h3>
                                <div className="bg-white border border-gray-300 p-4 rounded-lg mt-3 shadow-md">
                                    <>
                                        <h1 className='text-gray-950 font-extrabold text-lg'>What was your overall experience with our car swapping and purchasing service?</h1>


                                        <div className="flex mt-3">
                                            {/* <Star /> */}

                                            <div className="flex space-x-1">
                                                {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                                                    <label >
                                                        <input
                                                            key={star}
                                                            type="radio"
                                                            name="rating"
                                                            value={star}
                                                            onClick={handleRatingChange}
                                                            onChange={(e) => setData('star', e.target.value)}
                                                            checked={rating === star}
                                                            className="hidden"

                                                        />
                                                        {errors.star && <div className='text-danger'>{errors.star}</div>}
                                                        <svg className={`w-8 h-8 cursor-pointer ${star <= review.rating ? 'text-emerald-400' : 'text-gray-400'}`}
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>

                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                    <div className='mt-3'>
                                        <textarea id="message" name="message" rows={4} value={review.message} onChange={(e) => setData('message', e.target.value)}
                                            className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                        {errors.message && <div className='text-danger'>{errors.message}</div>}
                                        <button type="button" onClick={() => handleSubmit()} className='bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        :
                        
                        <form className="row g-3" method='post'>
                            <div className='p-4'>
                                <h3 className="font-bold text-gray-900 text-2xl">Reviews:</h3>
                                <div className="bg-white border border-gray-300 p-4 rounded-lg mt-3 shadow-md">
                                    {IsEditMode ? (
                                        <>
                                            <h1 className='text-gray-950 font-extrabold text-lg'>What was your overall experience with our car swapping and purchasing service?</h1>


                                            <div className="flex mt-3">
                                                {/* <Star /> */}

                                                <div className="flex space-x-1">
                                                    {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                                                        <label >
                                                            <input
                                                                key={star}
                                                                type="radio"
                                                                name="rating"
                                                                value={star}
                                                                onClick={handleRatingChange}
                                                                onChange={(e) => setData('star', e.target.value)}
                                                                checked={rating === star}
                                                                className="hidden"

                                                            />
                                                            {errors.star && <div className='text-danger'>{errors.star}</div>}
                                                            <svg className={`w-8 h-8 cursor-pointer ${star <= rating ? 'text-emerald-400' : 'text-gray-400'}`}
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20">
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>

                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                        </>

                                    ) : (
                                        <>
                                            <div className="mb-2">
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex space-x-1">
                                                        {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                                                            <svg
                                                                key={star}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className={`h-8 w-8 ${star <= rating ? 'text-emerald-500' : 'hidden'
                                                                    }`}
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                                stroke="currentColor"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <div className='flex cursor-pointer space-x-0.5'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                        <button onClick={handleEdit} className=" text-blue-500">
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                                <h3 className='mt-4 font-semibold text-lg'>{message}</h3>
                                            </div>
                                        </>
                                    )}
                                    <div className='mt-3'>
                                        <textarea id="message" name="message" rows={4} value={data.message} onChange={(e) => setData('message', e.target.value)}
                                            className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                        {errors.message && <div className='text-danger'>{errors.message}</div>}
                                        <button type="button" onClick={() => handleSubmit()} className='bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        :
                        'null'
                    ))
                }
                {
                    similarCars ?
                        <div className='p-4 '>
                            <h3 className="font-bold text-3xl text-green-600">Explore More:</h3>
                            <h3 className="font-bold text-gray-900 text-2xl mt-2">Similar Listings</h3>
                            <div className="flex justify-center">
                                <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
                                    {similarCars?.map((car: any, index: any) => (

                                        <div key={index} className="w-full bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        : ''}
            </div>
            <div>
                <Footer />
            </div>

        </div>


    )
}
