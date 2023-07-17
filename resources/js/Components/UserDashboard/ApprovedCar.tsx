

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
            {car.map((carItem: any, index) => (
            <div className='px-12 pt-2 pb-4'>
                <div className="flex flex-col  bg-white border-1 md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img className="object-cover md:h-auto md:w-48 " src={'/storage' + carItem?.images[0]} alt="" />
                    <div className="flex flex-col justify-between p-2 leading-normal">
                        <h5 className="mb-1 text-2xl font-bold text-gray-900 ">{carItem?.title}</h5>
                        <h5 className="text-2xl font-bold dark:text-white text-amber-500">${carItem?.price}</h5>
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
                            <div className="flex flex-wrap mt-2 mx-2">
                                    <h6 className="mt-2 px-2 py-1 text-base font-medium text-center text-white bg-blue-500 hover:bg-green-600 self-end">
                                        Approved
                                    </h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                ))}
          
        </>
    )
}

export default ApprovedCar
