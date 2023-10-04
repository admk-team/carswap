
import { Link, useForm } from "@inertiajs/react";
import backgroundImage from '@/Assets/card1.jpg';
import SwappedImage from '@/Assets/Swapped.png'
import React, { useState, useEffect } from "react";

const MySwapedCar = ({swaped, cars}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsData, setCarsData] = useState([]);
    const itemsPerPage = 2;

    useEffect(() => {
        setCarsData(swaped);
    }, [swaped]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const car = swaped.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>Swapped Cars</h1>
            </div>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>My Cars</h1>
            </div>

            {/* start */}
            {car && car.length > 0 ?
            car.map((swap:any, index:any) =>{
                console.log('sc :  ', swap)
                console.log('all c :  ', cars);
                let my__usercar = cars.find((mcar:any)=>{
                    return mcar.id == parseInt(swap?.mycar_id)
                })
                
                return (<> {
                <div className='' key={index}>
                    <div className='px-4  mb-2 flex flex-wrap justify-center'>
                        <div className='w-80 mx-auto bg-white border m-2'>
                            <img className='w-full h-48 object-cover' src={'/storage' + my__usercar?.images[0]} alt='Product' />
                            <div className='p-2'>
                                <h5 className='mb-1 text-2xl font-bold text-gray-900 line-clamp-1'>{my__usercar?.title}</h5>
                                <h5 className='text-2xl font-bold dark:text-white text-amber-500'>₦ {my__usercar?.price}</h5>
                                <div className='h-1 bg-gray-500 my-2'></div>
                                <div className='mt-1'>
                                    <table className='w-full'>
                                        <tbody>
                                            <tr>
                                                <th className='px-2 font-bold-300 text-gray-800'>Condition</th>
                                                <th className='px-2 text-gray-800'>Engine</th>
                                                <th className='px-2 text-gray-800'>Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{my__usercar?.condition}</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{my__usercar?.engine_capacity} CC</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{my__usercar?.mileage} (MI)</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-10 h-10' src={SwappedImage} alt="" />
                        </div>
                        <div className='w-80 mx-auto bg-white border m-2'>
                             <img className='w-full h-48 object-cover' src={'/storage' + swap.car?.images.split(',')[0] } alt='Product' />
                            <div className='p-2'>
                                <h5 className='mb-1 text-2xl font-bold text-gray-900 line-clamp-1'>{swap.car?.title}</h5>
                                <h5 className='text-2xl font-bold dark:text-white text-amber-500'>₦  {swap.car?.price}</h5>
                                <div className='h-1 bg-gray-500 my-2'></div>
                                <div className='mt-1'>
                                    <table className='w-full'>
                                        <tbody>
                                            <tr>
                                                <th className='px-2 font-bold-300 text-gray-800'>Condition</th>
                                                <th className='px-2 text-gray-800'>Engine</th>
                                                <th className='px-2 text-gray-800'>Mileage</th>
                                            </tr>
                                            <tr>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{swap.car?.condition}</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{swap.car?.engine_capacity}CC</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{swap.car?.mileage}(MI)</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                    <hr />
                </div>
             } </>)
            }) 
            :
            <p className="text-center">No record found</p>
        }
              <div className="d-flex justify-content pb-3">
                <ul className="pagination flex justify-center mt-4 ">
                    {Array(Math.ceil(swaped.length / itemsPerPage))
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

export default MySwapedCar;
