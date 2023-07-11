
import React from 'react';
import backgroundedImage from '../Assets/maxresdefault 1.jpg';

const SignUpPage = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 p-12">
                <div className="border border-gray-500 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='m-20  '>
                            <h2 className="text-2xl text-center text-dark uppercase font-bold">Sign Up</h2>
                            <p className="text xl text-center text-dark mb-4">Welcome to Carswap</p>
                            <form >
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                </div>

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
                                        type="tel"
                                        id="phone"
                                        placeholder="Phone Number"
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

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl mt-2"
                                    >
                                        Sign Up
                                    </button>
                                    
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
    );
};

export default SignUpPage;



