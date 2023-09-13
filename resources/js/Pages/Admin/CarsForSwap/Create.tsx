import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Create = ({ auth,brands,users}: any) => {
  const { errors } = usePage().props
  const [images, setImages] = useState([]);
  const [carSwapCheck, setCarSwapCheck] = useState(false);
  const { data, setData, post, processing } = useForm({
    location: '',
    lga: '',
    street: '',
    title: '',
    brand_id: '',
    user_id: '',
    condition: '',
    engine_capacity: '',
    mileage: '',
    type: '',
    trim: '',
    price: '',
    fuel_type: '',
    model: '',
    transmission: '',
    drive: '',
    interior_color: '',
    exterior_color: '',
    description: '',
    body_type:'',
    price_negotiable:'',
    custom_paper:'',
    cylinder: '',
    year: '',
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

  const handleImageChange = (e:any) => {
    if (e.target.files) {
      setData('images',e.target.files);
      // setImages(e.target.files);
    }
  };

  function handleSubmit(e:any){
    e.preventDefault();
    post(route('admin.swap.store'))
  }
  const handleChange = (event:any) => {
    setData('type', event.target.value)
    if(event.target.value=='swap'){
        setCarSwapCheck(true);
    }else{
        setCarSwapCheck(false);
    }
};
  return (
    <>
     <Head title="Post Car" />
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Car</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Post Car For Swap</h6>
          </div>
          <div className="card-body">
          <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
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
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Street <span className='text-danger'>*</span></label>
                <input type="text" name="street" className="form-control" placeholder="Enter Street"  value={data.street} onChange={(e)=>setData('street',e.target.value)} />
                {errors.street && <div className='text-danger'>{errors.street}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">L.G.A <span className='text-danger'>*</span></label>
                <input type="text" name="lga" className="form-control" placeholder="Enter L.G.A "  value={data.lga} onChange={(e)=>setData('lga',e.target.value)} />
                {errors.lga && <div className='text-danger'>{errors.lga}</div>}
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
                <input type="text" name="mileage" className="form-control" placeholder="Mileage"  value={data.mileage} onChange={(e)=>setData('mileage',e.target.value)} />
                {errors.mileage && <div className='text-danger'>{errors.mileage}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Price <span className='text-danger'>*</span></label>
                <input type="text" name="price" className="form-control" placeholder="Price"  value={data.price} onChange={(e)=>setData('price',e.target.value)} />
                {errors.price && <div className='text-danger'>{errors.price}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Owner <span className='text-danger'>*</span></label>
                <select name="trim" id="" className="form-control" onChange={(e)=>setData('trim',e.target.value)}>
                <option value="">Owner* </option>
                <option value="Direct owner">Direct owner </option>
                <option value="Agent">Agent </option>
                </select>
                {errors.trim && <div className='text-danger'>{errors.trim}</div>}
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
                <input type="text" name="transmission" className="form-control" placeholder="Transmission"  value={data.transmission} onChange={(e)=>setData('transmission',e.target.value)} />
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
                <label className="form-label">Cylinder <span className='text-danger'>*</span></label>
                <input type="text" name="cylinder" className="form-control" placeholder="Cylinder"  value={data.cylinder} onChange={(e)=>setData('cylinder',e.target.value)} />
                {errors.cylinder && <div className='text-danger'>{errors.cylinder}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Year <span className='text-danger'>*</span></label>
                <input type="text" name="cylinder" className="form-control" placeholder="Year"  value={data.year} onChange={(e)=>setData('year',e.target.value)} />
                {errors.year && <div className='text-danger'>{errors.year}</div>}
              </div>
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
                <input type="text" name="milage1" className="form-control" placeholder="Mileage Max"  value={data.milage1} onChange={(e) => setData('milage1', e.target.value)} />
                {errors.milage1 && <div className='text-danger'>{errors.milage1}</div>}
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
                <input type="text" name="milage2" className="form-control" placeholder=" Mileage Max"  value={data.milage2} onChange={(e) => setData('milage2', e.target.value)} />
                {errors.milage2 && <div className='text-danger'>{errors.milage2}</div>}
              </div>
            
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
Create.layout = (page:any) => <Layout children={page} />;
export default Create;
