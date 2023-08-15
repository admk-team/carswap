import React, { useState, useEffect } from 'react';
import Cover from "@/Assets/revo-img.png";
import Transfer from "@/Assets/transfer.png"
import { Link, useForm } from '@inertiajs/react';
import Conditon from "@/Assets/car-settings.png";
import Engine from "@/Assets/car-engine.png";



const PricingCard = ({ brands, cars, auth }: any) => {

    const [showModal, setShowModal] = useState(false);
    const [inspectionModal, setInspectionModal] = useState(false);
    const [compare, setCompare]: any = useState([])
    const [total, setTotal]: any = useState(0)
    const [isTapped, setIsTapped] = useState(false);
    const [selectedCarId, setSelectedCarId] = useState(0);
    const { data, setData, errors, get } = useForm();

    const handleSetCar = (id = 0) => {
        let car = cars?.find((item: any) => (item.id === id))
        setCompare(car);
        setShowModal(true);
        setSelectedCarId(id);
    }

    const handleSetBook = (id = 0) => {
        let car = cars?.find((item: any) => (item.id === id))
        setInspectionModal(true);
        setShowModal(false);


    }
    const handleSetHeart = (id = 0) => {
        if (selectedCarId === id) {
            setSelectedCarId(0);
        } else {
            setSelectedCarId(id);
        }
        get(route('user.add.wishlist', id))
    };

    useEffect(() => {
        setTotal(cars?.length);
    }, [cars]);

    function formatNumberWithCommas(number: any) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div className="mx-auto max-w-screen-xl w-full h-full mt-8 ">
            <div className="flex">
                <div className="lg:container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-6 p-4  ">
                    {cars?.map((car: any, index: any) => (
                        <div
                            key={index}
                            className="w-full bg-white border border-gray-200 shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <Link href={route('CarDetail', car.slug)}>
                                    <img
                                        className="w-full h-[150px] rounded-t-lg object-cover "
                                        src={"/storage" + car?.images[0]}
                                        alt="product image"
                                    />

                                </Link>
                                <div className='absolute top-2 right-2 bg-emerald-600 rounded p-1 shadow-2xl'>
                                    <p className='font-semibold text-white'>{car?.type}</p>
                                </div>
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-7 h-7 ${selectedCarId === car.id || car.is_fav == true ? 'text-red-500' : 'text-gray-500'
                                        } absolute top-2 right-2`}
                                    fill={selectedCarId === car.id || car.is_fav == true ? 'red' : 'white'}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={() => handleSetHeart(car.id)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg> */}
                                <div className="absolute bottom-5 left-1">
                                    {/* <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    ></svg> */}
                                    {
                                        car.total_rating > 0 &&
                                        <>
                                            <span className="flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#FFA534"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={0}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>
                                                <p className="text-sm">{car.total_rating ? car.total_rating : '0'}</p>
                                            </span>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="px-3 pb-4">
                                <Link href={route('CarDetail', car.slug)} className=''>
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2 h-[36px] overflow-hidden">
                                        {car?.title}
                                    </h5>
                                </Link>
                                <h5 className="text-2xl font-bold dark:text-white text-emerald-500 mt-1">
                                    Price: ₦ {formatNumberWithCommas(car.price)}
                                </h5>
                                <div className="flex items-center"></div>
                                <hr className="border-t-2 border-black mt-2" />
                                <div className="mt-4">
                                    <div className='flex flex-wrap justify-between mt-3'>
                                        <div className='flex mb-1'>
                                            <img src={car?.brand?.image?"/storage/" + car?.brand?.image:''} className='w-6 h-6' />
                                            <p className='mx-2 '>Car Brand : {car?.brand?.title}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap justify-between mt-3'>
                                        <div className='flex mb-1'>
                                            <img src={Engine} className='w-6 h-6' />
                                            <p className='mx-2 '>Model : {car?.model}</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-wrap justify-between mt-3'>
                                        <div className='flex mb-1'>
                                            <img src={Conditon} className='w-6 h-6' />
                                            <p className='mx-2 '>Conditon : {car?.condition}</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-wrap justify-between'>
                                        <div className='flex mb-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <p className='mx-2 '>Location : {car?.location}</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-wrap justify-between mt-3'>
                                        <div className='flex mb-1'>
                                            <img src={Conditon} className='w-6 h-6' />
                                            <p className='mx-2 '>Mileage : {car?.mileage}</p>
                                        </div>
                                    </div>
                                    {/* <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="px-2 py-1 font-bold-300 text-gray-600">
                                                    Condition
                                                </th>
                                                <th className="px-3 py-1 text-gray-800">Engine</th>
                                                <th className="px-3 py-1 text-gray-800">Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className="px-2 py-1 text-gray-600">
                                                    {car?.condition}
                                                </th>
                                                <th className="px-3 py-1 text-gray-800">
                                                    {car.engine_capacity}
                                                </th>
                                                <th className="px-3 py-1 text-gray-800">
                                                    {car?.mileage}
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                </div>

                                {/* <div className="flex items-center justify-between mt-4">
                                    <p className="text-white bg-black hover:bg-gray-600 font-medium text-sm px-6 py-2.5 text-center w-34 cursor-pointer">
                                        Purchase
                                    </p>
                                    <button
                                        className="text-white bg-green-500 hover:bg-green-600 font-medium px-8 py-2.5 text-sm w-34 text-center"
                                        onClick={() => handleSetCar(car.id)}
                                    >
                                        Swap
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-50 my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-between items-center pt-4 px-4">
                                    <h3 className="text-2xl font-semibold text-gray-950">Swap Car</h3>
                                    <button
                                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/*body*/}
                                <hr className="mt-2 border-t-2 border-solid border-emerald-500  mx-3 my-3" />
                                <div className="relative p-4 flex">
                                    <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-6">
                                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                            <p className='text-gray-950 mt-2 text-2xl font-bold mb-2'>Your Car</p>
                                            <img src={"/storage" + compare.images[0]} className="w-full h-4/5 object-contain"></img>
                                            <p className='font-semibold text-gray-950 mt-2 text-2xl '>Price</p>
                                            <p className='text-emerald-500'>$ {compare.price}</p>
                                        </div>
                                        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
                                            <img src={Transfer} className="w-full h-20 object-contain"></img>
                                        </div>
                                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                            <p className='text-gray-950 mt-2 text-2xl font-bold mb-2'>My Car</p>
                                            <img src={Cover} className="w-full h-4/5 object-contain"></img>
                                            <p className='font-semibold text-gray-950 mt-2 text-2xl '>Price</p>
                                            <p className='text-emerald-500 mb-2 mt-2'>$ 43496.10</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='p-4 mt-3'>
                                    <p className='text-gray-950 text-2xl font-bold mb-2'>Difference</p>
                                    <p className='text-emerald-500'>$ 32,360.81</p>
                                    <p className='font-semibold'>You have to Pay <span className="text-emerald-500">$ 32,360.81</span> to make this Deal happen.</p>
                                </div>
                                <hr className="mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3" />
                                {/*footer*/}
                                <div className="flex flex-col items-center justify-center p-6">
                                    <div className="flex flex-col space-y-2">

                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleSetBook(compare.id)}
                                        >
                                            Book Inspection
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {inspectionModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-50 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-between items-center pt-4 px-4">
                                    <h3 className="text-2xl font-semibold text-gray-950" >Book Inspection</h3>
                                    <button
                                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={() => setInspectionModal(false)}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/*body*/}
                                <hr className="mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3" />
                                <div className="relative p-4 flex flex-col gap-5 items-center">
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <p className="text-bold text-1xl text-gray-950">Date :</p>
                                        <input
                                            type="date"
                                            className="border border-gray-300 p-2 rounded w-60 "
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <p className="text-bold text-1xl text-gray-950">Time :</p>
                                        <input
                                            type="time"
                                            className="border border-gray-300 p-2 rounded  w-60"
                                        />
                                    </div>
                                </div>
                                <hr className="mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3" />

                                {/*footer*/}
                                <div className="flex flex-col items-center justify-center p-6">
                                    <div className="flex flex-col space-y-2">
                                        <button
                                            className="bg-gray-950 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Book Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </div>
    );
};

export default PricingCard;
