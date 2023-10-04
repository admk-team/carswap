import InputLabel from '@/Components/InputLabel';
import NavBar2 from '@/Components/Navbar/NabBar2';
import ProfilePic from '@/Assets/userprofile.jpg';
import Footer from '../Footer/Footer';
import { useForm } from '@inertiajs/react';
import UserIcon from '@/Assets/user-icon.jpg';
import React, { useState, useEffect } from "react";
import TextInput from '@/Components/TextInput';
import { useRef, FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

export default function EditProfile({ auth, success, errors, error }: any) {
    const currentPasswordInput = useRef<HTMLInputElement>();
    const passwordInput = useRef<HTMLInputElement>();
    const [passwordField, setPasswordField] = useState(false);
    const [nameField, setNameField] = useState(false);
    const [mailField, setMailField] = useState(false);
    const [numbField, setNumbField] = useState(false);
    const [cnicField, setCnicField] = useState(false);
    const [addressField, setAddressField] = useState(false);
    const [birthField, setBirthField] = useState(false)
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (success) {
            setSuccessMessage(success);
        }
        if (error) {
            setErrorMessage(error);
        }
    }, []);
    const [image, setImage] = useState('');
    const [uploadNow, setUploadNow] = useState(false);



    const { data, setData, post, put, reset, processing, recentlySuccessful } = useForm({
        first_name: auth.user.first_name || '',
        last_name: auth.user.last_name || '',
        phone_no: auth.user.phone_no || '',
        address: auth.user.address || '',
        city: auth.user.city || '',
        state: auth.user.state || '',

        email: auth.user.email || '',
        // password: user.password,
        image: auth.user.image || '',

        current_password: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        setImage('/storage/' + data.image);
    }, []);

    function handleImageChange(e: any) {
        setImage(URL.createObjectURL(e.target.files[0]))
        setUploadNow(true);
        setData('image', e.target.files[0]);
    }

    function handleSubmit() {
        post(route('user.updateProfile'));
        setUploadNow(false);
    }

    function updatePassword() {
        post(route('user.updatePassword'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };


    return (
        <div>
            <NavBar2 auth={auth} />
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="grid grid-cols-12 gap-4 mt-7 p-4">

                    <div className="col-span-12 md:col-span-6">
                        <div className="flex flex-col">
                            <p className="font-black text-gray-950 text-2xl">Edit Profile</p>
                            {successMessage && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {successMessage}
                                    <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                            {errorMessage && (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    {errorMessage}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                            <p className="text-gray-600 text-xl">Hello <strong>{auth.user?.first_name}</strong>, where do you want to apply the changes?</p>
                            <form className="row g-3" method='post' encType='multipart/form-data'>
                                <div className="flex flex-col items-start mt-4 relative transform hover:scale-110 transition-all duration-200">
                                    <input className="absolute top-0 left-0 w-full h-full opacity-0 z-10" type="file" name='image' onChange={handleImageChange} />
                                    <img
                                        src={image ? image : UserIcon}
                                        className="w-80 h-80 object-cover shadow-md hover:shadow-lg rounded"
                                        alt="Profile Picture"
                                    //   onClick={() => document.querySelector('input[type=file]').click()}

                                    />
                                </div>
                                {uploadNow && (<div className='flex col-12'>
                                    <button type="button" onClick={() => handleSubmit()} className='text-center underline py-2 px-3 bg-green-500 rounded text-white'>Upload Photo Now</button>
                                </div>)}
                            </form>
                        </div>

                        {!nameField ? (
                            <div className="flex flex-wrap justify-between mt-3">
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-wrap gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <p className='text-gray-950'>Profile Name</p>
                                    </div>
                                    <p className='mx-4'>{(auth && auth.user) ? auth.user?.first_name + ' ' + auth.user?.last_name : ''}</p>
                                </div>

                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setNameField(true)}
                                >
                                    Edit Profile
                                </p>
                            </div>
                        ) : (
                            <div className="mt-3 border p-4">
                                <form className="row g-3" method='post'>
                                    <div className="flex flex-col">
                                        <label >Edit Profile Name </label>
                                        <label >First Name </label>
                                        <input
                                            type="text" name='first_name'
                                            className="border border-gray-300 p-1 mt-1" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)}
                                        />
                                        <label >Last Name </label>
                                        <input
                                            type="text"
                                            id="profile"
                                            className="border border-gray-300 p-1 mt-1" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-2">
                                        <button type="button" onClick={() => handleSubmit()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                            Save
                                        </button>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setNameField(false)}
                                        >
                                            Cancel Change
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}
                        <hr className="bg-gray-800 mt-3" />
                        {!mailField ? (
                            <div className="flex flex-wrap justify-between mt-3">
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-wrap gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>

                                        <p className='text-gray-950'>Email Address</p>
                                    </div>
                                    <p className='mx-4'>{auth && auth.user ? auth.user.email : ''}</p>
                                </div>

                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setMailField(true)}
                                >
                                    Edit Profile
                                </p>
                            </div>
                        ) : (
                            <div className="mt-3 border p-4">
                                <form className="row g-3" method='post'>
                                    <div className="flex flex-col">
                                        <label >Edit Email Address</label>
                                        <input
                                            className="border border-gray-300 p-2 mt-1"
                                            value={data.email} onChange={(e) => setData('email', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-2">
                                        <button type="button" onClick={() => handleSubmit()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                            Save
                                        </button>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setMailField(false)}
                                        >
                                            Cancel Change
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}
                        <hr className="bg-gray-800 mt-3" />
                        {!numbField ? (
                            <div className="flex flex-wrap justify-between mt-3">
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-wrap gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <p className='text-gray-950'>Phone Number</p>
                                    </div>
                                    <p className='mx-4'>{auth && auth.user ? auth.user.phone_no : ''}</p>
                                </div>

                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setNumbField(true)}
                                >
                                    Edit Profile
                                </p>
                            </div>
                        ) : (
                            <div className="mt-3 border p-4">
                                <form className="row g-3" method='post'>
                                    <div className="flex flex-col">
                                        <label >Edit Phone Number</label>
                                        <input
                                            value={data.phone_no} onChange={(e) => setData('phone_no', e.target.value)}
                                            className="border border-gray-300 p-2 mt-1"
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-2">
                                        <button type="button" onClick={() => handleSubmit()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                            Save
                                        </button>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setNumbField(false)}
                                        >
                                            Cancel Change
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}

                        <hr className="bg-gray-800 mt-3" />
                        {!addressField ? (
                            <div className="flex flex-wrap justify-between mt-3">
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-wrap gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>

                                        <p className='text-gray-950'>Address </p>
                                    </div>
                                    <p className='mx-4'>{auth && auth.user ? auth.user.address : ''}</p>
                                </div>

                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setAddressField(true)}
                                >
                                    Edit Profile
                                </p>
                            </div>
                        ) : (
                            <div className="mt-3 border p-4">
                                <form className="row g-3" method='post' onSubmit={handleSubmit}>
                                    <div className="flex flex-col">
                                        <label >Edit Address</label>
                                        <input
                                            className="border border-gray-300 p-2 mt-1"
                                            value={data.address} onChange={(e) => setData('address', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label >City</label>
                                        <input
                                            className="border border-gray-300 p-2 mt-1"
                                            value={data.city} onChange={(e) => setData('city', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label >State</label>
                                        <input
                                            className="border border-gray-300 p-2 mt-1"
                                            value={data.state} onChange={(e) => setData('state', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-2">
                                        <button type="button" onClick={() => handleSubmit()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                            Save
                                        </button>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setAddressField(false)}
                                        >
                                            Cancel Change
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>

                    <div className="col-span-12 md:col-span-6 mt-5">
                        <div className="flex flex-col mx-3 h-5/6">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-bold text-gray-950 mb-3">Security:</h2>
                                <p className="text-gray-700"><strong>{auth.user?.first_name}</strong>, here is your account security:</p>
                                <hr className="bg-gray-800 mt-3" />

                                {!passwordField ? (
                                    <div className="flex flex-wrap justify-between mt-3">
                                        <p>Password</p>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setPasswordField(true)}
                                        >
                                            Change Password
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-3">

                                        <form onSubmit={updatePassword} className="mt-6 space-y-6">
                                            <div>
                                                <InputLabel htmlFor="current_password" value="Current Password" />

                                                <TextInput
                                                    id="current_password"
                                                    ref={currentPasswordInput}
                                                    value={data.current_password}
                                                    onChange={(e) => setData('current_password', e.target.value)}
                                                    type="password"
                                                    className="mt-1 block w-full"
                                                    autoComplete="current-password"
                                                />

                                                <InputError message={errors.current_password} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="password" value="New Password" />

                                                <TextInput
                                                    id="password"
                                                    ref={passwordInput}
                                                    value={data.password}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    type="password"
                                                    className="mt-1 block w-full"
                                                    autoComplete="new-password"
                                                />

                                                <InputError message={errors.password} className="mt-2" />
                                            </div>

                                            <div>
                                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                                <TextInput
                                                    id="password_confirmation"
                                                    value={data.password_confirmation}
                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                    type="password"
                                                    className="mt-1 block w-full"
                                                    autoComplete="new-password"
                                                />

                                                <InputError message={errors.password_confirmation} className="mt-2" />
                                            </div>

                                            <div className="flex justify-between w-full mt-2">
                                                <button type="button" onClick={() => updatePassword()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                                    Save
                                                </button>
                                                <p
                                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                                    onClick={() => setPasswordField(false)}
                                                >
                                                    Cancel Change
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer auth={auth}/>
        </div>
    );
}
