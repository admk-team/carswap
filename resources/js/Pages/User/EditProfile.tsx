import React, { useState } from 'react';
import NavBar2 from '@/Components/Navbar/NabBar2';
import ProfilePic from '@/Assets/userprofile.jpg';
import Footer from '../Footer/Footer';

export default function EditProfile({auth}:any) {
    const [passwordField, setPasswordField] = useState(false);
    const [nameField, setNameField] = useState(false);
    const [mailField, setMailField] = useState(false);
    const [numbField, setNumbField] = useState(false);
    const [cnicField, setCnicField] = useState(false);
    const [addressField, setAddressField] = useState(false);
    const [birthField, setBirthField] = useState(false);
    console.log(auth)
    return (
        <div>
            <NavBar2 auth={auth}/>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
            <div className="grid grid-cols-12 gap-4 mt-7 p-4">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col">
                        <p className="font-black text-gray-950 text-2xl">Edit Profile</p>
                        <p className="text-gray-600 text-xl">Hello User, where do you want to apply the changes?</p>
                        <div className="flex flex-col items-start mt-4">
                            <img
                                src={ProfilePic}
                                className="w-80 h-80 object-cover shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 rounded"
                                alt="Profile Picture"
                            />

                            <p className='text-center mt-2 mx-28 underline'>Change Photo</p>
                        </div>
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
                                <p className='mx-4'>{auth&&auth.user?auth.user.first_name +' '+ auth.user.last_name:''}</p>
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
                            <div className="flex flex-col">
                                <label >Edit Profile Name </label>
                                <label >First Name </label>
                                <input
                                     className="border border-gray-300 p-1 mt-1" value={auth&&auth.user?auth.user.first_name:''}
                                />
                                <label >Last Name </label>
                                <input
                                    type="profile"
                                    id="profile"
                                    className="border border-gray-300 p-1 mt-1" value={auth&&auth.user?auth.user.last_name:''}
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setNameField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
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
                                <p className='mx-4'>{auth&&auth.user?auth.user.email:''}</p>
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
                            <div className="flex flex-col">
                                <label >Edit Email Address</label>
                                <input
                                    className="border border-gray-300 p-2 mt-1"
                                    value={auth&&auth.user?auth.user.email:''}
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setMailField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
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
                                <p className='mx-4'>{auth&&auth.user?auth.user.phone_no:''}</p>
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
                            <div className="flex flex-col">
                                <label >Edit Phone Number</label>
                                <input
                                   value={auth&&auth.user?auth.user.phone_no:''}
                                    className="border border-gray-300 p-2 mt-1"
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setNumbField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
                        </div>
                    )}
                    <hr className="bg-gray-800 mt-3" />
                    {!cnicField ? (
                        <div className="flex flex-wrap justify-between mt-3">
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-wrap gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>

                                    <p className='text-gray-950'>Cnic Number(Government ID) </p>
                                </div>
                                <p className='mx-4'>292516514316</p>
                            </div>

                            <p
                                className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                onClick={() => setCnicField(true)}
                            >
                                Edit Profile
                            </p>
                        </div>
                    ) : (
                        <div className="mt-3 border p-4">
                            <div className="flex flex-col">
                                <label >Edit Cnic Number(Government ID)</label>
                                <input
                                    type="cnic"
                                    id="cnic"
                                    className="border border-gray-300 p-1 mt-1"
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setCnicField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
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
                                <p className='mx-4'>{auth&&auth.user?auth.user.address:''}</p>
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
                            <div className="flex flex-col">
                                <label >Edit Address</label>
                                <input
                                className="border border-gray-300 p-2 mt-1"
                                value={auth&&auth.user?auth.user.address:''}
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setAddressField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
                        </div>
                    )}
                    <hr className="bg-gray-800 mt-3" />
                    {!birthField ? (
                        <div className="flex flex-wrap justify-between mt-3">
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-wrap gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                    <p className='text-gray-950'>Date of Birth </p>
                                </div>
                                <p className='mx-4'>Not provided yet</p>
                            </div>

                            <p
                                className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                onClick={() => setBirthField(true)}
                            >
                                Edit Profile
                            </p>
                        </div>
                    ) : (
                        <div className="mt-3 border p-4">
                            <div className="flex flex-col">
                                <label >Edit Date of Birth</label>
                                <input
                                    type="dob"
                                    id="dob"
                                    className="border border-gray-300 p-1 mt-1"
                                />
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                    Save
                                </button>
                                <p
                                    className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                    onClick={() => setBirthField(false)}
                                >
                                    Cancel Change
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="col-span-12 md:col-span-6 mt-5">
                    <div className="flex flex-col mx-3 h-5/6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-bold text-gray-950 mb-3">Security:</h2>
                            <p className="text-gray-700">User, here is your account security:</p>
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
                                    <div className="flex flex-col">
                                        <label htmlFor="currentPassword">Current Password</label>
                                        <input
                                            type="password"
                                            id="currentPassword"
                                            className="border border-gray-300 p-1 mt-1"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            className="border border-gray-300 p-1 mt-1"
                                        />
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                        <input
                                            type="password"
                                            id="confirmNewPassword"
                                            className="border border-gray-300 p-1 mt-1"
                                        />
                                    </div>

                                    <div className="flex justify-between w-full mt-2">
                                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded">
                                            Save
                                        </button>
                                        <p
                                            className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                                            onClick={() => setPasswordField(false)}
                                        >
                                            Cancel Change
                                        </p>
                                    </div>
                                </div>
                            )}

                            <hr className="bg-gray-800 mt-3" />

                            <div className="flex flex-wrap justify-between mt-3">
                                <p>Account</p>
                                <p
                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                >
                                    Deactivate Account
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}