import React from 'react'

const FormButton = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="flex justify-end">
                    <button type="submit" className="px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600" >Submit and Pay Fees</button>
                </div>
            </div>
        </>
    )
}

export default FormButton
