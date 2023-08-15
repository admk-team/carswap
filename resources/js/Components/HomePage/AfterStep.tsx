import React from 'react'
import Screen1 from "@/Assets/StepsImages/no1.png"
import Screen2 from "@/Assets/StepsImages/no2.png"
import Screen3 from "@/Assets/StepsImages/no3.png"
import Screen4 from "@/Assets/StepsImages/no4-removebg-preview (2).png"

const AfterStep = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
        <div className=" md:container md:mx-auto">
          <div className="container mx-auto py-8 flex flex-wrap justify-center">
            <div className="text-2xl md:text-3xl font-semibold text-center mb-6 w-full">
              <h1>Your reliable partner for car sales</h1>
            </div>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center">

                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36'>
                    <img
                      src={Screen1}
                      alt="Image 1"
                      className="object-contain w-20 h-20 "
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-48'>
                    <h1 className="font-semibold text-xl">Guaranteed Purchase/Sell</h1>
                    {/* <p className='text-md mt-3'>We guarantee the purchase of your car in the best market price</p> */}
                  </div>
                </div>

                <div className="md:flex md:flex-col flex flex-col items-center md:text-center ">
                  <div className='flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36'>
                    <img
                      src={Screen2}
                      alt="Image 1"
                      className="object-contain w-20 h-20 "
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">Your Privacy <br /> is Secured</h1>
                    {/* <h1 className="font-semibold text-xl">No Costs. <br /> No Obligation</h1>
                    <p className='mt-3'>Book an online appointment at a date and time of your convenience. An affiliate near you will complete transcation with you in real time.</p> */}
                  </div>
                </div>


                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36'>
                    <img
                      src={Screen3}
                      alt="Image 1"
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">Cash in your <br />Bank within minutes</h1>
                    {/* <h1 className="font-semibold text-xl">Quick and Easy</h1>
                    <p className='mt-3'>No hassle, it is done within minutes.</p> */}
                  </div>
                </div>


                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36'>
                    <img
                      src={Screen4}
                      alt="Image 1"
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">We are fast and reliable</h1>
                    {/* <h1 className="font-semibold text-xl">Fast and Secure</h1>
                    <p className='mt-3'>Everything is done to save your time. And your identity is confidential</p> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AfterStep;



