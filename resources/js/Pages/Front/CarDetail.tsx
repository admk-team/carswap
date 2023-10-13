import { usePage, useForm } from "@inertiajs/react";
import NavBar2 from "@/Components/Navbar/NabBar2";
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
import logoswap from "@/Assets/swaplogo.png";
import Footer from "../Footer/Footer";
import { Head, Link } from "@inertiajs/react";
import Star from "@/Components/Rating/Star";
import Cover from "@/Assets/revo-img.png";
import Transfer from "@/Assets/transfer.png";
import ShareModal from "@/Components/Modal/ShareModal";
import { title } from "process";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cover1 from "@/Assets/cover1.jpg";
import Cover2 from "@/Assets/cover2.jpg";
import { useFlutterwave } from "flutterwave-react-v3";
import ReviewForm from "@/Components/Forms/ReviewForm";
import ReviewListing from "@/Components/Reviews/ReviewListing";
import Conditon from "@/Assets/car-settings.png";
import CarEngine from "@/Assets/car-engine.png";
// import ImageGallery from '@/Components/Slider/ImageGallery';
import { Inertia } from "@inertiajs/inertia";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import watsapImage from "@/Assets/whatsapp.png";
// new logos
import feature from "@/Assets/features.png";
import cylinder from "@/Assets/cylinder.jpg";
import price from "@/Assets/price11.png";
import location from "@/Assets/location.png";
import Custom from "@/Assets/custome-removebg-preview.png";
export default function CarDetail({
    car,
    auth,
    similarCars,
    success,
    error,
    user_rating,
    my_cars,
    payment_data,
}: any) {
    const [checkReview, setCheckReview] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [images, setImages] = useState([]);
    const [priceDifference, setPriceDifference] = useState(0);
    const [selectedCarIndex, setSelectedCarIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSwapModal, setShowSwapModal] = useState(false);
    const [showBookModal, setShowBookModal] = useState(false);
    const [selectedCarId, setSelectedCarId] = useState(null);
    const [selectedMyCarId, setSelectedMyCarId] = useState(null);
    const [selectedMyCarTitle, setSelectedMyCarTitle] = useState(null);
    const [selectedMyCarImages, setSelectedMyCarImages] = useState([]);
    const [selectedMyCarPrice, setSelectedMyCarPrice] = useState(0);
    const [myCarId, setMyCarId] = useState(0);
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedCars, setSelectedCars] = useState<number[]>([]);

    useEffect(() => {
        if (success) {
            setSuccessMessage(success);
        }
        if (error) {
            setErrorMessage(error);
        }
    }, []);

    const handleShareButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const formattedDate = new Date(car.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const carPrice = car?.price || 0;
    const yourCarPrice = my_cars ? my_cars[selectedCarIndex]?.price : 0;

    const calculatePriceDifference = () => {
        if (!(selectedCarIds?.length > 0)) {
            alert("Please Select Car First!");
            return 0;
        } else {
            const difference = carPrice - yourCarPrice;
            setPriceDifference(difference);
            setData("price_diff", difference);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        // centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index: any) => setSelectedCarIndex(index),
    };
    const config = {
        public_key: payment_data?.public_key
            ? payment_data.public_key
            : "FLWPUBK-e7cf5d9650bd2e8e4e65358e6248a734-X",
        tx_ref: `${auth?.user?.id}-${Date.now().toString()}`,
        amount: payment_data?.booking_price ? payment_data.booking_price : 100,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: auth?.user ? auth.user.email : "",
            phone_number: auth?.user ? auth.user.phone_no : "",
            name: auth?.user
                ? auth.user.first_name + " " + auth.user.last_name
                : "",
        },
        customizations: {
            title: "Car Swap Payment",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
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
    const [paymentData, setPaymentData]: any = useState();
    useEffect(() => {
        if (paymentData !== null) {
        }
    }, [paymentData]);

    const paymentResponse = (response: any) => {
        if (paymentData !== null) {
            const data1 = JSON.stringify(data);
            let data2 = { paymentData: response, data: data1 };
            Inertia.post(route("user.storePayment"), data2);
        }
    };
    const handleFullImages = (ims: any) => {
        let tims = ims.map((i: any) => {
            return "/storage" + i;
        });
        setImages(tims);
    };
    function formatNumberWithCommas(number: any) {
        if (
            typeof number !== "undefined" &&
            number !== null &&
            !isNaN(number)
        ) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return ""; // Return an empty string if the number is not valid
        }
    }

    const handleSwapNowClick = (
        carId: any,
        myCarId: any,
        myCarTitle: any,
        myCarImage: any,
        myCarPrice: any
    ) => {
        if (!(selectedCarIds?.length > 0)) {
            alert("Please Select Car First!");
            return 0;
        }

        setSelectedCarId(carId);
        setSelectedMyCarId(myCarId);
        setSelectedMyCarTitle(myCarTitle);
        setSelectedMyCarImages(myCarImage);
        setSelectedMyCarPrice(myCarPrice);

        // Toggle car selection
        if (selectedCars.includes(myCarId)) {
            setSelectedCars(
                selectedCars.filter((selectedId) => selectedId !== myCarId)
            );
        } else {
            if (selectedCars.length < 2) {
                setSelectedCars([...selectedCars, myCarId]);
            } else {
                // Handle a scenario where the user tries to select more than two cars.
                // You can show an error message or restrict further selections here.
            }
        }
        setShowSwapModal(true);
        setMyCarId(myCarId);
        calculatePriceDifference();
    };
    const handleBookNow = () => {
        setShowBookModal(true);
    };

    const [selectedCarIds, setSelectedCarIds] = useState<number[]>([]);
    const handleCheckboxChange = (my_car_id: number) => {
        if (selectedCarIds.includes(my_car_id)) {
            setSelectedCarIds(selectedCarIds.filter((id) => id !== my_car_id));
        } else {
            setSelectedCarIds([...selectedCarIds, my_car_id]);
        }
    };
    //For car swap
    const { data, setData, post } = useForm({
        Inspection_date: "",
        Inspection_Time: "",
        car_id: car.id || "",
        my_car_id: selectedCarIds,
        price_diff: 0,
    });
    
    useEffect(() => {
        setData({ ...data, ...{ my_car_id: selectedCarIds } });
    }, [selectedCarIds]);

    const handleSwapModalClose = () => {
        setShowSwapModal(false);
    };

    const handleBookModalClose = () => {
        setShowBookModal(false);
    };

    useEffect(() => {
        setGalleryImages(
            car.images.map((img: any) => {
                return {
                    original: "/storage" + img,
                    thumbnail: "/storage" + img,
                };
            })
        );
    }, [car]);

    useEffect(() => { }, [galleryImages]);
    const swapPriceDifference =
        selectedMyCarPrice !== null ? carPrice - selectedMyCarPrice : 0;

    const swapDate = new Date(car?.swaps?.Inspection_date);
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() + 48);

    const bookingDate = new Date(car.bookings?.Inspection_date);
    const bookingTwentyFourHoursAgo = new Date();
    bookingTwentyFourHoursAgo.setHours(
        bookingTwentyFourHoursAgo.getHours() + 48
    );
    return (
        <div>
            <Head title="Nigeria’s No 1. Carswap place. Buy. Sell. Swap" />
            <div>
                <NavBar2 auth={auth} />
            </div>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="bg-gray-200 p-4">
                    <div className="flex">
                        <div className="bg-emerald-500 text-white py-2 px-4 mr-2">
                            {car.condition}
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <div className="text-black font-bold  text-6xl">
                            {car.title}
                        </div>
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
                                    ₦ {formatNumberWithCommas(car.price)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex items-center">
                            <img src={Location} className="w-6 h-6" />
                            <p className="mx-2">{car.location}</p>
                        </div>
                        <div
                            className="flex cursor-pointer items-center mr-10"
                            onClick={handleShareButtonClick}
                        >
                            <img src={Share} className="w-6 h-6" />
                            <p
                                className="ml-2 underline hover:text-blue-500 cursor-pointer"
                                onClick={handleShareButtonClick}
                            >
                                Share Now
                            </p>
                            <ShareModal
                                isOpen={isModalOpen}
                                onClose={handleModalClose}
                            />
                        </div>
                        <ShareModal
                            isOpen={isModalOpen}
                            onClose={handleModalClose}
                        />
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex flex-col">
                                <ImageGallery
                                    items={galleryImages}
                                    showPlayButton={false}
                                />
                                {/* <img src={'/storage/' + car.images[0]} className="w-full h-5/6 object-cover" alt="Cover Image" onClick={() => handleFullImages(car.images)} />
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {
                                                car.images.map((image: any, index: any) => (
                                                    <img key={index} src={'/storage/' + image} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6" onClick={() => handleFullImages(car.images)} />
                                                ))
                                            }
                                        </div> */}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="flex flex-col mx-3 h-5/6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    {car.type || car.type == "swap" ? (
                                        auth?.user &&
                                            car.user_id == auth.user.id ? (
                                            <div className="flex  justify-center items-center gap-3 flex-row">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-10 h-10 text-red-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-center text-md text-red-500 font-bold">
                                                    This car belongs to you. You
                                                    cannot swap or purchase a
                                                    car that you have added.
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                {swapDate <
                                                    twentyFourHoursAgo ? (
                                                    // car?.swaps && new Date(car?.swaps.created_at).getTime() < new Date().getTime() + 48 * 60 * 60 * 1000
                                                    <div className="flex flex-wrap justify-center items-center gap-3">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-7 h-7 text-emerald-600"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
                                                        </svg>
                                                        <p className="text-center text-lg text-emerald-900 font-bold">
                                                            INSPECTION ONGOING
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="focus:border-none">
                                                            <div className="col-span-1 md:col-span-2 lg:col-span-1 items-center focus:border-none">
                                                                <p className="text-gray-950 mt-2 text-2xl font-bold mb-2 text-center">
                                                                    Select to
                                                                    swap
                                                                </p>
                                                                {auth?.user ? (
                                                                    <>
                                                                        <Slider
                                                                            {...settings}
                                                                        >
                                                                            {my_cars.map(
                                                                                (
                                                                                    my_car: any,
                                                                                    index: any
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className="relative inline-block focus:border-none"
                                                                                    >
                                                                                        <label className="absolute top-2 right-2 z-10 left-[50%] mx-[40px]">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-checkbox  h-5 w-5  border-2 border-red-500"
                                                                                                checked={selectedCarIds.includes(
                                                                                                    my_car.id
                                                                                                )}
                                                                                                onChange={() =>
                                                                                                    handleCheckboxChange(
                                                                                                        my_car.id
                                                                                                    )
                                                                                                }
                                                                                            />
                                                                                        </label>
                                                                                        <img
                                                                                            src={
                                                                                                "/storage" +
                                                                                                my_car
                                                                                                    ?.images[0]
                                                                                            }
                                                                                            className="w-full h-24 object-contain"
                                                                                            alt={`Car ${index +
                                                                                                1
                                                                                                }`}
                                                                                        />
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </Slider>
                                                                    </>
                                                                ) : (
                                                                    <div>
                                                                        <h4>
                                                                            Login
                                                                            First
                                                                            to
                                                                            view
                                                                            your
                                                                            cars
                                                                            to
                                                                            swap
                                                                        </h4>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <h2 className="text-lg font-bold mb-4 text-center text-emerald-900 mt-5">
                                                            Swap Buy Calculator
                                                        </h2>
                                                        <hr className="mb-4" />
                                                        <div className="flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow">
                                                            <p className="font-bold">
                                                                Our Car Price
                                                            </p>
                                                            <p>
                                                                ₦{" "}
                                                                {formatNumberWithCommas(
                                                                    carPrice
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5">
                                                            <p className="font-bold mt-1">
                                                                Your Car Price
                                                            </p>
                                                            <p>
                                                                ₦{" "}
                                                                {formatNumberWithCommas(
                                                                    my_cars
                                                                        ? my_cars[
                                                                            selectedCarIndex
                                                                        ]
                                                                            ?.price
                                                                        : 0
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5">
                                                            <p className="font-bold mt-1">
                                                                Price Difference
                                                            </p>
                                                            <p>
                                                                ₦{" "}
                                                                {formatNumberWithCommas(
                                                                    priceDifference
                                                                )}
                                                            </p>
                                                        </div>
                                                        {auth?.user ? (
                                                            <button
                                                                className="bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                                onClick={
                                                                    calculatePriceDifference
                                                                }
                                                            >
                                                                Calculate
                                                            </button>
                                                        ) : (
                                                            <button className="bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3">
                                                                <Link
                                                                    href={route(
                                                                        "user.login"
                                                                    )}
                                                                >
                                                                    Calculate
                                                                </Link>
                                                            </button>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )
                                    ) : auth && auth.user ? (
                                        auth?.user &&
                                            car.user_id == auth.user.id ? (
                                            <div className="flex  justify-center items-center gap-3 flex-row">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-10 h-10 text-red-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-center text-md text-red-500 font-bold">
                                                    This car belongs to you. You
                                                    cannot swap or purchase a
                                                    car that you have added.
                                                </p>
                                            </div>
                                        ) : bookingDate <
                                            bookingTwentyFourHoursAgo ? (
                                            // car?.bookings && new Date(car?.bookings?.created_at).getTime() < new Date().getTime() + 48 * 60 * 60 * 1000
                                            <div className="flex flex-wrap justify-center items-center gap-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-7 h-7 text-emerald-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p className="text-center text-lg text-emerald-900 font-bold">
                                                    INSPECTION ONGOING
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={handleBookNow}
                                                    className="bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                >
                                                    {" "}
                                                    Buy Now{" "}
                                                </button>
                                                <a
                                                    className="flex justify-center bg-green-600  w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                    href="https://api.whatsapp.com/send?phone=08120222922"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={watsapImage}
                                                        className="w-6 h-6 mr-1 "
                                                        alt=""
                                                    />
                                                    +2348120222922
                                                </a>
                                            </>
                                        )
                                    ) : (
                                        <>
                                            {/* <button className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3' >
                                                        <Link href={route('user.login')}> Buy Now </Link>
                                                    </button> */}
                                            <a
                                                className="flex justify-center bg-green-600  w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                href="https://api.whatsapp.com/send?phone=08120222922"
                                                target="_blank"
                                            >
                                                <img
                                                    src={watsapImage}
                                                    className="w-6 h-6 mr-1 "
                                                    alt=""
                                                />
                                                +2348120222922
                                            </a>
                                        </>
                                    )}
                                </div>
                                {car.type || car.type == "swap" ? (
                                    auth?.user &&
                                        car.user_id == auth.user.id ? (
                                        ""
                                    ) : car?.swaps ? (
                                        ""
                                    ) : (
                                        <>
                                            <div className="bg-white rounded-lg shadow-md p-6 mt-3">
                                                <h2 className="text-lg font-bold mb-4 text-center text-emerald-900">
                                                    You Are Swapping
                                                </h2>
                                                <hr />
                                                <div className="relative p-4 flex">
                                                    <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
                                                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                            <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                                Our Car
                                                            </p>
                                                            <img
                                                                src={
                                                                    "/storage" +
                                                                    car
                                                                        .images[0]
                                                                }
                                                                className="w-full h-4/5 object-contain"
                                                            ></img>
                                                        </div>
                                                        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
                                                            <img
                                                                src={Transfer}
                                                                className="w-full h-20 object-contain"
                                                            ></img>
                                                        </div>
                                                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                            <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                                Your Car
                                                            </p>
                                                            {auth?.user ? (
                                                                <>
                                                                    <Slider
                                                                        {...settings}
                                                                    >
                                                                        {my_cars.map(
                                                                            (
                                                                                my_car: any,
                                                                                index: any
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className="relative inline-block"
                                                                                >
                                                                                    <label className="absolute top-2 right-2 z-10">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            className="form-checkbox h-5 w-5  border-2 border-red-500"
                                                                                            checked={selectedCarIds.includes(
                                                                                                my_car.id
                                                                                            )}
                                                                                            onChange={() =>
                                                                                                handleCheckboxChange(
                                                                                                    my_car.id
                                                                                                )
                                                                                            }
                                                                                        />
                                                                                    </label>
                                                                                    <img
                                                                                        src={
                                                                                            "/storage" +
                                                                                            my_car
                                                                                                ?.images[0]
                                                                                        }
                                                                                        className="w-full h-4/5 object-contain"
                                                                                        alt={`Car ${index +
                                                                                            1
                                                                                            }`}
                                                                                    />
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </Slider>
                                                                </>
                                                            ) : (
                                                                <div>
                                                                    <h4>
                                                                        Login
                                                                        First to
                                                                        view
                                                                        your
                                                                        cars to
                                                                        swap
                                                                    </h4>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {auth?.user ? (
                                                    <button
                                                        className="bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                        onClick={() =>
                                                            handleSwapNowClick(
                                                                car.id,
                                                                my_cars[
                                                                    selectedCarIndex
                                                                ]?.id,
                                                                my_cars[
                                                                    selectedCarIndex
                                                                ]?.title,
                                                                my_cars[
                                                                    selectedCarIndex
                                                                ]?.images,
                                                                my_cars[
                                                                    selectedCarIndex
                                                                ]?.price
                                                            )
                                                        }
                                                        // disabled={!(selectedCarIds?.length>0)}
                                                        title={
                                                            !(
                                                                selectedCarIds?.length >
                                                                0
                                                            )
                                                                ? "Please Select Cars"
                                                                : ""
                                                        }
                                                    >
                                                        Swap Now
                                                    </button>
                                                ) : (
                                                    // <button onClick={() => {
                                                    //     handleFlutterPayment({
                                                    //         callback: (response) => {
                                                    //             console.log(response);
                                                    //         },
                                                    //         onClose: () => { },
                                                    //     });
                                                    // }} className='bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3'>Swap Now</button>
                                                    <button className="bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3">
                                                        <Link
                                                            href={route(
                                                                "user.login"
                                                            )}
                                                        >
                                                            Swap Now
                                                        </Link>
                                                    </button>
                                                )}
                                            </div>
                                            <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                                                <button
                                                    onClick={handleBookNow}
                                                    className="bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                >
                                                    {" "}
                                                    Buy Cash{" "}
                                                </button>
                                                {/* <a
                                                    className="flex justify-center bg-green-600  w-full text-white font-bold py-2 px-4 rounded mt-3"
                                                    href="https://api.whatsapp.com/send?phone=08120222922"
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={watsapImage}
                                                        className="w-6 h-6 mr-1 "
                                                        alt=""
                                                    />
                                                    +2348120222922
                                                </a> */}

                                                {/* <button onClick={handleBookNow} className='bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-6' >  Buy Cash  </button> */}
                                                <p className='text-gray-950 mt-2 text-xl font-bold mb-2 text-left'>We deliver when you pay cash.</p>
                                                <button onClick={() => window.location.href = 'mailto:cars@carswap.ng'} className='bg-gray-950 w-full text-white font-bold py-2 px-4 rounded mt-3'>
                                                    Make Inquiry
                                                </button>
                                            </div>
                                        </>
                                    )
                                ) : (
                                    ""
                                )}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-2xl">
                        Key Features:
                    </h3>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Engine} className="w-6 h-6" />
                                    <p>Engine Size</p>
                                </div>
                                <div>
                                    <p>{car.engine_capacity} CC</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Drive} className="w-6 h-6" />
                                    <p>Drive</p>
                                </div>
                                <div>
                                    <p>{car.drive} KM</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Color1} className="w-6 h-6" />
                                    <p>Interior Color</p>
                                </div>
                                <div>
                                    <p>{car.interior_color}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img
                                        src={location}
                                        className="w-6 h-6"
                                    />
                                    <p>Location</p>
                                </div>
                                <div>
                                    <p>{car.location} {car.state} {car.lga}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Mileage} className="w-6 h-6" />
                                    <p>Mileage</p>
                                </div>
                                <div>
                                    <p>{car.mileage} (Mi)</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                        />
                                    </svg>

                                    <p>Year</p>
                                </div>
                                <div>
                                    <p>{car.year}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                                        />
                                    </svg>

                                    <p>Condition</p>
                                </div>
                                <div>
                                    <p>{car.condition}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img
                                        src={cylinder}
                                        className="w-6 h-6"
                                    />
                                    <p>Cylinder</p>
                                </div>
                                <div>
                                    <p>{car.cylinder}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Gear} className="w-6 h-6" />
                                    <p>Transmission</p>
                                </div>
                                <div>
                                    <p>{car.transmission}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Fuel} className="w-6 h-6" />
                                    <p>Fuel Type</p>
                                </div>
                                <div>
                                    <p>{car.fuel_type}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Color} className="w-6 h-6" />
                                    <p>Exterior Color</p>
                                </div>
                                <div>
                                    <p>{car.exterior_color}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex gap-2">
                                    <img src={Custom} className="w-6 h-6" />
                                    <p>Custom Paper</p>
                                </div>
                                <div>
                                    <p>{car.custom_paper}</p>
                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-2xl">
                        Special Features:
                    </h3>
                    <div className="grid grid-cols-12 gap-4 mt-7">
                        <div className="col-span-8 md:col-span-8 lg:col-span-8">
                            <hr />
                            <div className="flex justify-between bg-purple-50 p-4">
                                <div className="flex flex-row items-start flex-wrap gap-2 ">
                                    <img
                                        src={feature}
                                        className="w-6 h-6"
                                    />
                                    <p>Special Feature:</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p>{car?.feature}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {car.title1 && (
                    <div className="p-4">
                        <h3 className="font-bold text-gray-900 text-2xl">
                            My Swap car Option:
                        </h3>

                        <div className="grid grid-cols-8 gap-4 mt-7">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={logoswap}
                                            className="w-6 h-6"
                                        />
                                        <p>Car 1</p>
                                    </div>
                                    <div>
                                        <p>{car.title1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={logoswap}
                                            className="w-6 h-6"
                                        />
                                        <p>Model</p>
                                    </div>
                                    <div>
                                        <p>{car.model1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>

                                        <p>Year</p>
                                    </div>
                                    <div>
                                        <p>{car.year1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={Conditon}
                                            className="w-6 h-6"
                                        />
                                        <p>Condition</p>
                                    </div>
                                    <div>
                                        <p>{car.condition1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Color} className="w-6 h-6" />
                                        <p>Interior Color</p>
                                    </div>
                                    <div>
                                        <p>{car.interiorColor1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={Mileage}
                                            className="w-6 h-6"
                                        />
                                        <p>Mileage</p>
                                    </div>
                                    <div>
                                        <p>{car.milage1}</p>
                                    </div>
                                </div>
                                {/* New Feilds*/}
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={feature}
                                            className="w-6 h-6"
                                        />
                                        <p>Special Feature</p>
                                    </div>
                                    <div>
                                        <p>{car.feature1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Fuel} className="w-6 h-6" />
                                        <p>Fuel Type</p>
                                    </div>
                                    <div>
                                        <p>{car.fuelType1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Gear} className="w-6 h-6" />
                                        <p>Transmission Type</p>
                                    </div>
                                    <div>
                                        <p>{car.transmission1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Color} className="w-6 h-6" />
                                        <p>Exterior Color</p>
                                    </div>
                                    <div>
                                        <p>{car.exteriorColor1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={cylinder}
                                            className="w-6 h-6"
                                        />
                                        <p>Cylinder</p>
                                    </div>
                                    <div>
                                        <p>{car.cylinder1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={price}
                                            className="w-6 h-6"
                                        />
                                        <p>Price</p>
                                    </div>
                                    <div>
                                        <p>{car.price1}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Custom} className="w-6 h-6" />
                                        <p>Custom Paper</p>
                                    </div>
                                    <div>
                                        <p>{car.custom_paper1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={logoswap}
                                            className="w-6 h-6"
                                        />
                                        <p>Car 2</p>
                                    </div>
                                    <div>
                                        <p>{car.title2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={logoswap}
                                            className="w-6 h-6"
                                        />
                                        <p>Model</p>
                                    </div>
                                    <div>
                                        <p>{car.model2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>

                                        <p>Year</p>
                                    </div>
                                    <div>
                                        <p>{car.year2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={Conditon}
                                            className="w-6 h-6"
                                        />
                                        <p>Condition</p>
                                    </div>
                                    <div>
                                        <p>{car.condition2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Color} className="w-6 h-6" />
                                        <p>Interior Color</p>
                                    </div>
                                    <div>
                                        <p>{car.interiorColor2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={Mileage}
                                            className="w-6 h-6"
                                        />
                                        <p>Mileage</p>
                                    </div>
                                    <div>
                                        <p>{car.milage2}</p>
                                    </div>
                                </div>
                                {/* New Fields */}
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={feature}
                                            className="w-6 h-6"
                                        />
                                        <p>Special Feature</p>
                                    </div>
                                    <div>
                                        <p>{car.feature2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Fuel} className="w-6 h-6" />
                                        <p>Fuel Type</p>
                                    </div>
                                    <div>
                                        <p>{car.fuelType2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Gear} className="w-6 h-6" />
                                        <p>Transmission Type</p>
                                    </div>
                                    <div>
                                        <p>{car.transmission2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Color} className="w-6 h-6" />
                                        <p>Exterior Color</p>
                                    </div>
                                    <div>
                                        <p>{car.exteriorColor2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={cylinder}
                                            className="w-6 h-6"
                                        />
                                        <p>Cylinder</p>
                                    </div>
                                    <div>
                                        <p>{car.cylinder2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img
                                            src={price}
                                            className="w-6 h-6"
                                        />
                                        <p>Price</p>
                                    </div>
                                    <div>
                                        <p>{car.price2}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between bg-purple-50 p-4">
                                    <div className="flex gap-2">
                                        <img src={Custom} className="w-6 h-6" />
                                        <p>Custom Paper</p>
                                    </div>
                                    <div>
                                        <p>{car.custom_paper2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-2xl">
                        Description:
                    </h3>
                    <p>{car.description}</p>
                </div>
                {
                    <>
                        {car.ratings && car.ratings.length > 0 ? (
                            <>
                                {auth && auth.user ? (
                                    <ReviewForm
                                        auth={auth}
                                        car={car}
                                        review={
                                            user_rating ? user_rating : null
                                        }
                                    />
                                ) : (
                                    ""
                                )}
                                {car.ratings.length > 1 ? (
                                    <div className="bg-white border mx-4 border-gray-300 p-4 rounded-lg mt-3 shadow-md">
                                        {reviews
                                            .slice(0, limit)
                                            .map((review: any) =>
                                                auth && auth.user ? (
                                                    <div key={review.id}>
                                                        {auth?.user.id !==
                                                            review.user_id && (
                                                                <ReviewListing
                                                                    auth={auth}
                                                                    car={car}
                                                                    review={
                                                                        review
                                                                            ? review
                                                                            : null
                                                                    }
                                                                />
                                                            )}
                                                    </div>
                                                ) : (
                                                    <div key={review.id}>
                                                        <ReviewListing
                                                            auth={auth}
                                                            car={car}
                                                            review={
                                                                review
                                                                    ? review
                                                                    : null
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}
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
                                ) : (
                                    ""
                                )}
                            </>
                        ) : auth && auth.user ? (
                            <ReviewForm auth={auth} car={car} />
                        ) : (
                            ""
                        )}
                    </>
                }
                {similarCars ? (
                    <div className="p-4 ">
                        <h3 className="font-bold text-3xl text-green-600">
                            Explore More:
                        </h3>
                        <h3 className="font-bold text-gray-900 text-2xl mt-2">
                            Similar Listings
                        </h3>
                        <div className="mx-auto max-w-screen-xl w-full h-full mt-3 ">

                            <div className="lg:container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-4  p-4">
                                {similarCars?.map((car: any, index: any) => (
                                    <div
                                        key={index}
                                        className="lg:w-[250px] xl:w-[275px] md:w-[220px] sm:w-[200px] bg-white border border-gray-200 shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 md:me-[2px] sm:mt-2"
                                    >
                                        <div className="">

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
                                            <Link
                                                href={route(
                                                    "CarDetail",
                                                    car.slug
                                                )}
                                            >
                                                <img
                                                    className="w-full h-[144px] rounded-t-lg object-cover image__responsive"
                                                    src={
                                                        "/storage" +
                                                        car?.images[0]
                                                    }
                                                    alt="product image"
                                                />
                                            </Link>

                                            {/* {car?.type === "For Swap" ? ( */}
                                            <Link
                                                href={route(
                                                    "CarDetail",
                                                    car.slug
                                                )}
                                            >

                                                {/* <div className="absolute top-2 right-2 bg-emerald-600 rounded p-1 shadow-2xl cursor-pointer">
                                                        <p className="font-semibold text-black text-white flex gap-2 items-center justify-center align-center">
                                                            <span>
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
                                                                        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Swap Calculator
                                                            </span>
                                                            <span>
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
                                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </p>
                                                    </div> */}
                                            </Link>
                                            {/* ) : null} */}
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
                                            <h5 className="text-xl font-bold dark:text-white text-emerald-500 mt-1">
                                                Price: ₦{" "}
                                                {formatNumberWithCommas(
                                                    car.price
                                                )}
                                            </h5>
                                            <div className="flex mb-2 flex-wrap justify-between">
                                                <div className="flex"> Spec: {car?.feature && (car.feature.length > 25 ? car.feature.slice(0, 25) + '...' : car.feature)}</div>

                                            </div>
                                            <Link
                                                href={route(
                                                    "CarDetail",
                                                    car.slug
                                                )}
                                                className=""
                                            >

                                            </Link>
                                            <div className="flex mb-2 flex-wrap justify-between">
                                                <div className="flex bg-emerald-500">
                                                    <p className="mx-2 text-white">
                                                        {car?.cylinder}{" "}
                                                        <span className="ml-1">
                                                            - Cylinder
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className=' mr-2'>
                                                    <p >Year : {car?.year}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex flex-wrap justify-between mt-3">
                                                    <div className="flex mb-2 flex-wrap justify-between">
                                                        <div className="flex">
                                                            <img
                                                                src={
                                                                    car?.brand
                                                                        ?.image
                                                                        ? "/storage/" +
                                                                        car
                                                                            ?.brand
                                                                            ?.image
                                                                        : ""
                                                                }
                                                                className="w-5 h-5"
                                                            />
                                                            <p className="mx-2 text-sm ">
                                                                {
                                                                    car?.brand
                                                                        ?.title
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap justify-between">
                                                        <div className="flex mb-1">
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
                                                            <p className="mx-1 text-sm ">
                                                                {car?.location}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='flex flex-wrap justify-between mt-1 condition__wrap'>
                                                    <div className='flex mb-1  rounded-[3px]'>
                                                        <p className='mx-1 text-12px  text-xs text-gray-600 responsive'>Conditon : {car?.condition}</p>
                                                    </div>
                                                    <div className='flex mb-1 bg-gray-100 rounded-[4px]'>
                                                        <p className='mx-1  text-12px text-xs text-gray-600 responsive'>{car?.mileage} miles</p>
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
                                {showSwapModal && selectedCarId && (
                                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
                                        <div className="flex flex-col  w-full bg-white rounded p-4 max-w-md">
                                            <h2 className="text-lg font-bold mb-4 text-center text-emerald-900">
                                                Book Inspection
                                            </h2>
                                            <hr className="mb-2" />
                                            <div className="pb-12 flex">
                                                <div className="lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
                                                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                        <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                            Your Car
                                                        </p>
                                                        <img
                                                            src={
                                                                "/storage" +
                                                                car?.images[0]
                                                            }
                                                            className="w-full h-3/5 object-contain"
                                                        ></img>
                                                        <p className="font-bold">
                                                            Price
                                                        </p>
                                                        <p>
                                                            ₦{" "}
                                                            {formatNumberWithCommas(
                                                                carPrice
                                                            )}
                                                        </p>
                                                        <p className="font-bold">
                                                            Price Difference
                                                        </p>
                                                        <p className="">
                                                            ₦{" "}
                                                            {formatNumberWithCommas(
                                                                swapPriceDifference
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center">
                                                        <img
                                                            src={Transfer}
                                                            className="w-full mt-12 h-14 object-contain"
                                                        ></img>
                                                    </div>
                                                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                        <p className="text-gray-950 mt-2 text-2xl font-bold mb-2">
                                                            Our Car
                                                        </p>
                                                        <img
                                                            src={
                                                                "/storage" +
                                                                selectedMyCarImages[0]
                                                            }
                                                            alt="My Car"
                                                            className="w-full h-3/5 object-contain"
                                                        />
                                                        <p className="font-bold ">
                                                            Price
                                                        </p>
                                                        <p>
                                                            ₦{" "}
                                                            {formatNumberWithCommas(
                                                                selectedMyCarPrice
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <label
                                                htmlFor="swapTime"
                                                className="mt-2"
                                            >
                                                Time:
                                            </label>
                                            <input
                                                type="time"
                                                id="swapTime"
                                                name="Inspection_Time"
                                                value={data.Inspection_Time}
                                                onChange={(e) =>
                                                    setData(
                                                        "Inspection_Time",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <label
                                                htmlFor="swapDate"
                                                className="mt-3"
                                            >
                                                Date:
                                            </label>
                                            <input
                                                type="date"
                                                id="swapDate"
                                                name="Inspection_date"
                                                value={data.Inspection_date}
                                                onChange={(e) =>
                                                    setData(
                                                        "Inspection_date",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <div className="flex justify-end mt-4">
                                                <button
                                                    onClick={() => {
                                                        handleFlutterPayment({
                                                            callback: (
                                                                response: any
                                                            ) => {
                                                                setPaymentData(
                                                                    response
                                                                );
                                                                setTimeout(
                                                                    () => {
                                                                        paymentResponse(
                                                                            response
                                                                        );
                                                                    },
                                                                    2000
                                                                );
                                                            },
                                                            onClose: () => { },
                                                        });
                                                    }}
                                                    className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2 "
                                                >
                                                    Book Now
                                                </button>
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={
                                                        handleSwapModalClose
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {showBookModal && (
                                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
                                        <div className="flex flex-col  w-full bg-white rounded p-4 max-w-md">
                                            <h2 className="text-lg font-bold mb-4 text-center text-emerald-900">
                                                Book Inspection
                                            </h2>
                                            <hr className="mb-2" />
                                            <label
                                                htmlFor="swapTime"
                                                className="mt-2"
                                            >
                                                Time:
                                            </label>
                                            <input
                                                type="time"
                                                id="swapTime"
                                                name="Inspection_Time"
                                                value={data.Inspection_Time}
                                                onChange={(e) =>
                                                    setData(
                                                        "Inspection_Time",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <label
                                                htmlFor="swapDate"
                                                className="mt-3"
                                            >
                                                Date:
                                            </label>
                                            <input
                                                type="date"
                                                id="swapDate"
                                                name="Inspection_date"
                                                value={data.Inspection_date}
                                                onChange={(e) =>
                                                    setData(
                                                        "Inspection_date",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <div className="flex justify-end mt-4">
                                                <button
                                                    onClick={() => {
                                                        handleFlutterPayment({
                                                            callback: (
                                                                response: any
                                                            ) => {
                                                                setPaymentData(
                                                                    response
                                                                );
                                                                setTimeout(
                                                                    () => {
                                                                        paymentResponse(
                                                                            response
                                                                        );
                                                                    },
                                                                    2000
                                                                );
                                                            },
                                                            onClose: () => { },
                                                        });
                                                    }}
                                                    className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mr-2 "
                                                >
                                                    Book Now
                                                </button>
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={
                                                        handleBookModalClose
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                ) : (
                    ""
                )}
            </div>
            <div>
                <Footer auth={auth} />
            </div>
        </div>
    );
}
