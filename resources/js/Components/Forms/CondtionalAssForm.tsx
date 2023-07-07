import React from 'react'

const CondtionalAssForm = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">Condition Assessment:</h1>
                    <h2 className="text-lg text-gray-600 mb-4">(ratings are required. Rating is from 10-100%)</h2>
                    <div className="px-20 py-2">
                    
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Engine :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Transmission :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Interior :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Exterior :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Suspension :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">Electricals :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <h1 className="text-xl font-extrabold text-dark">General look :</h1>
                            <div className="w-2/4 h-4 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-4 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}


export default CondtionalAssForm
