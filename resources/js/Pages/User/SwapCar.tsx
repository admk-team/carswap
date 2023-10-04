
import NavBar2 from '@/Components/Navbar/NabBar2'
import Frame2 from '@/Components/Frames/Frame2'
import CarInfohtmlForm from '@/Components/Forms/CarInfoForm'
import Footer from '../Footer/Footer'
import { Head, usePage, useForm } from '@inertiajs/react';
import ImageGallery from '@/Assets/image-gallery.png';
import ImagCheck from '@/Assets/check.png';
import React, { useState } from 'react'
function SwapCar({ auth, brands, categories }: any) {
    console.log("brands",brands)
    const { errors } = usePage().props
    const [images, setImages] = useState([]);
    const [carSwapCheck, setCarSwapCheck] = useState(false);
    const { data, setData, post, processing, progress } = useForm({
        location: '',
        lga: '',
        street: '',
        title: '',
        brand_id: '',
        user_id: '',
        condition: '',
        engineCapacity: '',
        mileage: '',
        type: '',
        trim: '',
        price: '',
        fuelType: '',
        model: '',
        year: '',
        transmission: '',
        drive: '',
        interiorColor: '',
        exteriorColor: '',
        description: '',
        body_type:'',
        price_negotiable:'',
        custom_paper:'',
        cylinder: '',
        porpose: '',
        fixedengine: '',
        fixedtrans: '',
        title1: '',
        model1: '',
        year1: '',
        condition1: '',
        interiorColor1: '',
        milage1: '',
        title2: '',
        model2: '',
        year2: '',
        condition2: '',
        interiorColor2: '',
        milage2: '',

        images: []
    });

    const handleImageChange = (e: any) => {
        if (e.target.files) {
            setData('images', e.target.files);
            // setImages(e.target.files);
        }
    };

    function handleSubmit() {
        post(route('swap.store'))
    }
    const handleChange = (event:any) => {
        setData('type', event.target.value)
        if(event.target.value=='swap'){
            setCarSwapCheck(true);
        }else{
            setCarSwapCheck(false);
        }
    };
    const handleBodyTypeChange = (event:any) => {
        setData('body_type', event.target.value)
    };
    const handlePriceNegotiableChange = (event:any) => {
        setData('price_negotiable', event.target.value)
    };
    const handleCustomPaperChange = (event:any) => {
        setData('custom_paper', event.target.value)
    };

    return (
        <div>
            <NavBar2 auth={auth} />
            <Frame2 />
            <div className="mx-auto max-w-screen-xl w-full h-full mt-10">
            <form className="row g-3" method='post' encType='multipart/form-data'>
                <div className="border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl text-gray-950 font-bold">Car Information:</h1>
                    <h2 className="text-lg text-gray-700 mb-4">(All fields are * required)</h2>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                    <div className="relative z-0 w-full mb-6 group">
    <select name="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.location} onChange={(e) => setData('location', e.target.value)}>
        <option value="">Select State</option>
        <option value="Abia">Abia</option>
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
    <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" ></label>
    {errors.location && <div className='text-red-500'>{errors.location}</div>}
</div>

<div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="street" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.street} onChange={(e) => setData('street', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street No  *</label>
                            {errors.street && <div className='text-red-500'>{errors.street}</div>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                    <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="lga" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.lga} onChange={(e) => setData('lga', e.target.value)}/>
                            <label htmlFor="lga" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">L.G.A  *</label>
                            {errors.lga && <div className='text-red-500'>{errors.lga}</div>}
                        </div>
                       
                        <div className="relative z-0 w-full mb-6 group">
                                    <select name="brand_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.brand_id} onChange={(e) => setData('brand_id', e.target.value)}>
                                        <option value="">Choose Make</option>
                                        {
                                            brands.map((brand: any) => (
                                                <option value={brand.id}>{brand.title}</option>
                                            ))
                                        }

                                    </select>
                                    {errors.brand_id && <div className='text-red-500'>{errors.brand_id}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                    <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.title} onChange={(e) => setData('title', e.target.value)} />

                                    <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title *</label>
                                    {errors.title && <div className='text-red-500'>{errors.title}</div>}
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="model" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.model} onChange={(e) => setData('model', e.target.value)} />
                                    {errors.model && <div className='text-red-500'>{errors.model}</div>}
                                    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modal *</label>
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                    <div className="relative z-0 w-full mb-6 group">
                                    <select name="condition" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.condition} onChange={(e) => setData('condition', e.target.value)}>
                                        <option value="">Select Condition</option>
                                        <option value="Nigerian Used">Nigerian Used</option>
                                        <option value="Foreign Used">Foreign Used</option>
                                        <option value="Brand New">Brand New</option>
                                    </select>
                                    {errors.condition && <div className='text-red-500'>{errors.condition}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>

                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="engineCapacity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.engineCapacity} onChange={(e) => setData('engineCapacity', e.target.value)} />
                                    {errors.engineCapacity && <div className='text-red-500'>{errors.engineCapacity}</div>}
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Capacity *</label>
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                    <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.price} onChange={(e) => setData('price', e.target.value)}/>
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-[-2px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Price (Note, give us a good price to enhance fast service. Overpriced cars are likely to get less attention). *</label>
                            {errors.price && <div className='text-red-500'>{errors.price}</div>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                                    <select name="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.price_negotiable} onChange={handlePriceNegotiableChange}>
                                        <option value="">The Price Negotiable</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {errors.price_negotiable && <div className='text-red-500'>{errors.price_negotiable}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                    
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="porpose" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.porpose} onChange={(e) => setData('porpose', e.target.value)}>
                                <option value="">Purpose of Swap* </option>
                                <option value="Nigerian Used">Upgrade for Better </option>
                                <option value="Foreign Used">Downgrade for cash </option>
                                <option value="Foreign Used">Car Model  </option>
                                <option value="Foreign Used">Change my Make </option>
                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.porpose && <div className='text-red-500'>{errors.porpose}</div>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="body_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.body_type} onChange={(e) => setData('body_type', e.target.value)}>
                                <option value="">Body Type* </option>
                                <option value="First Body">First Body </option>
                                <option value="Repainted">Repainted </option>
                                <option value="Painted">Painted </option>                                   
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.body_type && <div className='text-red-500'>{errors.body_type}</div>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                    
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="fuelType" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.fuelType} onChange={(e) => setData('fuelType', e.target.value)}>
                                <option value="">Fuel Type* </option>
                                <option value="Petrol">Petrol </option>
                                <option value="Diesel ">Diesel </option>
                                <option value="Hi-octane">Hi-octane </option>                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.fuelType && <div className='text-red-500'>{errors.fuelType}</div>}

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="year" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.year} onChange={(e) => setData('year', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year *</label>
                            {errors.year && <div className='text-red-500'>{errors.year}</div>}
                            </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                    
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="drive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.drive} onChange={(e) => setData('drive', e.target.value)}>
                                <option value="">Drive Type* </option>
                                <option value="Right Hand">Right Hand </option>
                                <option value="Left Hand ">Left Hand </option>                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.drive && <div className='text-red-500'>{errors.drive}</div>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="trim" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.trim} onChange={(e) => setData('trim', e.target.value)}>
                                <option value="">Owner* </option>
                                <option value="Direct owner">Direct owner </option>
                                <option value="Agent">Agent </option>                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.trim && <div className='text-red-500'>{errors.trim}</div>}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                    
                      
                        <div className="relative z-0 w-full mb-6 group">
                            <select name="transmission" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.transmission} onChange={(e) => setData('transmission', e.target.value)}>
                                <option value="">Transmission Type * </option>
                                <option value="Automatic">Automatic </option>
                                <option value="Manual">Manual </option>                               
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.transmission && <div className='text-red-500'>{errors.transmission}</div>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                                    <select name="custom_paper" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={data.custom_paper} onChange={handleCustomPaperChange}>
                                        <option value="">Custom Paper *</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    {errors.custom_paper && <div className='text-red-500'>{errors.custom_paper}</div>}
                                    <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                    
                    <div className="relative z-0 w-full mb-6 group">
                                    <input type="number" name="mileage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.mileage} onChange={(e) => setData('mileage', e.target.value)} />
                                    {errors.mileage && <div className='text-red-500'>{errors.mileage}</div>}
                                    <label htmlFor="" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="interiorColor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.interiorColor} onChange={(e) => setData('interiorColor', e.target.value)} />
                                    {errors.interiorColor && <div className='text-red-500'>{errors.interiorColor}</div>}
                                    <label htmlFor="Time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Interior Color *</label>
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                  
                    <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="exteriorColor" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.exteriorColor} onChange={(e) => setData('exteriorColor', e.target.value)} />
                                    {errors.exteriorColor && <div className='text-red-500'>{errors.exteriorColor}</div>}
                                    <label htmlFor="Modal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exterior Color *</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="number" name="cylinder" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.cylinder} onChange={(e) => setData('cylinder', e.target.value)} />

                                    <label htmlFor="cylinder" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cylinder *</label>
                                    {errors.cylinder && <div className='text-red-500'>{errors.cylinder}</div>}
                                </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-6">                  
                    <div className="relative z-0 w-full mb-6 group">
                            <select name="fixedengine" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.fixedengine} onChange={(e) => setData('fixedengine', e.target.value)}>
                                <option value="">Fixed Engine* </option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.fixedengine && <div className='text-red-500'>{errors.fixedengine}</div>}
                        </div>
                    <div className="relative z-0 w-full mb-6 group">
                            <select name="condition" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.fixedtrans} onChange={(e) => setData('fixedtrans', e.target.value)}>
                                <option value="">Fixed Transmission* </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>                                
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.fixedtrans && <div className='text-red-500'>{errors.fixedtrans}</div>}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.description} onChange={(e) => setData('description', e.target.value)} />

                                    <label htmlFor="cylinder" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description *</label>
                                    {errors.description && <div className='text-red-500'>{errors.description}</div>}
                                </div>
                             
                    </div>
                    <h1 className="text-xl text-gray-950 font-bold">Two Cars of my swap options:</h1>
                    <div className="grid md:grid-cols-2 md:gap-x-6">
                        <div className='mt-2 '>
                            <h2 className='font-semibold font-lg'>1st Option*</h2>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="title1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={data.title1} onChange={(e) => setData('title1', e.target.value)}/>
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Make *</label>
                            {errors.title1 && <div className='text-red-500'>{errors.title1}</div>}
                            </div>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="model1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.model1} onChange={(e) => setData('model1', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modal *</label>
                            {errors.model1 && <div className='text-red-500'>{errors.model1}</div>}
                            </div>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="number" name="year1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.year1} onChange={(e) => setData('year1', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year *</label>
                            {errors.year1 && <div className='text-red-500'>{errors.year1}</div>}
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                            <select name="condition1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.condition1} onChange={(e) => setData('condition1', e.target.value)}>
                                <option value="">Condition</option>
                                <option value="Nigerian Used">Nigerian Used</option>
                                <option value="Foreign Used">Foreign Used</option>
                                <option value="Brand New">Brand New</option>
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.condition1 && <div className='text-red-500'>{errors.condition1}</div>}
                        </div>
                        <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="interiorColor1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.interiorColor1} onChange={(e) => setData('interiorColor1', e.target.value)}/>
                            <label htmlFor="interiorColor1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Interior Color *</label>{errors.interiorColor1 && <div className='text-red-500'>{errors.interiorColor1}</div>}
                        </div>
                        <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="milage1" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.milage1} onChange={(e) => setData('milage1', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage Max *</label>
                            {errors.milage1 && <div className='text-red-500'>{errors.milage1}</div>}
                        </div>
                            
                        </div>
                        <div className='mt-2 '>
                            <h2 className='font-semibold font-lg'>2nd Option*</h2>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="title2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  value={data.title2} onChange={(e) => setData('title2', e.target.value)}/>
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Make *</label>
                            {errors.title2 && <div className='text-red-500'>{errors.title2}</div>}
                            </div>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="model2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.model2} onChange={(e) => setData('model2', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modal *</label>
                            {errors.model2 && <div className='text-red-500'>{errors.model2}</div>}
                            </div>
                            <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="number" name="year2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.year2} onChange={(e) => setData('year2', e.target.value)} />
                            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year *</label>
                            {errors.year2 && <div className='text-red-500'>{errors.year2}</div>}
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                            <select name="condition2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={data.condition2} onChange={(e) => setData('condition2', e.target.value)}>
                                <option value="">Condition</option>
                                <option value="Nigerian Used">Nigerian Used</option>
                                <option value="Foreign Used">Foreign Used</option>
                                <option value="Brand New">Brand New</option>
                            </select>
                            <label htmlFor="Price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                            {errors.condition2 && <div className='text-red-500'>{errors.condition2}</div>}
                        </div>
                        <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="interiorColor2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.interiorColor2} onChange={(e) => setData('interiorColor2', e.target.value)}/>
                            <label htmlFor="interiorColor1" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Interior Color *</label>{errors.interiorColor2 && <div className='text-red-500'>{errors.interiorColor2}</div>}
                        </div>
                        <div className='relative z-0 w-full mb-6 group mt-3'>
                            <input type="text" name="milage2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data.milage2} onChange={(e) => setData('milage2', e.target.value)} />
                            <label htmlFor="milage2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mileage Max *</label>
                            {errors.milage2 && <div className='text-red-500'>{errors.milage2}</div>}
                        </div>
                            
                        </div>
                                            
                    </div>
                    <div className="mx-auto max-w-screen-xl w-full h-full mt-6">
                                <div className='w-full'>
                                {progress && (
                                    <progress value={progress.percentage} max="100" className='w-full rounded'>
                                    {progress.percentage}%
                                    </progress>
                                )}
                                </div>
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
                                                <input id="dropzone-file" type="file" className="hidden" name="images" onChange={handleImageChange} multiple />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-screen-xl w-full h-full mt-6 ">
                                <div className="flex justify-end">
                                    <button type="button" onClick={() => handleSubmit()} className="px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600" >Submit and Pay Fees</button>
                                </div>
                            </div>
                            </div>
                </div>
                
                </form></div>

            <Footer auth={auth} />
        </div>
    )
}

export default SwapCar
