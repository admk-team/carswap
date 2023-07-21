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
import ShareModal from '@/Components/Modal/ShareModal';
import React, { useState, useEffect } from "react";
import Test from '../Test';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cover1 from '@/Assets/cover1.jpg'
import Cover2 from '@/Assets/cover2.jpg'
import { useFlutterwave } from 'flutterwave-react-v3';
import ReviewForm from '@/Components/Forms/ReviewForm';
import ReviewListing from '@/Components/Reviews/ReviewListing';
import { Inertia } from '@inertiajs/inertia';

export default function CarDetail({ car, auth, similarCars, success, error, user_rating }: any) {
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShareButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
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
    const cars = [Cover1, Cover2];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const config = {
        public_key: 'FLWPUBK_TEST-5362dd26662af2fa2bb22c99f29ab2c3-X',
        tx_ref: `${auth?.user?.id}-${Date.now().toString()}`,
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: auth?.user ? auth.user.email : '',
          phone_number: auth?.user ? auth.user.phone_no : '',
          name: auth?.user ? auth.user.first_name + ' ' + auth.user.last_name : '',
        },
        customizations: {
            title: 'Car Swap Payment',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);
    const [reviews, setReviews] = useState(car.ratings);
    const [limit, setLimit] = useState(3);
    const [expanded, setExpanded] = useState(false);

    const handleLoadMore = () => {
        setExpanded(true);
        setLimit(reviews.length);
      };

    const handleLoadLess = () => {
        setExpanded(false);
        setLimit(3);
    };
    const [paymentData,setPaymentData]=useState(null)
    useEffect(() => {
        if (paymentData !== null) {
          paymentResponse();
        }
      }, [paymentData]);

    const paymentResponse = () =>{
        if (paymentData !== null) {
            Inertia.post(route('user.storePayment'), { paymentData });
        }
    }
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
                            <p className="ml-2 underline hover:text-blue-500 cursor-pointer" onClick={handleShareButtonClick}>Share Now</p>
                            <ShareModal isOpen={isModalOpen} onClose={handleModalClose} />
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
                                            </>
                                            :
                                            auth && auth.user ?
                                                <button onClick={() => {
                                                    handleFlutterPayment({
                                                        callback: (response:any) => {
                                                            setPaymentData(response);
                                                            setTimeout(() => {
                                                                paymentResponse();
                                                            }, 3000);
                                                        },
                                                        onClose: () => {},
                                                    });
                                                }} className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3' > Buy Now </button>
                                                :
                                                <button className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3' >
                                                    <Link href={route('user.login')}> Buy Now </Link>
                                                </button>
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
                                                        <Slider {...settings}>
                                                            {cars.map((car, index) => (
                                                                <div key={index}>
                                                                    <img src={car} className="w-full h-4/5 object-contain" alt={`Car ${index + 1}`} />
                                                                </div>
                                                            ))}
                                                        </Slider>
                                                    </div>
                                                </div>

                                            </div>
                                            {
                                                auth?.user?
                                                <button onClick={() => {
                                                    handleFlutterPayment({
                                                        callback: (response) => {
                                                            console.log(response);
                                                        },
                                                        onClose: () => { },
                                                    });
                                                }} className='bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3'>Swap Now</button>
                                                :
                                                <button className='bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3'>
                                                    <Link href={route('user.login')}>Swap Now</Link>
                                                </button>
                                            }
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
                        </div>
                    </div>
                </div>

                <div className='p-4'>
                    <h3 className="font-bold text-gray-900 text-2xl">Description:</h3>
                    <p>{car.description}</p>
                </div>
                {
                    <>
                        {car.ratings && car.ratings.length > 0 ? (
                            <>
                                {
                                     auth && auth.user?
                                         <ReviewForm auth={auth} car={car} review={user_rating ? user_rating : null} />
                                     :
                                     ''
                                }
                                <div className="bg-white border mx-4 border-gray-300 p-4 rounded-lg mt-3 shadow-md">
                                    {reviews.slice(0, limit).map((review: any) => (
                                        (
                                            auth && auth.user ?
                                                <div key={review.id}>
                                                    {auth?.user.id !== review.user_id && <ReviewListing auth={auth} car={car} review={review ? review : null} />}
                                                </div>
                                            :
                                                <div key={review.id}>
                                                     <ReviewListing auth={auth} car={car} review={review ? review : null} />
                                                </div>
                                        )
                                    ))}
                                    {reviews.length > 3 && (
                                        <div className="flex justify-center mt-3">
                                            {expanded ? (
                                                <button
                                                    className="bg-emerald-500 text-white px-7 py-3 rounded-full shadow-md hover:shadow-lg"
                                                    onClick={handleLoadLess}
                                                >
                                                    Load Less
                                                </button>
                                            ) : (
                                                <button
                                                    className="bg-emerald-500 text-white px-7 py-3 rounded-full shadow-md hover:shadow-lg"
                                                    onClick={handleLoadMore}
                                                >
                                                    Load More
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>

                            </>
                        ) : (
                            auth && auth.user ?
                                <ReviewForm auth={auth} car={car} />
                            :
                                ''
                        )
                        }
                    </>
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
