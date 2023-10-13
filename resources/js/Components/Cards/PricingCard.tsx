import React, { useState, useEffect } from "react";
import Cover from "@/Assets/revo-img.png";
import Transfer from "@/Assets/transfer.png";
import { Link, useForm } from "@inertiajs/react";
import Conditon from "@/Assets/car-settings.png";
import Engine from "@/Assets/car-engine.png";

const PricingCard = ({ brands, cars, auth }: any) => {
   
    const [showModal, setShowModal] = useState(false);
    const [inspectionModal, setInspectionModal] = useState(false);
    const [compare, setCompare]: any = useState([]);
    const [total, setTotal]: any = useState(0);
    const [isTapped, setIsTapped] = useState(false);
    const [selectedCarId, setSelectedCarId] = useState(0);
    const { data, setData, errors, get } = useForm();

    const handleSetCar = (id = 0) => {
        let car = cars?.find((item: any) => item.id === id);
        setCompare(car);
        setShowModal(true);
        setSelectedCarId(id);
    };

    const handleSetBook = (id = 0) => {
        let car = cars?.find((item: any) => item.id === id);
        setInspectionModal(true);
        setShowModal(false);
    };
    const handleSetHeart = (id = 0) => {
        if (selectedCarId === id) {
            setSelectedCarId(0);
        } else {
            setSelectedCarId(id);
        }
        get(route("user.add.wishlist", id));
    };

    useEffect(() => {
        setTotal(cars?.length);
    }, [cars]);

    function formatNumberWithCommas(number: any) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="mx-auto max-w-screen-xl w-full h-full mt-3 ">
            <div className="flex">
                <div className="lg:container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-4  p-4">
                    {cars?.map((car: any, index: any) => (
                        <div
                            key={index}
                            className="lg:w-[250px] xl:w-[275px] md:w-[220px] sm:w-[200px] bg-white border border-gray-200 shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 md:me-[2px] sm:mt-2"
                        >
                            <div className="">
                                <>

                                    <Link href={route('CarDetail', car.slug)}>
                                        <div className='pt-2 pb-2 bg-emerald-600 rounded-tl-md rounded-tr-md p-1 shadow-2xl cursor-pointer responsive responsive1 swap__car'>
                                            <p className='font-semibold text-black text-white flex gap-2 items-center justify-center align-center responsive responsive1'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                                    </svg>
                                                </span>
                                                <span>Swap Calculator</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </span>
                                            </p>
                                        </div>
                                    </Link>

                                </>

                                <Link href={route("CarDetail", car.slug)}>
                                    <img
                                        className="w-full h-[144px]  object-cover image__responsive"
                                        src={"/storage" + car?.images[0]}
                                        alt="product image"
                                    />
                                </Link>

                                <div className="absolute bottom-5 left-1">
                                    {car.total_rating > 0 && (
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
                                                <p className="text-sm">
                                                    {car.total_rating
                                                        ? car.total_rating
                                                        : "0"}
                                                </p>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="px-3 pb-4">
                                <h5 className="text-xl font-bold dark:text-white text-emerald-500  responsive">
                                    Price: ₦ {formatNumberWithCommas(car.price)}
                                </h5>
                                <Link
                                    href={route("CarDetail", car.slug)}
                                    className=""
                                >
                                    {/* <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white  h-[34px] overflow-hidden responsive">
                                        <span className='my-2 '>{car?.model}</span>
                                        <span className='mx-2 '>{car?.brand?.title}</span>
                                        {car?.title}

                                    </h5> */}
                                </Link>
                                <div className="mt-2">
                                    <div className="flex mb-2 flex-wrap justify-between">
                                        <div className="flex"> Spec: {car?.feature && (car.feature.length > 25 ? car.feature.slice(0, 25) + '...' : car.feature)}</div>

                                        {/* <div className="flex mb-2 flex-wrap justify-between">
                                            <div className="flex"> <span className="mr-2">Spec: </span> 
                                                {car?.feature
                                                    .split(" ")
                                                    .slice(0, 2)
                                                    .join(" ")}
                                                {car?.feature.split(" ")
                                                    .length > 2 && (
                                                    <p className="mx-1 text-dark responsive responsive1">
                                                        ...
                                                    </p>
                                                )}
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex mb-2 flex-wrap justify-between">
                                            <div className="flex bg-emerald-500">
                                                <p className="mx-2 text-white responsive responsive1">
                                                    {car?.cylinder}{" "}
                                                    <span className="ml-1 responsive">
                                                        - Cylinder
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className=' mr-2'>
                                            <p >Year : {car?.year}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap justify-between mt-1 condition__wrap'>
                                        <div className='flex mb-1 flex-wrap justify-between'>
                                            <div className='flex'>
                                                <img src={car?.brand?.image ? "/storage/" + car?.brand?.image : ''} className='w-5 h-5' />
                                                <p className='mx-1 responsive text-sm'>{car?.brand?.title}<span className='my-1 ml-1'>{car?.title}</span></p>

                                            </div>
                                        </div>
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                />
                                            </svg>
                                            <p className="mx-1 responsive  text-sm ">
                                                {car?.location}
                                            </p>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className='flex flex-wrap justify-between'>
                                        
                                    </div> */}
                                    <div className='flex flex-wrap justify-between mt-1 condition__wrap'>
                                        <div className='flex mb-1  rounded-[4px]'>
                                            <p className='mx-2  text-xs text-gray-600 responsive'>Conditon : {car?.condition}</p>
                                        </div>
                                        <div className='flex mb-1 bg-gray-100 rounded-[4px]'>
                                            <p className='mx-2  text-xs text-gray-600 responsive'>{car?.mileage} miles</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-between mt-1 condition__wrap">
                                        <div className="flex  rounded-[4px]">
                                            <Link
                                                href={route(
                                                    "CarDetail",
                                                    car.slug
                                                )}
                                            >
                                                <p className="mx-4  text-gray-900 font-bold cursor-pointer condition__wrap1">
                                                    Swap
                                                </p>
                                            </Link>
                                        </div>
                                        <div className='flex   rounded-[4px]'>
                                            <Link href={route('CarDetail', car.slug)}>
                                                <p className='mx-4  text-emerald-600 font-bold cursor-pointer condition__wrap1'>Buy Cash </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-50 my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex justify-between items-center pt-4 px-4">
                                    <h3 className="text-2xl font-semibold text-gray-950">
                                        Swap Car
                                    </h3>
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
                                            <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                Your Car
                                            </p>
                                            <img
                                                src={
                                                    "/storage" +
                                                    compare.images[0]
                                                }
                                                className="w-full h-4/5 object-contain"
                                            ></img>
                                            <p className="font-semibold text-gray-950 mt-2 text-2xl ">
                                                Price
                                            </p>
                                            <p className="text-emerald-500">
                                                $ {compare.price}
                                            </p>
                                        </div>
                                        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
                                            <img
                                                src={Transfer}
                                                className="w-full h-20 object-contain"
                                            ></img>
                                        </div>
                                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                            <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                My Car
                                            </p>
                                            <img
                                                src={Cover}
                                                className="w-full h-4/5 object-contain"
                                            ></img>
                                            <p className="font-semibold text-gray-950 mt-2 text-2xl ">
                                                Price
                                            </p>
                                            <p className="text-emerald-500 mb-2 mt-2">
                                                $ 43496.10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 mt-3">
                                    <p className="text-gray-950 text-2xl font-bold mb-2">
                                        Difference
                                    </p>
                                    <p className="text-emerald-500">
                                        $ 32,360.81
                                    </p>
                                    <p className="font-semibold">
                                        You have to Pay{" "}
                                        <span className="text-emerald-500">
                                            $ 32,360.81
                                        </span>{" "}
                                        to make this Deal happen.
                                    </p>
                                </div>
                                <hr className="mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3" />
                                {/*footer*/}
                                <div className="flex flex-col items-center justify-center p-6">
                                    <div className="flex flex-col space-y-2">
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() =>
                                                handleSetBook(compare.id)
                                            }
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
                                    <h3 className="text-2xl font-semibold text-gray-950">
                                        Book Inspection
                                    </h3>
                                    <button
                                        className="text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={() =>
                                            setInspectionModal(false)
                                        }
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
                                        <p className="text-bold text-1xl text-gray-950">
                                            Date :
                                        </p>
                                        <input
                                            type="date"
                                            className="border border-gray-300 p-2 rounded w-60 "
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <p className="text-bold text-1xl text-gray-950">
                                            Time :
                                        </p>
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
