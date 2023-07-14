import React, { useState } from 'react'
import { Head, usePage, useForm } from '@inertiajs/react';
import ImageGallery from '@/Assets/image-gallery.png';
import ImagCheck from '@/Assets/check.png';

const  EditCarForm= ({ auth,brands,car}: any) => {
    const { errors } = usePage().props
    const [images, setImages] = useState([]);
    const { data, setData, post, processing } = useForm({
        title:car.title || '',
        brand_id: car.brand_id || '',
        condition: car.condition || '',
        engineCapacity:car.engine_capacity || '',
        mileage: car.mileage ||'',
        location: car.location || '',
        price: car.price || '',
        fuelType: car.fuel_type || '',
        model: car.model || '',
        transmission: car.transmission || '',
        drive: car.drive || '',
        interiorColor: car.interior_color || '',
        exteriorColor: car.exterior_color || '',
        description: car.description || '',
        images:null,
        _method:'put'
    });

    const handleImageChange = (e:any) => {
        if (e.target.files) {
            setData('images',e.target.files);
        }
    };

    function handleSubmit(){
        post(route('user.cars.update',car.id))
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10 ">
                <div className="border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl text-gray-950 font-bold">Car Information:</h1>
                    <h2 className="text-lg text-gray-700 mb-4">(All fields are * required)</h2>
                    <div className=" py-2">
                    <form className="row g-3" method='post' encType='multipart/form-data'>
                            <div className="grid md:grid-cols-2 md:gap-x-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="title"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.title} onChange={(e)=>setData('title',e.target.value)} />

                                    <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title *</label>
                                    {errors.title && <div className='text-danger'>{errors.title}</div>}
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                <select name="brand_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"value={data.brand_id} onChange={(e) => setData('brand_id', e.target.value)}>
                                        <option value="">Select Brands</option>
                                        {
                                            brands.map((brand:any)=>(
                                                <option value={brand.id} selected={car.brand_id && car.brand_id === brand.id}>{brand.title}</option>
                                            ))
                                        }

                                    </select>
                                    {errors.brand_id && <div className='text-danger'>{errors.brand_id}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                <select name="condition" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"value={data.condition} onChange={(e) => setData('condition', e.target.value)}>
                                        <option value="">Selecet Condition</option>
                                        <option value="Nigerian used" selected={car.condition && car.condition === 'Nigerian used'}>Nigerian used</option>
                                        <option value="Foreign used" selected={car.condition && car.condition === 'Foreign used'}>Foreign used</option>
                                        <option value="Brand New" selected={car.condition && car.condition === 'Brand New'}>Brand New</option>
                                    </select>
                                    {errors.condition && <div className='text-danger'>{errors.condition}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="engineCapacity"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={data.engineCapacity} onChange={(e)=>setData('engineCapacity',e.target.value)} />
                                   {errors.engineCapacity && <div className='text-danger'>{errors.engineCapacity}</div>}
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Capacity *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text"  name="mileage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "   value={data.mileage} onChange={(e)=>setData('mileage',e.target.value)} />
                                   {errors.mileage && <div className='text-danger'>{errors.mileage}</div>}
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage*</label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-x-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="price" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer" placeholder=" "  value={data.price} onChange={(e)=>setData('price',e.target.value)} />
                                    {errors.price && <div className='text-danger'>{errors.price}</div>}
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                <select name="Usedca" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"value={data.fuelType} onChange={(e) => setData('fuelType', e.target.value)}>
                                        <option value="option0">Select Fuel Type</option>
                                        <option value="Fuel">Fuel</option>
                                        <option value="Desiel">Desiel</option>

                                    </select>
                                    {errors.condition && <div className='text-danger'>{errors.condition}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="model" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.model} onChange={(e)=>setData('model',e.target.value)} />
                                    {errors.model && <div className='text-danger'>{errors.model}</div>}
                                    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modal *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="transmission"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer" placeholder=" " value={data.transmission} onChange={(e)=>setData('transmission',e.target.value)} />
                                     {errors.transmission && <div className='text-danger'>{errors.transmission}</div>}
                                    <label htmlFor="City" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transmission  *</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="drive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer" placeholder=" " value={data.drive} onChange={(e)=>setData('drive',e.target.value)} />
                                     {errors.drive && <div className='text-danger'>{errors.drive}</div>}
                                    <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Drive *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="interiorColor"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.interiorColor} onChange={(e)=>setData('interiorColor',e.target.value)} />
                                    {errors.interiorColor && <div className='text-danger'>{errors.interiorColor}</div>}
                                    <label htmlFor="Time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Interior Color *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text"  name="exteriorColor"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.exteriorColor} onChange={(e)=>setData('exteriorColor',e.target.value)} />
                                     {errors.exteriorColor && <div className='text-danger'>{errors.exteriorColor}</div>}
                                    <label htmlFor="Modal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exterior Color *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="location"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={data.location} onChange={(e)=>setData('location',e.target.value)}/>
                                      {errors.location && <div className='text-danger'>{errors.location}</div>}
                                    <label htmlFor="Year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name=" description"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={data.description} onChange={(e)=>setData('description',e.target.value)}/>
                                      {errors.location && <div className='text-danger'>{errors.location}</div>}
                                    <label htmlFor="Year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description *</label>
                                </div>
                            </div>
                             <div className="mx-auto max-w-screen-xl w-full h-full mt-6">
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
                                    <div className="bg-green-500 text-white py-2.5 px-3">
                                        + Add Photos
                                    </div>
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
                                <input id="dropzone-file" type="file" className="hidden" name="images" onChange={handleImageChange} multiple/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CondtionalAssForm/> */}
      {/* <CheckBoxForm/> */}
      <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                <div className="flex justify-end">
                    <button type="button" onClick={()=>handleSubmit()} className="px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600" >Save Change</button>
                </div>
            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCarForm