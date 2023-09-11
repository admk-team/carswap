import React from 'react'

function Newsletter() {
  return (
    <div className="w-full p-5">
    <div className="container flex flex-col xl:flex-row mx-auto px-5 py-8 xl:py-14 text-gray-900 bg-gray-200 rounded-2xl">
        <div className="w-full mb-6 xl:mb-0 text-center"> 
            <div className="mb-1 text-3xl font-extrabold text-gray-900">Subcribe to our newsletter</div>
            <div className="text-lg">get the latest information,updates and more </div>
        </div>
        <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input type="text" placeholder="Enter your email" className="w-full sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"/>
                <button type="submit" className="w-full sm:w-1/4 h-12 text-white bg-emerald-600 rounded-lg shadow  duration-300 ease-in-out hover:bg-purple-700">Subscribe</button>
            </div>
        </div>
    </div>
</div>


  )
}

export default Newsletter