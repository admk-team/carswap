import React from 'react'
import Featured1 from "@/Assets/StepsImages/bloomberg-logo.png"
import Featured2 from "@/Assets/StepsImages/world-gov-summit-logo.png"
import Featured3 from "@/Assets/StepsImages/the-national-Logo.png"
import Featured4 from "@/Assets/StepsImages/gulf-news-logo.png"
import Featured5 from "@/Assets/StepsImages/emirates-news-logo.png"
import Featured6 from "@/Assets/StepsImages/khaleej-times-logo.png"
import Featured7 from "@/Assets/StepsImages/forbes-logo.png"
import Featured8 from "@/Assets/StepsImages/gulf-business-logo.png"
import Featured9 from "@/Assets/StepsImages/arabian-business-logo.png"


const Featured = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-8">
                <h1 className='text-2xl md:text-3xl font-semibold text-center w-full '>Featured in</h1>
                    <div className='flex mt-6 justify-center items-center '>
                    <div className='grid grid-cols-3 md:grid-cols-9 gap-10 ml-3 mr-3'>
                        <img src={Featured1} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured2} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured3} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured4} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured5} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured6} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured7} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured8} alt="" className='w-24 h-20 cursor-pointer'/>
                        <img src={Featured9} alt="" className='w-24 h-20 cursor-pointer'/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
