
import { Link, useForm } from "@inertiajs/react";
import backgroundImage from '@/Assets/card1.jpg';
import SwappedImage from '@/Assets/Swapped.png'
import React, { useState, useEffect } from "react";

const MySwapedCar = ({swaped, cars}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsData, setCarsData] = useState([]);
    const itemsPerPage = 3;

    useEffect(() => {
        setCarsData(swaped);
    }, [swaped]);
    const { get } = useForm()
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const car = carsData.slice(indexOfFirstItem, indexOfLastItem);

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
            swaped.map((swap:any, index:any) =>{
                console.log('sc :  ', swap.car)
                let myCar = cars.find((mcar:any)=>{
                    return mcar.id === swap.mycar_id
                })
                
                return (<>
                <div className='' key={index}>
                    <div className='px-4  mb-2 flex flex-wrap justify-center'>
                        <div className='max-w-xs mx-auto bg-white border m-2'>
                            <img className='w-full h-auto' src={'/storage' + myCar?.images[0]} alt='Product' />
                            <div className='p-2'>
                                <h5 className='mb-1 text-2xl font-bold text-gray-900'>{myCar.title}</h5>
                                <h5 className='text-2xl font-bold dark:text-white text-amber-500'>$ {myCar.price}</h5>
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
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{myCar.condition}</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{myCar.engine_capacity} CC</th>
                                                <th className='px-2 text-sm sm:text-base text-gray-800'>{myCar.mileage} (MI)</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-10 h-10' src={SwappedImage} alt="" />
                        </div>
                        <div className='max-w-xs mx-auto bg-white border m-2'>
                             <img className='w-full h-auto' src={'/storage' + swap.car?.images.split(',')[0] } alt='Product' />
                            <div className='p-2'>
                                <h5 className='mb-1 text-2xl font-bold text-gray-900'>{swap.car?.title}</h5>
                                <h5 className='text-2xl font-bold dark:text-white text-amber-500'>$ {swap.car?.price}</h5>
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
                </>)
            }) 
            :
            <p className="text-center">No record found</p>
        }              
            {/* end */}
           
        </>
        
    );
};

export default MySwapedCar;
