import React from 'react'
import MyImage from "@/Assets/card1.jpg"
const PendingAprroval = () => {
    return (
        <>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>Pending approval</h1>
            </div>
            <div className='pt-3 pl-12 '>
                <h1 className='font-extrabold text-black'>!! Waiting for admin approval</h1>
            </div>
            <div className='px-12 pt-2 pb-4'>
                <div className="flex flex-col  bg-white border-1 md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img className="object-cover md:h-auto md:w-48 " src={MyImage} alt="" />
                    <div className="flex flex-col justify-between p-2 leading-normal">
                        <h5 className="mb-1 text-2xl font-bold text-gray-900 ">2022 Toyota Revo</h5>
                        <h5 className="text-2xl font-bold dark:text-white text-amber-500">$ 43496.10</h5>
                        <div className="mt-1">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <th className="px-2  font-bold-300 text-gray-800">Condition</th>
                                        <th className="px-2  text-gray-800">Engine</th>
                                        <th className="px-2  text-gray-800">Mileage</th>
                                    </tr>
                                    <tr>
                                        <th className="px-2 text-sm sm:text-base text-gray-800">Brand New</th>
                                        <th className="px-2 text-sm sm:text-base text-gray-800">3000CC</th>
                                        <th className="px-2 text-sm sm:text-base text-gray-800">35000(MI)</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingAprroval
