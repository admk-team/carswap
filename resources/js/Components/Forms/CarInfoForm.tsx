
import React, { useState } from 'react'

import { Head, usePage, useForm } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';

import ImageGallery from '@/Assets/image-gallery.png';
import ImagCheck from '@/Assets/check.png';
import CondtionalAssForm from '@/Components/Forms/CondtionalAssForm'
import CheckBoxForm from '@/Components/Forms/CheckBoxForm'

    const  CarInfohtmlForm= ({ auth }: any) => {
        const { errors } = usePage().props
        const [first_name,setfirst_name]=useState("")
        const [last_name,setlast_name]=useState("")
        const [Phone,setPhone]=useState("")
        const [email,setemail]=useState("")
        const [Car_address,setCar_address]=useState("") 
        const [State,setState]=useState("")
        const [Address,setAddress]=useState("")
        const [City,setCity]=useState("")
        const [date,setdate]=useState("")
        const [time,settime]=useState("")
        const [Modal1,setModal1]=useState("")
        const [Year,setYear]=useState("")
        const [Trim,setTrim]=useState("")
        const [Price,setPrice]=useState("")
        const [Usedcar,setUsedcar]=useState("")
        const [Milage,setMilage]=useState("")
        const [Transmission_Type,setTransmission_Type]=useState("")
        const [Engin_size,setEngin_size]=useState("")
        const [comments,setComments]=useState("")
        
        const [image, setImage] = useState(null);

        function handleImageChange(e:any) {
          setImage(e.target.files[0]);
        }
      
        function handleSubmit(e:any){
          e.preventDefault();
          Inertia.post(route('user.cars.store'), {first_name,last_name,email,Phone,Car_address,State,Address,City,date,time,Modal1,Year,Price,Usedcar,Milage,Transmission_Type,Engin_size,comments})
        }
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">Car Information:</h1>
                    <h2 className="text-lg text-gray-600 mb-4">(All fields are * required)</h2>
                    <div className=" py-2">
                    <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div className="grid md:grid-cols-2 md:gap-x-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="first_name"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={first_name} onChange={(e)=>setfirst_name(e.target.value)} required />
                                    <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={last_name} onChange={(e)=>setlast_name(e.target.value)} required />
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name *</label>
                                </div>
                                {/* <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email} onChange={(e)=>setemail(e.target.value)} required />
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="Number"  name="Phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={Phone} onChange={(e)=>setPhone(e.target.value)} required />
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number *</label>
                                </div> */}
                            </div>
                           
                            {/* <div className="grid md:grid-cols-2 md:gap-x-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Car-address" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Car_address} onChange={(e)=>setCar_address(e.target.value)} required />
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="State" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={State} onChange={(e)=>setState(e.target.value)} required />
                                    <label htmlFor="State" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Address}  onChange={(e)=>setAddress(e.target.value)} required />
                                    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="City"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer" placeholder=" " value={City}  onChange={(e)=>setCity(e.target.value)} required />
                                    <label htmlFor="City" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <b> or Use <a href=""><u>Google Map</u></a></b>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer" placeholder=" "value={date} onChange={(e)=>setdate(e.target.value)} required />
                                    <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inspection Date *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="time" name="Time" id="Time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={time}  onChange={(e)=>settime(e.target.value)} required />
                                    <label htmlFor="Time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inspection Time *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text"  name="Modal"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Modal1} onChange={(e)=>setModal1(e.target.value)} required />
                                    <label htmlFor="Modal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modal *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Year"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={Year} onChange={(e)=>setYear(e.target.value)} required />
                                    <label htmlFor="Year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text"  name="Trim"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Trim} onChange={(e)=>setTrim(e.target.value)} required />
                                    <label htmlFor="Trim" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Trim *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Price"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={Price} onChange={(e)=>setPrice(e.target.value)} required />
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <select name="Usedcar"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={Usedcar} onChange={(e)=>setUsedcar(e.target.value)} required >
                                        <option value="option1">Nigerian used</option>
                                        <option value="option2">Foreign used</option>
                                        <option value="option3">Brand New</option>
                                    </select>
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Milage"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Milage} onChange={(e)=>setMilage(e.target.value)} required />
                                    <label htmlFor="Mileage" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="Transmission_Type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={Transmission_Type} onChange={(e)=>setTransmission_Type(e.target.value)} required />
                                    <label htmlFor="Transmission" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transmission Type *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text"  name="Engin_size" id="Engine" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={Engin_size} onChange={(e)=>setEngin_size(e.target.value)} required />
                                    <label htmlFor="Engine" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Size *</label>
                                </div>
                            </div> */}
                            {/* <div className="relative z-0 w-full mb-6 group">
                                <textarea name="Comments"  rows={3} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={comments}  onChange={(e)=>setComments(e.target.value)} required ></textarea>
                                <label htmlFor="Comments" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comments *</label>
                            </div> */}
                            {/* <div className="mx-auto max-w-screen-xl w-full h-full mt-6">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">Upload Image:</h1>
                    <div className="py-2">
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex items-center justify-center pb-3">
                                    <img src={ImageGallery} className="mb-2 w-12 h-12 mr-4" alt="" />
                                    <button type="button" className="bg-green-500 text-white py-2.5 px-3">
                                        + Add Photos
                                    </button>
                                </div>
                                <div className="flex flex-wrap justify-around">
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Add at least 15 pictures</b> to improve chances for a quick sale.
                                        </p>
                                    </span>
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Adding clear Front, Back, and Interior Pictures</b> of your car increases
                                            the quality of your Ad and gets you noticed more.
                                        </p>
                                    </span>
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Photos should be in</b> jpeg, jpg, png, gif format only.
                                        </p>
                                    </span>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div> */}
            <CondtionalAssForm/>
      <CheckBoxForm/>
      <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="flex justify-end">
                    <button type="submit" className="px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600" >Submit and Pay Fees</button>
                </div>
            </div>
           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarInfohtmlForm
