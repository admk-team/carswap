import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/react";
import { link } from "fs";
import React, { useState, useEffect } from "react";

const MyListedCar = ({ cars, success }: any) => {
    console.log('success', success)
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
    const [selectedCarSlug, setSelectedCarSlug] = useState('');

    const deleteHandler=((slug:any)=>{
        setSelectedCarSlug(slug);
        setShowDeleteModal(true);
    });
    const confirmDeleteHandler = () => {
        if (selectedCarSlug !== null) {
          get(route("user.deleteCar", selectedCarSlug));
        }
        setShowDeleteModal(false);
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
        setSelectedCarSlug('');
    };
    return (
        <>
            <div className="pt-4 pl-4">
                <h1 className="font-extrabold text-black">My Listed Cars</h1>
            </div>

            {car.map((carItem: any, index) => (
                <div className="px-4 pt-2 pb-3" key={index}>
                    <div className="flex flex-col bg-white border-1 md:flex-row md:max-w-full hover:bg-gray-100">
                        <img className="object-cover md:h-auto md:w-48" src={'/storage' + carItem?.images[0]} alt="" />
                        <div className="flex flex-col justify-between p-2 leading-normal">
                            <h5 className="mb-1 text-2xl font-bold text-gray-900">{carItem?.model}</h5>
                            <h5 className="text-2xl font-bold dark:text-white text-amber-500">${carItem?.price}</h5>
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
                                        onClick={()=>deleteHandler(carItem.slug)}
                                    >
                                        Delete
                                    </button>
                                    {/* <Link href={route('user.delete', carItem.slug)} className="mx-2 px-2 py-1 text-base font-medium text-center text-white bg-gray-950 hover:bg-green-600 self-end">
                                        Delete
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
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
            <div className="d-flex justify-content-center pb-3">
                <ul className="pagination">
                    {Array(Math.ceil(carsData.length / itemsPerPage))
                        .fill(0)
                        .map((_, index) => (
                            <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
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
