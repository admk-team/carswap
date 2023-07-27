
import React, { FormEventHandler, useEffect } from 'react';
import backgroundedImage from '../Assets/maxresdefault 1.jpg';
// import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import PreviouImage from "@/Assets/left.png"

const SignUpPage = () => {
    const { data, setData, post, errors, reset, processing } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleSubmit = () => {
        // e.preventDefault();
        post(route('user.signup'));
    };
    
    return (
        <>
        <Head title='Register'/>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 p-12">
                <div className="border border-gray-500 rounded-xl shadow-md">
                <div className='absolute flex mt-1 ml-3'>
                        <Link href={route('front.index')} className=' text-blue-500 text-lg'>Home</Link>
                        <img src={PreviouImage} alt="" className='w-6 h-6 mt-1' />
                        <p className='text-lg'>SignUp</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='m-6 '>
                            <h2 className="text-2xl text-center text-dark uppercase font-bold mt-12">Sign Up</h2>
                            <p className="text xl text-center text-dark mb-4">Welcome to Carswap</p>
                            <form >
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={data.first_name}
                                        placeholder="First Name"
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.first_name} className="mt-2" />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={data.last_name}
                                        placeholder="Last Name"
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.last_name} className="mt-2" />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.email} className="mt-2" />

                                </div>

                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        id="phone_no"
                                        name="text"
                                        value={data.phone_no}
                                        placeholder="Phone Number"
                                        onChange={(e) => setData('phone_no', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.phone_no} className="mt-2" />

                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="password_confirmation"                                        placeholder="Confirm Password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="text-start">
                                    <Link href={route('user.login')} className='underline'>Already have an account?</Link>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl mt-2"
                                        onClick={()=>handleSubmit()}
                                        disabled={processing}
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



