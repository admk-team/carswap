import React from 'react'
import backgroundedImage from '../Assets/Login.png';
import GoogImage from "@/Assets/Google.png"
import FacImage from "@/Assets/facebook.png"

const LoginPage = () => {
  return (
    <>
       <div className="mx-auto max-w-screen-xl w-full h-full mt-12 p-12">
                <div className="border border-gray-500 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='m-20  '>
                            <h2 className="text-2xl text-center text-dark uppercase font-bold">Login</h2>
                            <p className="text xl text-center text-dark mb-4">Welcome to Carswap</p>
                            <form >
                                

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Username"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                </div>

                                

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                </div>

                               

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl mt-2"
                                    >
                                        Login Now
                                    </button>
                                    <p className="text xl text-center text-gray-900 mt-3"><b className='font-bold'>Login</b> with Others</p>
                                    <span className='mt-3  '>
                                        <img src={GoogImage} alt="" className='w-6 h-6'/>
                                    <a href='#' className="text xl text-gray-900 ">Login with <b className='font-bold'>Google</b></a>
                                    </span>
                                    <span className='mt-3  '>
                                        <img src={FacImage} alt="" className='w-6 h-6'/>
                                    <a href='#' className="text xl text-gray-900 ">Login with <b className='font-bold'>Facebook</b></a>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="hidden md:block rounded-r-xl overflow-hidden">
                            <img src={backgroundedImage} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LoginPage
