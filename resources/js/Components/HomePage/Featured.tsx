import React from 'react'
import Featured1 from "@/Assets/StepsImages/feature1.jpg"
import Featured2 from "@/Assets/StepsImages/feature2.png"
import Featured3 from "@/Assets/StepsImages/feature3.png"
import Featured4 from "@/Assets/StepsImages/feature4.png"

const Featured = () => {
    return (
        <>
        <div className="mx-auto max-w-screen-xl w-full h-full mt-8">
                <h1 className='text-2xl md:text-3xl font-semibold text-center w-full '>Featured in</h1>
                    <div className='flex flex=wrap mt-6 justify-center'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-20 justify-center'>
                        <img src={Featured1} alt=""className="w-25 h-25  md:w-45  md:h-60   object-contain"  />
                        <img src={Featured2} alt=""className="w-25 h-20  md:w-45  md:h-60  object-contain"  />
                        <img src={Featured3} alt="" className="w-50 h-50 md:w-50  md:h-60  object-contain" />
                        <img src={Featured4} alt="" className="w-35 h-35 md:w-60  md:h-60  object-contain" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
