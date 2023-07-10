import React from 'react'


const CondtionalAssForm = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl text-gray-950 font-bold">Condition Assessment:</h1>
                    <h2 className="text-base sm:text-xl  text-gray-700">(ratings are required. Rating is from 10-100%)</h2>
                    <div className=" py-2">
                    
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-14 text-dark">Engine:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "65%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">65%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold text-dark">Transmission:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "95%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">95%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-12 text-dark">Interior:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 ml-1 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 ml-1 rounded" style={{width: "85%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">85%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-12 text-dark">Exterior:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "75%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">75%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-3 text-dark">Suspension:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "70%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-4 text-dark">Electricals:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "95%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">95%</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <h1 className="text-base sm:text-xl font-extrabold mr-1 text-dark">General look:</h1>
                            <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                <div className="h-3 bg-blue-700 rounded" style={{width: "80%"}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">80%</span>
                        </div>


                    </div>
                </div>
            </div>
    
        </>
    )
}


export default CondtionalAssForm


// import React from 'react';

// const CondtionalAssForm = () => {
//   const categoryData = [
//     { name: 'Engine', percentage: 80 },
//     { name: 'Transmission', percentage: 90 },
//     { name: 'Interior', percentage: 70 },
//     { name: 'Exterior', percentage: 85 },
//     { name: 'Suspension', percentage: 75 },
//     { name: 'Electricals', percentage: 95 },
//     { name: 'General look', percentage: 60 },
//   ];

//   return (
//     <>
//       <div className="mx-auto max-w-screen-xl w-full h-full mt-6">
//         <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
//           <h1 className="text-xl font-bold" style={{ minWidth: '200px'}}>Condition Assessment:</h1>
//           <h2 className="text-lg text-gray-600 mb-2">(ratings are required. Rating is from 10-100%)</h2>
//           <div className=" py-2">
//             {categoryData.map((category) => (
//               <div className="flex items-center mt-2" key={category.name}>
//                 <h1 className="text-xl font-bold text-dark">{category.name} :</h1>
//                 <div className="w-2/4 h-3 mx-4 bg-gray-200 rounded">
//                   <div
//                     className="h-full bg-blue-700"
//                     style={{ width: `${category.percentage}%`,marginLeft: '0',
//                     marginRight: 'auto', }}
                    
//                   ></div>
//                 </div>
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
//                   {`${category.percentage}%`}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CondtionalAssForm;
