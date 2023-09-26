import React, { useState } from 'react';
import NavBar from '@/Components/Navbar/NavBar';
import AnotherBG from '@/Assets/AboutUsWalpeper.png';
import Footer from '../Footer/Footer';
import { Head, Link, router, useForm } from '@inertiajs/react';
import PreviouImage from "@/Assets/left.png"


export default function Partner({ auth, success, errors }: any) {
    const {data, setData,post} = useForm({
        name: '',
        age: '',
        state: '',
        local_government: '',
        type_of_partnership: '',
        email: '',
        whatsapp_number: '',
      });
    
      // Function to handle form field changes 
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      // Function to handle form submission
      const handleSubmit = (e:any) => {
        e.preventDefault();
        post(route('partners.store'))
        // You can use the formData object to send the data to the server using axios or any other method.
        // For example:
        // const response = await axios.post('/api/your-endpoint', formData);
    };
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AnotherBG})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center items-center h-full">
                <div className="bg-white w-11/12 p-7 rounded-md shadow-lg max-w-xl mx-auto bg-opacity-80 backdrop-blur-lg">
                <div className='absolute flex -mt-4 -ml-2'>
                        <Link href={route('front.index')} className=' text-blue-500 text-lg'>Home</Link>
                        <img src={PreviouImage} alt="" className='w-6 h-6 mt-1' />
                        <p className='text-lg'>Become A Partner</p>
                    </div>
                    <h2 className="text-3xl text-center text-dark uppercase font-bold mt-12">Become A Partner</h2>
                    <p className="text-lg text-center text-dark mb-6">Become a partner with us right now.</p>
                    <hr className="mb-6 border-t-2 border-gray-500 border-opacity-50" />
                    <form method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={data.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="w-full">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={data.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="w-full">
                <select
                  name="state"
                  value={data.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select State</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Adamawa">Adamawa</option>
                 <option value="Akwa Ibom">Akwa Ibom</option>
        <option value="Anambra">Anambra</option>
        <option value="Bauchi">Bauchi</option>
        <option value="Bayelsa">Bayelsa</option>
        <option value="Benue">Benue</option>
        <option value="Borno">Borno</option>
        <option value="Cross River">Cross River</option>
        <option value="Delta">Delta</option>
        <option value="Ebonyi">Ebonyi</option>
        <option value="Edo">Edo</option>
        <option value="Ekiti">Ekiti</option>
        <option value="Enugu">Enugu</option>
        <option value="Gombe">Gombe</option>
        <option value="Imo">Imo</option>
        <option value="Jigawa">Jigawa</option>
        <option value="Kaduna">Kaduna</option>
        <option value="Kano">Kano</option>
        <option value="Katsina">Katsina</option>
        <option value="Kebbi">Kebbi</option>
        <option value="Kogi">Kogi</option>
        <option value="Kwara">Kwara</option>
        <option value="Lagos">Lagos</option>
        <option value="Niger">Niger</option>
        <option value="Ogun">Ogun</option>
        <option value="Ondo">Ondo</option>
        <option value="Osun">Osun</option>
        <option value="Oyo">Oyo</option>
        <option value="Plateau">Plateau</option>
        <option value="Rivers">Rivers</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Taraba">Taraba</option>
        <option value="Yobe">Yobe</option>
        <option value="Zamfara">Zamfara</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="local_government"
                placeholder="Local government"
                value={data.local_government}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mb-6">
              <select
                name="type_of_partnership"
                value={data.type_of_partnership}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Type of partnership</option>
                <option value="trader">Trader</option>
                <option value="inspection-officer">Inspection Officer</option>
                <option value="freelancer">Freelancer</option>
                <option value="Mechanic">Mechanic</option>
                <option value="Driver">Driver</option>
              </select>
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
               {errors.email && <div className='text-danger'>{errors.email}</div>}
            </div>
            <div className="mb-6">
              <input
                type="number"
                name="whatsapp_number"
                placeholder="WhatsApp No"
                value={data.whatsapp_number}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-500 rounded-md bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
             {errors.whatsapp_number && <div className='text-danger'>{errors.whatsapp_number}</div>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Submit
              </button>
            </div>
          </form>
                </div>
            </div>
        </div>
    );
}
