import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/react";
import { useFlutterwave } from "flutterwave-react-v3";
import { link } from "fs";
import React, { useState, useEffect } from "react";

const MyListedCar = ({ cars, success, auth, payment_data }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsData, setCarsData] = useState([]);
    const itemsPerPage = 3;

    useEffect(() => {
        setCarsData(cars);
    }, [cars]);
    const { get } = useForm()
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const car = carsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSoldModal, setShowSoldModal] = useState(false);
    const [selectedCarSlug, setSelectedCarSlug] = useState('');

    const deleteHandler = ((slug: any) => {
        setSelectedCarSlug(slug);
        setShowDeleteModal(true);
    });
    const soldHandler = ((slug: any) => {
        setSelectedCarSlug(slug);
        setShowSoldModal(true);
    });
    const confirmDeleteHandler = () => {
        if (selectedCarSlug !== null) {
            get(route("user.deleteCar", selectedCarSlug));
        }
        setShowDeleteModal(false);
    };
    const confirmSoldHandler = () => {
        if (selectedCarSlug !== null) {
            get(route("user.deleteCar", selectedCarSlug));
        }
        setShowSoldModal(false);
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
        setSelectedCarSlug('');
    };
    const handleCloseSoldModal = () => {
        setShowSoldModal(false);
        setSelectedCarSlug('');
    };
    const config = {
        public_key: payment_data.public_key ? payment_data.public_key : 'FLWPUBK-e7cf5d9650bd2e8e4e65358e6248a734-X',
        tx_ref: `${auth?.user?.id}-${Date.now().toString()}`,
        amount: payment_data.post_car_price ? payment_data.post_car_price : 100,
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
    const [paymentData, setPaymentData] = useState(null)
    const [carId, setCarId] = useState(null)
    useEffect(() => {
        if (paymentData !== null) {
            paymentResponse();
        }
    }, [paymentData]);

    const paymentResponse = () => {
        if (paymentData !== null) {
            Inertia.post(route('user.storePayment'), { paymentData, carId });
        }
    }
    const handleFlutterPayment = useFlutterwave(config);
    return (
        <>
            <div className="pt-4 pl-4">
                <h1 className="font-extrabold text-black">My Listed Cars</h1>
            </div>

            {car && car.length > 0 ?
                car.map((carItem: any, index) => (
                    <div className="px-4 pt-2 pb-3" key={index}>
                        <div className="flex flex-col bg-white border-1 md:flex-row md:max-w-full hover:bg-gray-100">
                            <div className="relative h-150 ">
                                <img className="h-[250px] object-cover  md:w-[15rem]" src={'/storage' + carItem?.images[0]} alt="" />
                                <div className='absolute top-2 right-2 bg-emerald-600 rounded p-1 shadow-2xl'>
                                    <p className='font-semibold text-black text-white'>{carItem?.type}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-2 leading-normal">
                                <h5 className="mb-1 text-2xl font-bold text-gray-900">{carItem?.title}</h5>
                                {
                                    carItem?.payment ?
                                        <div className="flex gap-2">
                                            <span className="text-gray-900 me-3"><strong>Payment Status</strong></span>
                                            <button className="px-2 py-1 text-white bg-green-500 rounded">Paid</button>
                                        </div>
                                        :
                                        <div className="flex gap-2">
                                            <span className="text-red-700 me-3"><strong>Make payment </strong></span>
                                            <button className="px-2 py-1 text-white bg-yellow-500 "
                                                onClick={() => {
                                                    handleFlutterPayment({
                                                        callback: (response: any) => {
                                                            setPaymentData(response);
                                                            setCarId(carItem.id);
                                                            setTimeout(() => {
                                                                paymentResponse();

                                                            }, 3000);
                                                        },
                                                        onClose: () => { },
                                                    });
                                                }}
                                            >Make Payment</button>
                                        </div>
                                }
                                {carItem?.status && carItem.status == "1" ?
                                    <div>
                                        <span className="text-gray-900 me-3"><strong>Status</strong></span>
                                        <button className="mt-2 px-2 py-1 text-white bg-green-500 ">Approved</button>
                                    </div>
                                    :
                                    <div>
                                        <span className="text-gray-900 me-3"><strong>Status</strong></span>
                                        <button className="mt-2 px-2 py-1 text-white bg-yellow-500">Pending</button>
                                    </div>
                                }
                                <h5 className="text-2xl font-bold dark:text-white text-amber-500">₦ {carItem?.price}</h5>
                                <div className="mt-1">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="px-2 font-bold-300 text-gray-800">Condition</th>
                                                <th className="px-2 text-gray-800">Engine</th>
                                                <th className="px-2 text-gray-800">Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.condition}</th>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.engine_capacity} CC</th>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.mileage} (MI)</th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="flex flex-wrap mt-2 mx-2">
                                        <Link href={route('user.editcar', carItem.slug)} className="mt-2 px-2 py-1 text-base font-medium text-center text-white bg-green-500 hover:bg-green-600 self-end">
                                            Edit
                                        </Link>
                                        <button
                                            className="mx-2 px-2 py-1 text-base font-medium text-center text-white bg-gray-950 hover:bg-green-600 self-end"
                                            onClick={() => deleteHandler(carItem.slug)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="mx-2 px-2 py-1 text-base font-medium text-center text-white bg-red-600 hover:bg-red-950 self-end"
                                            onClick={() => soldHandler(carItem.slug)}
                                        >
                                            Sold
                                        </button>
                                        {/* <Link href={route('user.delete', carItem.slug)} className="mx-2 px-2 py-1 text-base font-medium text-center text-white bg-gray-950 hover:bg-green-600 self-end">
                                            Delete
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <p className="text-center">No record found</p>
            }

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
                    <div className="bg-white w-1/4 p-6 rounded-lg shadow-lg">
                        <p className="text-center text-xl font-bold text-gray-900 mb-4">Are you sure you want to delete?</p>
                        <div className="flex justify-center">
                            <button
                                className="mx-2 px-4 py-2 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg"
                                onClick={confirmDeleteHandler}
                            >
                                Confirm
                            </button>
                            <button
                                className="mx-2 px-4 py-2 text-base font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showSoldModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
                    <div className="bg-white w-1/4 p-6 rounded-lg shadow-lg">
                        <p className="text-center text-xl font-bold text-gray-900 mb-4">Have you sold this car?</p>
                        <div className="flex justify-center">
                            <button
                                className="mx-2 px-4 py-2 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg"
                                onClick={confirmSoldHandler}
                            >
                                Confirm
                            </button>
                            <button
                                className="mx-2 px-4 py-2 text-base font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"
                                onClick={handleCloseSoldModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="d-flex justify-content pb-3">
                <ul className="pagination flex justify-center mt-4 ">
                    {Array(Math.ceil(carsData.length / itemsPerPage))
                        .fill(0)
                        .map((_, index) => (
                            <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    className={`page-link px-3 py-1 ${currentPage === index + 1 ? "bg-emerald-500 text-white" : "text-black"}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default MyListedCar;
