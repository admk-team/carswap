import React from 'react'
import Featured1 from "@/Assets/StepsImages/feature1.jpg"
import Featured2 from "@/Assets/StepsImages/feature2 (1).png"
import Featured3 from "@/Assets/StepsImages/feature3.png"
import Featured4 from "@/Assets/StepsImages/feature4.png"

const Featured = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-8">
                <h1 className='text-gray-950 font-semibold text-3xl text-center'>Featured In</h1>
                    <div className='flex flex-wrap mt-10 justify-center'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-9 justify-items-center'>
                        <img src={Featured1} alt="" className='ml-8'/>
                        <img src={Featured2} alt="" className='w-32 h-28 '/>
                        <img src={Featured3} alt="" className=''/>
                        <img src={Featured4} alt="" className=''/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
