import React from 'react'
import CashBack from "@/Assets/money-back.png"
import InstantCash from "@/Assets/money-transfer.png"
import SaveCash from "@/Assets/stopwatch.png"
import Sheild from "@/Assets/shield.png"

const WhyUs = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
        <div className=" md:container md:mx-auto">
          <div className="container mx-auto py-8 flex flex-wrap justify-center">
            <div className="text-2xl md:text-3xl font-semibold text-center mb-6 w-full">
              <h1>Why choose us?</h1>
            </div>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center">

                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center  rounded-full w-36 h-36'>
                    <img
                      src={CashBack}
                      alt="Image 1"
                      className="object-contain w-20 h-20 "
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-48'>
                    <h1 className="font-semibold text-xl">Save 40% in cash for a new car</h1>
                    {/* <h1 className="font-semibold text-xl">  Save 50% in cash for your next item</h1>
                    <p className='text-md mt-3'>Set aside 50% of the total cost in cash to save for your upcoming purchase. </p> */}
                  </div>
                </div>

                <div className="md:flex md:flex-col flex flex-col items-center md:text-center ">
                  <div className='flex justify-center items-center rounded-full w-36 h-36'>
                    <img
                      src={InstantCash}
                      alt="Image 1"
                      className="object-contain w-20 h-20 "
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">Instant cash and Car for a downgrade.</h1>
                    {/* <h1 className="font-semibold text-xl">Get Instant cash for a downgrade.</h1>
                    <p className='mt-3'>Receive immediate cash by downgrading your item or possession</p> */}
                  </div>
                </div>


                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center  rounded-full w-36 h-36'>
                    <img
                      src={SaveCash}
                      alt="Image 1"
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">Sell like a boss, No contact with Strangers.</h1>
                    {/* <h1 className="font-semibold text-xl">Save hours trying to sell for a new item.</h1>
                    <p className='mt-3'>Avoid spending hours attempting to sell your current item in order to afford a new one.</p> */}
                  </div>
                </div>


                <div className="md:flex md:flex-col flex flex-col items-center md:text-center">
                  <div className='flex justify-center items-center  rounded-full w-36 h-36'>
                    <img
                      src={Sheild}
                      alt="Image 1"
                      className="object-contain w-24 h-24"
                    />
                  </div>
                  <div className='justify-center text-center mt-3 w-full md:w-44'>
                    <h1 className="font-semibold text-xl">Your transaction is 100% secured.</h1>
                    {/* <h1 className="font-semibold text-xl">Your transaction is 100% secured.</h1>
                    <p className='mt-3'>Rest assured, your transaction is completely secure and protected.</p> */}
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

export default WhyUs;



