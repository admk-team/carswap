import React from 'react'
import ReviewsCard from './ReviewsCard'

const Reviews = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full -mt-8 ">
                <div className="bg-black mt-24 md:container md:mx-auto">
                    <div className="container mx-auto py-8 flex flex-wrap justify-center">
                        <div className="text-2xl md:text-3xl text-white font-bold text-center mb-6 w-full">
                            <h1>What Clients Thinks About Us</h1>
                        </div>
                        <ReviewsCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews


