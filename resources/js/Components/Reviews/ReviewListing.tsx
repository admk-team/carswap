import React from 'react'
import Avatar from "@/Assets/user-icon.jpg";

function ReviewListing({ auth, review }: any) {
    const dateString = review && review.created_at ? review.created_at : null;
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });
    const starLength = review && review.rating ? new Array(review.rating).fill(null) : 0;
    return (
        <div>
            <div className="mt-3 flex justify-between"> {/* Remove the extra 'justify-' prefix */}
                <div className="flex">
                    <img src={review && review.user && review.user.image ? '/storage/' + review.user.image : Avatar} alt="" className="rounded-full w-20 h-20 mt-3" />
                    <div className="grid">
                        <span className="mt-2 ms-2 max-w-lg text-xl font-semibold leading-relaxed text-gray-900 dark:text-white">{review && review.user ? review.user.first_name + ' ' + (review.user.last_name?review.user.last_name:'') : 'N/A'}</span>
                        <div className="flex space-x-1 mx-2">
                            {
                                starLength && starLength.length > 0 ?
                                    starLength.map((_, index) => (
                                        <label >
                                            <svg className={`w-4 h-4 cursor-pointer text-emerald-400`}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </label>
                                    ))
                                    :
                                    ''
                            }
                        </div>
                        <span className="ms-2 mt-0 text-lg font-small text-gray-900 dark:text-white">{formattedDate ? formattedDate : 'N/A'}</span>
                    </div>
                </div>
            </div>
            <div className="mt-2">

                <p className='text-gray-950 text-lg mt-2'>{review && review.message ? review.message : 'N/A'}</p>
            </div>
            <hr className='mt-2'/>
        </div>
    )
}

export default ReviewListing
