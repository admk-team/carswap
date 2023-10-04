import React, { useEffect, FormEventHandler, useState } from 'react'
import backgroundedImage from '../Assets/Login.png';
import GoogImage from "@/Assets/Google.png"
import FacImage from "@/Assets/facebook.png"
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PreviouImage from '@/Assets/left.png';

const LoginPage = ({ status, canResetPassword }: { status?: string, canResetPassword?: boolean }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        deactivated: false
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('user.logedIn'));
    };
    return (
        <>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 p-12">

                <div className="border border-gray-500 rounded-xl shadow-md">
                    <div className='absolute flex mt-1 ml-3'>
                        <Link href={route('front.index')} className=' text-blue-500 text-lg'>Home</Link>
                        <img src={PreviouImage} alt="" className='w-6 h-6 mt-1' />
                        <p className='text-lg'>Login</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className='m-6'>
                            <h2 className="text-2xl text-center text-dark uppercase font-bold mt-12">Login</h2>
                            <p className="text xl text-center text-dark mb-4">Welcome to Carswap</p>
                            {
                                errors && errors.deactivated ?
                                    <p className="text xl text-center text-danger mb-4">{errors.deactivated}</p>
                                    :
                                    ''
                            }
                            <form onSubmit={submit}>

                                <div className="mb-3">
                                    <input
                                        type="enail"
                                        id="email"
                                        value={data.email}
                                        placeholder="Enter Email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-pink-50"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl mt-2"
                                    >
                                        Login Now
                                    </button>
                                    <p className='mt-2'><Link href={route('user.register')} className='text-center underline'>Register new user?</Link></p>
                                    {/* <p className="text xl text-center text-gray-900 mt-3"><b className='font-bold'>Login</b> with Others</p>
                                    <div className="flex items-center justify-center mt-3">
                                        <img src={GoogImage} alt="" className="w-6 h-6" />
                                        <a href="#" className="text xl text-gray-900 ml-1">Login with <b className='font-bold'>Google</b></a>
                                    </div>
                                    <div className="flex items-center justify-center mt-3">
                                        <img src={FacImage} alt="" className="w-6 h-6" />
                                        <a href="#" className="text xl text-gray-900 ml-1">Login with <b className='font-bold'>Facebook</b></a>
                                    </div> */}
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
