import React from 'react'
import Featured1 from "@/Assets/StepsImages/feature1.png"
import Featured2 from "@/Assets/StepsImages/featured2.png"
import Featured3 from "@/Assets/StepsImages/featured3.png"


const Featured = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-8">
                <h1 className='text-gray-950 font-semibold text-3xl text-center'>Featured In</h1>
                    <div className='flex flex=wrap mt-6 justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <img src={Featured1} alt="" />
                        <img src={Featured2} alt="" />
                        <img src={Featured3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
