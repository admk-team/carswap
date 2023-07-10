
import React from 'react';
import backgroundImage from '@/Assets/card1.jpg';
import SwappedImage from '@/Assets/Swapped.png'

const MySwapedCar = () => {
    return (
        <>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>Swapped Cars</h1>
            </div>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>My Cars</h1>
            </div>
            <div className='px-4  mb-2 flex flex-wrap justify-center'>
                <div className='max-w-xs mx-auto bg-white border m-2'>
                    <img className='w-full h-auto' src={backgroundImage} alt='Product' />
                    <div className='p-2'>
                        <h5 className='mb-1 text-2xl font-bold text-gray-900'>2022 Toyota Revo</h5>
                        <h5 className='text-2xl font-bold dark:text-white text-amber-500'>$ 43496.10</h5>
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
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>Brand New</th>
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>3000CC</th>
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>35000(MI)</th>
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
                    <img className='w-full h-auto' src={backgroundImage} alt='Product' />
                    <div className='p-2'>
                        <h5 className='mb-1 text-2xl font-bold text-gray-900'>2022 Toyota Revo</h5>
                        <h5 className='text-2xl font-bold dark:text-white text-amber-500'>$ 43496.10</h5>
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
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>Brand New</th>
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>3000CC</th>
                                        <th className='px-2 text-sm sm:text-base text-gray-800'>35000(MI)</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Add more cards as needed */}
            </div>
        </>
    );
};

export default MySwapedCar;
