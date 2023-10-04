

import MyImage from "@/Assets/card1.jpg"
import { Link, useForm } from "@inertiajs/react";
import { link } from "fs";
import React, { useState, useEffect } from "react";

const ApprovedCar = ({approved}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsData, setCarsData] = useState([]);
    const itemsPerPage = 3;

    useEffect(() => {
        setCarsData(approved);
    }, [approved]);
    const {} = useForm()
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const car = carsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
 
    return (
        <>
       
            <div className='pt-4 pl-4'>
                <h1 className='font-extrabold text-black'>Approved Cars:</h1>
            </div>
            {car && car.length > 0?
                car.map((carItem: any, index) => (
                    <div className='px-12 pt-2 pb-4'>
                      <div className="flex flex-col bg-white border-1 md:flex-row md:max-w-full hover:bg-gray-100">
                            <img className="object-cover md:h-auto md:w-48 " src={'/storage' + carItem?.images[0]} alt="" />
                            <div className="flex flex-col justify-between p-2 leading-normal">
                                <h5 className="mb-1 text-2xl font-bold text-gray-900 line-clamp-1">{carItem?.title}</h5>
                                <div className="flex flex-wrap">
                                <div>
                                        <span className="text-gray-900 me-3"><strong>Status</strong></span>
                                        <button className="mt-2 px-2 py-1 text-white bg-green-500 ">Approved</button>
                                    </div>
                                </div>
                                <h5 className="text-2xl font-bold dark:text-white text-amber-500">₦ {carItem?.price}</h5>
                                <div className="mt-1">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <th className="px-2  font-bold-300 text-gray-800">Condition</th>
                                                <th className="px-2  text-gray-800">Engine</th>
                                                <th className="px-2  text-gray-800">Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.condition}</th>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.engine_capacity} CC</th>
                                                <th className="px-2 text-sm sm:text-base text-gray-800">{carItem?.mileage} (MI)</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <p className="text-center">No record found</p>
            }
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
    )
}

export default ApprovedCar
