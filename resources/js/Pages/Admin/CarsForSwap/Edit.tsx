import React, { useState,useEffect } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';
import UserIcon from '@/Assets/user-icon.jpg';
const Edit = ({ auth,brands,car,users ,categories}: any) => {
  const [carSwapCheck, setCarSwapCheck] = useState(false);
  const [CarSaleCheck, setCarSaleCheck] = useState(false); 
  const { data, errors, setData, post, progress } = useForm({
    title: car.title,
    brand_id: car.brand_id,
    user_id: car.user_id,
    condition: car.condition,
    engine_capacity: car.engine_capacity,
    mileage: car.mileage,
    type: car.type,
    trim: car.trim,
    location: car.location,
    price: car.price,
    fuel_type: car.fuel_type,
    model: car.model,
    transmission: car.transmission,
    drive: car.drive,
    interior_color: car.interior_color,
    exterior_color: car.exterior_color,
    description: car.description,
    lga: car.lga,
    street: car.street,
    body_type:car.body_type,
    price_negotiable:car.price_negotiable,
    custom_paper:car.custom_paper,
    cylinder: car.cylinder,
    year: car.year,
    porpose: car.porpose,
    fixedengine:car.fixedengine,
    fixedtrans:car.fixedtrans,
    title1:car.title1,
    model1:car.model1,
    year1:car.year1,
    condition1:car.condition1,
    interiorColor1:car.interiorColor1,
    milage1:car.milage1,
    title2:car.title2,
    model2:car.model2,
    year2:car.year2,
    condition2:car.condition2,
    interiorColor2:car.interiorColor2,
    milage2:car.milage2,
     //new feilds 
   
     brand1: car.brand1 || '',
     fuelType1: car.fuelType1 || '',
     transmission1: car.transmission1 || '',
     exteriorColor1: car.exteriorColor1 || '',
     price1: car.price1 || '',
     cylinder1: car.cylinder1 || '',
     custom_paper1: car.custom_paper1 || '',
     feature1:  [] as string[],
   
     no_owner: car.no_owner || '',
     categories_id: car.categories_id || '',
     feature: [] as string[],
     distress: car.distress || '',
     brand2: car.brand2 || '',
     fuelType2: car.fuelType2 || '',
     transmission2: car.transmission2 || '',
     exteriorColor2: car.exteriorColor2 || '',
     price2: car.price2 || '',
     cylinder2: car.cylinder2 || '',
     custom_paper2: car.custom_paper2 || '',
     feature2: [] as string[],  
    images:car.images ||  '',
        _method: 'put',
  });

  const [images, setImages] = useState(null);
  const handleImageChange = (e:any) => {
    if (e.target.files) {
      setData('images',e.target.files);
    }
  };
  function handleSubmit(e:any){
    e.preventDefault();
    post(route('admin.swap.update',car.id))
  }
  const handleChange = (event: any) => {
    setData('type', event.target.value);
    if (event.target.value === 'swap') {
      setCarSwapCheck(true);
      setCarSaleCheck(false); // Set carSaleCheck to false for 'swap'
    } else if (event.target.value === 'sale') {
      setCarSaleCheck(true);
      setCarSwapCheck(false); // Set carSwapCheck to false for 'sale'
    }
  };
  
  useEffect(() => {
    if (car.type === 'swap') {
      setCarSwapCheck(true);
      setCarSaleCheck(false); // Set carSaleCheck to false for 'swap'
    } else if (car.type === 'sale') {
      setCarSaleCheck(true);
      setCarSwapCheck(false); // Set carSwapCheck to false for 'sale'
    }
  }, [car.type]);
  const handleCheckboxChange = (value: string) => {
    const updatedFeature = [...data.feature];

    const index = updatedFeature.indexOf(value);
    if (index !== -1) {
      updatedFeature.splice(index, 1);
    } else {
      updatedFeature.push(value);
    }

    setData({ ...data, feature: updatedFeature });
  };
  const handleCheckboxFeature1 = (value: string) => {
    const updatedFeature1 = [...data.feature1];

    const index = updatedFeature1.indexOf(value);
    if (index !== -1) {
      updatedFeature1.splice(index, 1);
    } else {
      updatedFeature1.push(value);
    }

    setData({ ...data, feature1: updatedFeature1 });
  };
  const handleCheckboxFeature2 = (value: string) => {
    const updatedFeature2 = [...data.feature2];
  
    const index = updatedFeature2.indexOf(value);
    if (index !== -1) {
      updatedFeature2.splice(index, 1);
    } else {
      updatedFeature2.push(value);
    }
  
    setData({ ...data, feature2: updatedFeature2 });
  };
  return (
    <>
     <Head title="Edit Car" />
     <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Car</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Purpose of Post Swap | Sale</h6>
          </div>
          <div className="card-body">
          <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
               <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Location of car</h6>
          </div>
              <div className="col-12 col-md-6 col-lg-3">
                
              <label className="form-label">Location<span className='text-danger'>*</span></label>
                <select name="location" id="" className="form-control" onChange={(e)=>setData('location',e.target.value)}>
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
    {errors.location && <div className='text-danger'>{errors.location}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">L.G.A <span className='text-danger'>*</span></label>
                <input type="text" name="lga" className="form-control" placeholder="Enter L.G.A "  value={data.lga} onChange={(e)=>setData('lga',e.target.value)} />
                {errors.lga && <div className='text-danger'>{errors.lga}</div>}
              </div>
             
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Street <span className='text-danger'>*</span></label>
                <input type="text" name="street" className="form-control" placeholder="Enter Street"  value={data.street} onChange={(e)=>setData('street',e.target.value)} />
                {errors.street && <div className='text-danger'>{errors.street}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Brand <span className='text-danger'>*</span></label>
                <select name="brand_id" id="" className="form-control" onChange={(e)=>setData('brand_id',e.target.value)}>
                  <option value="">Select Brand</option>
                  {
                    brands.map((brand:any)=>(
                      <option value={brand?.id} key={brand.id}>{brand?.title}</option>
                    ))
                  }
                </select>
                {errors.brand_id && <div className='text-danger'>{errors.brand_id}</div>}
              </div>
              <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">User Details</h6>
          </div>
             
              <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label">User <span className='text-danger'>*</span></label>
                <select name="user_id" id="" className="form-control" onChange={(e)=>setData('user_id',e.target.value)}>
                  <option value="">Select User</option>
                  {
                    users.map((user:any)=>(
                      <option value={user?.id} key={user.id}>{user?.first_name}</option>
                    ))
                  }
                </select>
                {errors.brand_id && <div className='text-danger'>{errors.brand_id}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label">Owner <span className='text-danger'>*</span></label>
                <select name="trim" id="" className="form-control" onChange={(e)=>setData('trim',e.target.value)}>
                <option value="">Owner* </option>
                <option value="Direct owner">Direct owner </option>
                <option value="Agent">Agent </option>
                <option value="Sales">Sales Representative. </option>
                </select>
                {errors.trim && <div className='text-danger'>{errors.trim}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label">How many owners before now*<span className='text-danger'>*</span></label>
                <select name="no_owner" id="" className="form-control" onChange={(e)=>setData('no_owner',e.target.value)}>
                                <option value="None">None</option>
                                <option value="1">1 </option>
                                <option value="2">2 </option>
                                <option value="3">3 </option>  
                                <option value="4">4 </option>  
                                <option value="5">5 </option>
                </select>
                {errors.no_owner && <div className='text-danger'>{errors.no_owner}</div>}
              </div>
              <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Car Details</h6>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Category<span className='text-danger'>*</span></label>
                <select name="categories_id" id="" className="form-control" onChange={(e)=>setData('categories_id',e.target.value)}>
                <option value="">Category</option>
                {
                  
                                            categories.map((categories: any) => (
                                                <option key={categories.id}value={categories.id}>{categories.title}</option>
                                            ))
                                        }

                                    </select>
                                    {errors.categories_id && <div className='text-red-500'>{errors.categories_id}</div>}

              </div>
                                  <div className="col-12 col-md-6 col-lg-3">
                                <div className="flex flex-col">
                                <label htmlFor="feature" className="mb-1 text-sm text-gray-700 dark:text-white">Special features*</label>
                                <div className="flex space-x-4">
                                 <label className="mb-1 text-sm text-gray-700 dark:text-white">
                                <input type="checkbox" name="feature" checked={data.feature.includes('Thumb start')} onChange={() => handleCheckboxChange('Thumb start')} className="mr-2" />
                                Thumb start
                               </label>
                               <label className="mb-1 text-sm text-gray-700 dark:text-white">
                               <input type="checkbox" name="feature" checked={data.feature.includes('Keyless entry')} onChange={() => handleCheckboxChange('Keyless entry')} className="mr-2" />
                              Keyless entry
                             </label>
                            <label className="mb-1 text-sm text-gray-700 dark:text-white">
                              <input type="checkbox" name="feature" checked={data.feature.includes('GPS')} onChange={() => handleCheckboxChange('GPS')} className="mr-2" />
                              GPS
                            </label>
                            </div>

                            </div>
                              {errors.feature && <div className='text-red-500'>{errors.feature}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Title <span className='text-danger'>*</span></label>
                <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={data.title} onChange={(e)=>setData('title',e.target.value)} />
                {errors.title && <div className='text-danger'>{errors.title}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Condition <span className='text-danger'>*</span></label>
                <select name="condition" id="" className="form-control" onChange={(e)=>setData('condition',e.target.value)}>
                  <option value="">Select Condition</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Used">Used</option>
                </select>
                {errors.condition && <div className='text-danger'>{errors.condition}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Engine Capacity <span className='text-danger'>*</span></label>
                <input type="text" name="engine_capacity" className="form-control" placeholder="Engine Capacity"  value={data.engine_capacity} onChange={(e)=>setData('engine_capacity',e.target.value)} />
                {errors.engine_capacity && <div className='text-danger'>{errors.engine_capacity}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Mileage <span className='text-danger'>*</span></label>
                <input type="number" name="mileage" className="form-control" placeholder="Mileage"  value={data.mileage} onChange={(e)=>setData('mileage',e.target.value)} />
                {errors.mileage && <div className='text-danger'>{errors.mileage}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Price <span className='text-danger'>*</span></label>
                <input type="number" name="price" className="form-control" placeholder="Price"  value={data.price} onChange={(e)=>setData('price',e.target.value)} />
                {errors.price && <div className='text-danger'>{errors.price}</div>}
              </div>
             
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fuel Type <span className='text-danger'>*</span></label>
                <select name="fuel_type" id="" className="form-control" onChange={(e)=>setData('fuel_type',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Desiel">Desiel</option>
                  <option value="Petrol">Petrol</option>
                </select>
                {errors.fuel_type && <div className='text-danger'>{errors.fuel_type}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Model <span className='text-danger'>*</span></label>
                <input type="text" name="model" className="form-control" placeholder="Model"  value={data.model} onChange={(e)=>setData('model',e.target.value)} />
                {errors.model && <div className='text-danger'>{errors.model}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label">Transmission <span className='text-danger'>*</span></label>
                <select name="transmission" id="" className="form-control"value={data.transmission} onChange={(e) => setData('transmission', e.target.value)}>
                                <option value="">Transmission Type* </option>
                                <option value="Automatic">Automatic </option>
                                <option value="Manual">Manual </option>
                                <option value="Auxiliary">Auxiliary </option>                               
                            </select>  
                {errors.transmission && <div className='text-danger'>{errors.transmission}</div>}
                
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Drive Type <span className='text-danger'>*</span></label>
                <select name="drive" id="" className="form-control" value={data.drive} onChange={(e) => setData('drive', e.target.value)}>
                                <option value="">Drive Type* </option>
                                <option value="Right Hand">Right Hand </option>
                                <option value="Left Hand">Left Hand </option>   
                {errors.drive && <div className='text-danger'>{errors.drive}</div>}
                </select>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Interior Color <span className='text-danger'>*</span></label>
                <input type="text" name="interior_color" className="form-control" placeholder="Interior Color"  value={data.interior_color} onChange={(e)=>setData('interior_color',e.target.value)} />
                {errors.interior_color && <div className='text-danger'>{errors.interior_color}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Exterior Color <span className='text-danger'>*</span></label>
                <input type="text" name="exterior_color" className="form-control" placeholder="Exterior Color"  value={data.exterior_color} onChange={(e)=>setData('exterior_color',e.target.value)} />
                {errors.exterior_color && <div className='text-danger'>{errors.exterior_color}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Body Type <span className='text-danger'>*</span></label>
                <select name="body_type" id="" className="form-control" value={data.body_type} onChange={(e) => setData('body_type', e.target.value)}>
                                <option value="">Body Type* </option>
                                <option value="First Body">First Body </option>
                                <option value="Repainted">Repainted </option>
                                <option value="Painted">Painted </option> 
                </select>
                {errors.body_type && <div className='text-danger'>{errors.body_type}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Price Negoiable <span className='text-danger'>*</span></label>
                <select name="price_negotiable" id="" className="form-control" onChange={(e)=>setData('price_negotiable',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.price_negotiable && <div className='text-danger'>{errors.price_negotiable}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Custom Paper <span className='text-danger'>*</span></label>
                <select name="custom_paper" id="" className="form-control" onChange={(e)=>setData('custom_paper',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.custom_paper && <div className='text-danger'>{errors.custom_paper}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label">Cylinder<span className='text-danger'>*</span></label>
                <select name="cylinder" id="" className="form-control" onChange={(e)=>setData('cylinder',e.target.value)}>
                <option value="">Cylinder* </option>
                                <option value="None">None</option>
                                <option value="3">3 </option>
                                <option value="4">4 </option>
                                <option value="6">6 </option>  
                                <option value="8">8 </option>  
                                <option value="12">12 </option>                                  
                            </select>
                {errors.cylinder && <div className='text-danger'>{errors.cylinder}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Year <span className='text-danger'>*</span></label>
                <input type="number" name="year" className="form-control" placeholder="Year"  value={data.year} onChange={(e)=>setData('year',e.target.value)} />
                {errors.year && <div className='text-danger'>{errors.year}</div>}
              </div>
            
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Images <span className='text-danger'>*</span></label>
                <input type="file" className="form-control" name="images" onChange={handleImageChange} multiple/>
                {errors.images && <div className='text-danger'>{errors.images}</div>}
              </div>
              <div className="col-md-12">
                <label className="form-label">Description <span className='text-danger'>*</span></label>
                <textarea name="description" className="form-control" value={data.description} placeholder="Enter Description" onChange={(e)=>setData('description',e.target.value)}/>
                {errors.description && <div className='text-danger'>{errors.description}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Purpose of Post( Swap / Sell)<span className='text-danger'>*</span></label>
                <select name="type" id="" className="form-control" value={data.type} onChange={handleChange}>
                                        <option value="">Type* </option>
                                        <option value="sale">Cash Sale</option>
                                        <option value="swap">For Swap</option>
                                    </select>
                                 
                {errors.type && <div className='text-danger'>{errors.type}</div>}
              </div>
              {
                                CarSaleCheck&&(

                                    <>
            
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Is this a distress? Yes / No <span className='text-danger'>*</span></label>
                <select name="distress" id="" className="form-control" value={data.distress} onChange={(e) => setData('distress', e.target.value)}>
                               <option value="">Yes / No* </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No </option>
                                                               
                            </select>
                {errors.distress && <div className='text-danger'>{errors.distress}</div>}
              </div>
              </>
                                    )}


              {
                                carSwapCheck&&(
                                    <>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Purpose <span className='text-danger'>*</span></label>
                <select name="porpose" id="" className="form-control" value={data.porpose} onChange={(e) => setData('porpose', e.target.value)}>
                                <option value="">Purpose of Swap* </option>
                                <option value="Nigerian Used">Upgrade for Better </option>
                                <option value="Foreign Used">Downgrade for cash </option>
                                <option value="Foreign Used">Car Model  </option>
                                <option value="Foreign Used">Change my Make </option>
                </select>
                {errors.porpose && <div className='text-danger'>{errors.porpose}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fixed Engine <span className='text-danger'>*</span></label>
                <select name="fixedengine" id="" className="form-control" value={data.fixedengine} onChange={(e) => setData('fixedengine', e.target.value)}>
                                <option value="">Fixed Engine* </option>
                                <option value="yes">Yes</option>
                                <option value="No">No</option>                                
                            </select>
                {errors.fixedengine && <div className='text-danger'>{errors.fixedengine}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fixed Transmission <span className='text-danger'>*</span></label>
                <select name="porpose" id="" className="form-control"  value={data.fixedtrans} onChange={(e) => setData('fixedtrans', e.target.value)}>
                                <option value="">Fixed Transmission* </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>                                
                            </select>
                {errors.fixedtrans && <div className='text-danger'>{errors.fixedtrans}</div>}
              </div>
             {/* Options For Interested car */}
             <h2 className="h4 mb-2 text-gray-800">My Swap car Option:</h2>
             <p className="h6 mb-2 text-gray-800">Car 1:</p>
             <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Choose Make<span className='text-danger'>*</span></label>
                <input type="text" name="title1" className="form-control" placeholder="Choose Make"  value={data.title1} onChange={(e) => setData('title1', e.target.value)} />
                {errors.title1 && <div className='text-danger'>{errors.title1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Model<span className='text-danger'>*</span></label>
                <input type="text" name="model1" className="form-control" placeholder="Model"  value={data.model1} onChange={(e) => setData('model1', e.target.value)} />
                {errors.model1 && <div className='text-danger'>{errors.model1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Year<span className='text-danger'>*</span></label>
                <input type="text" name="year1" className="form-control" placeholder="Year"  value={data.year1} onChange={(e) => setData('year1', e.target.value)} />
                {errors.year1 && <div className='text-danger'>{errors.year1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Interior Color<span className='text-danger'>*</span></label>
                <input type="text" name="interiorColor1" className="form-control" placeholder="Interior Color"  value={data.interiorColor1} onChange={(e) => setData('interiorColor1', e.target.value)} />
                {errors.interiorColor1 && <div className='text-danger'>{errors.interiorColor1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Condition <span className='text-danger'>*</span></label>
                <select name="condition1" id="" className="form-control" value={data.condition1} onChange={(e)=>setData('condition1',e.target.value)}>
                  <option value="">Select Condition</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Used">Used</option>
                </select>
                {errors.condition1 && <div className='text-danger'>{errors.condition1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Mileage Max<span className='text-danger'>*</span></label>
                <input type="number" name="milage1" className="form-control" placeholder="Mileage Max"  value={data.milage1} onChange={(e) => setData('milage1', e.target.value)} />
                {errors.milage1 && <div className='text-danger'>{errors.milage1}</div>}
              </div>
                {/* New Feilds */}
                <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Brand <span className='text-danger'>*</span></label>
                <select name="brand1" id="" className="form-control" onChange={(e)=>setData('brand1',e.target.value)}>
                  <option value="">Select Brand</option>
                  {
                    brands.map((brand:any)=>(
                      <option value={brand?.id} key={brand.id}>{brand?.title}</option>
                    ))
                  }
                </select>
                {errors.brand1 && <div className='text-danger'>{errors.brand1}</div>}
              </div>
                <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fuel Type <span className='text-danger'>*</span></label>
                <select name="fuelType1" id="" className="form-control" onChange={(e)=>setData('fuelType1',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Desiel">Desiel</option>
                  <option value="Petrol">Petrol</option>
                </select>
                {errors.fuelType1 && <div className='text-danger'>{errors.fuelType1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label">Transmission <span className='text-danger'>*</span></label>
                <select name="transmission1" id="" className="form-control"value={data.transmission} onChange={(e) => setData('transmission1', e.target.value)}>
                                <option value="">Transmission Type* </option>
                                <option value="Automatic">Automatic </option>
                                <option value="Manual">Manual </option>
                                <option value="Auxiliary">Auxiliary </option>                               
                            </select>  
                {errors.transmission1 && <div className='text-danger'>{errors.transmission1}</div>}
                
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Exterior Color <span className='text-danger'>*</span></label>
                <input type="text" name="exteriorColor1" className="form-control" placeholder="Exterior Color"  value={data.exteriorColor1} onChange={(e)=>setData('exteriorColor1',e.target.value)} />
                {errors.exteriorColor1 && <div className='text-danger'>{errors.exteriorColor1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Price <span className='text-danger'>*</span></label>
                <input type="number" name="price1" className="form-control" placeholder="Price"  value={data.price1} onChange={(e)=>setData('price1',e.target.value)} />
                {errors.price1 && <div className='text-danger'>{errors.price1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
              <label className="form-label">Cylinder<span className='text-danger'>*</span></label>
                <select name="cylinder1" id="" className="form-control" onChange={(e)=>setData('cylinder1',e.target.value)}>
                <option value="">Cylinder* </option>
                                <option value="None">None</option>
                                <option value="3">3 </option>
                                <option value="4">4 </option>
                                <option value="6">6 </option>  
                                <option value="8">8 </option>  
                                <option value="12">12 </option>                                  
                            </select>
                {errors.cylinder1 && <div className='text-danger'>{errors.cylinder1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Custom Paper <span className='text-danger'>*</span></label>
                <select name="custom_paper1" id="" className="form-control" onChange={(e)=>setData('custom_paper1',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.custom_paper1 && <div className='text-danger'>{errors.custom_paper1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
              <div className="flex flex-col">
                                <label htmlFor="feature1" className="mb-1 text-sm text-gray-700 dark:text-white">Special features*</label>
                                <div className="flex space-x-4">
                                 <label className="mb-1 text-sm text-gray-700 dark:text-white">
                                <input type="checkbox" name="feature1" checked={data.feature1.includes('Thumb start')} onChange={() => handleCheckboxFeature1('Thumb start')} className="mr-2" />
                                Thumb start
                               </label>
                               <label className="mb-1 text-sm text-gray-700 dark:text-white">
                               <input type="checkbox" name="feature1" checked={data.feature1.includes('Keyless entry')} onChange={() => handleCheckboxFeature1('Keyless entry')} className="mr-2" />
                              Keyless entry
                             </label>
                            <label className="mb-1 text-sm text-gray-700 dark:text-white">
                              <input type="checkbox" name="feature1" checked={data.feature1.includes('GPS')} onChange={() => handleCheckboxFeature1('GPS')} className="mr-2" />
                              GPS
                            </label>
                            </div>

                            </div>
                              {errors.feature1 && <div className='text-red-500'>{errors.feature1}</div>}
              </div>

              <p className="h6 mb-2 text-gray-800">Car 2:</p>
             <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Choose Make<span className='text-danger'>*</span></label>
                <input type="text" name="title2" className="form-control" placeholder="Choose Make"  value={data.title2} onChange={(e) => setData('title2', e.target.value)} />
                {errors.title2 && <div className='text-danger'>{errors.title2}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Model<span className='text-danger'>*</span></label>
                <input type="text" name="model2" className="form-control" placeholder="Model"  value={data.model2} onChange={(e) => setData('model2', e.target.value)} />
                {errors.model2 && <div className='text-danger'>{errors.model2}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Year<span className='text-danger'>*</span></label>
                <input type="text" name="year2" className="form-control" placeholder="Year"  value={data.year2} onChange={(e) => setData('year2', e.target.value)} />
                {errors.year2 && <div className='text-danger'>{errors.year2}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Interior Color<span className='text-danger'>*</span></label>
                <input type="text" name="interiorColor2" className="form-control" placeholder="Interior Color"  value={data.interiorColor2} onChange={(e) => setData('interiorColor2', e.target.value)} />
                {errors.interiorColor2 && <div className='text-danger'>{errors.interiorColor2}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Condition <span className='text-danger'>*</span></label>
                <select name="condition2" id="" className="form-control" value={data.condition2} onChange={(e)=>setData('condition2',e.target.value)}>
                  <option value="">Select Condition</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Used">Used</option>
                </select>
                {errors.condition2 && <div className='text-danger'>{errors.condition2}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label"> Mileage Max<span className='text-danger'>*</span></label>
                <input type="number" name="milage2" className="form-control" placeholder=" Mileage Max"  value={data.milage2} onChange={(e) => setData('milage2', e.target.value)} />
                {errors.milage2 && <div className='text-danger'>{errors.milage2}</div>}
              </div>
               {/* New Feilds */}
               <div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Brand <span className='text-danger'>*</span></label>
  <select name="brand2" id="" className="form-control" onChange={(e)=>setData('brand2',e.target.value)}>
    <option value="">Select Brand</option>
    {
      brands.map((brand:any)=>(
        <option value={brand?.id} key={brand.id}>{brand?.title}</option>
      ))
    }
  </select>
  {errors.brand2 && <div className='text-danger'>{errors.brand2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Fuel Type <span className='text-danger'>*</span></label>
  <select name="fuelType2" id="" className="form-control" onChange={(e)=>setData('fuelType2',e.target.value)}>
    <option value="">Select Fuel Type</option>
    <option value="Desiel">Desiel</option>
    <option value="Petrol">Petrol</option>
  </select>
  {errors.fuelType2 && <div className='text-danger'>{errors.fuelType2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Transmission <span className='text-danger'>*</span></label>
  <select name="transmission2" id="" className="form-control" value={data.transmission2} onChange={(e) => setData('transmission2', e.target.value)}>
    <option value="">Transmission Type* </option>
    <option value="Automatic">Automatic </option>
    <option value="Manual">Manual </option>
    <option value="Auxiliary">Auxiliary </option>                               
  </select>  
  {errors.transmission2 && <div className='text-danger'>{errors.transmission2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Exterior Color <span className='text-danger'>*</span></label>
  <input type="text" name="exteriorColor2" className="form-control" placeholder="Exterior Color"  value={data.exteriorColor2} onChange={(e)=>setData('exteriorColor2',e.target.value)} />
  {errors.exteriorColor2 && <div className='text-danger'>{errors.exteriorColor2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Price <span className='text-danger'>*</span></label>
  <input type="number" name="price2" className="form-control" placeholder="Price"  value={data.price2} onChange={(e)=>setData('price2',e.target.value)} />
  {errors.price2 && <div className='text-danger'>{errors.price2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Cylinder<span className='text-danger'>*</span></label>
  <select name="cylinder2" id="" className="form-control" onChange={(e)=>setData('cylinder2',e.target.value)}>
    <option value="">Cylinder* </option>
    <option value="None">None</option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="6">6 </option>  
    <option value="8">8 </option>  
    <option value="12">12 </option>                                  
  </select>
  {errors.cylinder2 && <div className='text-danger'>{errors.cylinder2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
  <label className="form-label">Custom Paper <span className='text-danger'>*</span></label>
  <select name="custom_paper2" id="" className="form-control" onChange={(e)=>setData('custom_paper2',e.target.value)}>
    <option value="">Select Fuel Type</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
  {errors.custom_paper2 && <div className='text-danger'>{errors.custom_paper2}</div>}
</div>

<div className="col-12 col-md-6 col-lg-3">
<div className="flex flex-col">
    <label htmlFor="feature2" className="mb-1 text-sm text-gray-700 dark:text-white">Special features*</label>
    <div className="flex space-x-4">
      <label className="mb-1 text-sm text-gray-700 dark:text-white">
        <input type="checkbox" name="feature2" checked={data.feature2.includes('Thumb start')} onChange={() => handleCheckboxFeature2('Thumb start')} className="mr-2" />
        Thumb start
      </label>
      <label className="mb-1 text-sm text-gray-700 dark:text-white">
        <input type="checkbox" name="feature2" checked={data.feature2.includes('Keyless entry')} onChange={() => handleCheckboxFeature2('Keyless entry')} className="mr-2" />
        Keyless entry
      </label>
      <label className="mb-1 text-sm text-gray-700 dark:text-white">
        <input type="checkbox" name="feature2" checked={data.feature2.includes('GPS')} onChange={() => handleCheckboxFeature2('GPS')} className="mr-2" />
        GPS
      </label>
    </div>
  </div>
  {errors.feature2 && <div className='text-red-500'>{errors.feature2}</div>}
</div>
              </> )
                            }
            
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
Edit.layout = (page:any) => <Layout children={page} />;
export default Edit;
