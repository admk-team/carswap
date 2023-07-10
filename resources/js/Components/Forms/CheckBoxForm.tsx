import React from 'react'

const CheckBoxForm = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl text-gray-950 font-bold">Undertaking:</h1>
                    <div className=" py-2">

                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-dark-600 bg-gray-200 border-gray-300 rounded-lg " />
                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                               <p className='text-dark font-extrabold text-lg ml-2'> I declare that the vehicle detail I submitted is true and I will not waste carswap.ng time and resources
                                verifying this vehicle. Note, the name on the car paper must match the payment name on submission.
                                Discrepancy in name will disqualify your post.
                                </p>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default CheckBoxForm
