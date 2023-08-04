import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Create = ({ auth,brands,users}: any) => {
  const { errors } = usePage().props
  const [images, setImages] = useState([]);
  const [carSwapCheck, setCarSwapCheck] = useState(false);
  const { data, setData, post, processing } = useForm({
    title: '',
    brand_id: '',
    user_id: '',
    condition: '',
    engineCapacity: '',
    mileage: '',
    type: '',
    swaptitle1: '',
    swaptitle2: '',
    trim: '',
    location: '',
    price: '',
    fuelType: '',
    model: '',
    transmission: '',
    drive: '',
    interiorColor: '',
    exteriorColor: '',
    description: '',
    images:[]
  });

  const handleImageChange = (e:any) => {
    if (e.target.files) {
      setData('images',e.target.files);
      // setImages(e.target.files);
    }
  };

  function handleSubmit(e:any){
    e.preventDefault();
    post(route('admin.cars.store'))
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
            <h6 className="m-0 font-weight-bold text-primary">Post Car</h6>
          </div>
          <div className="card-body">
            <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Title <span className='text-danger'>*</span></label>
                <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={data.title} onChange={(e)=>setData('title',e.target.value)} />
                {errors.title && <div className='text-danger'>{errors.title}</div>}
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
                <input type="text" name="engine_capacity" className="form-control" placeholder="Engine Capacity"  value={data.engineCapacity} onChange={(e)=>setData('engineCapacity',e.target.value)} />
                {errors.engineCapacity && <div className='text-danger'>{errors.engineCapacity}</div>}
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
                <label className="form-label">Select Type <span className='text-danger'>*</span></label>
                <select name="type" id="" className="form-control"  value={data.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="swap">For Swap</option>
                <option value="sale">For Sale</option>
                </select>
                {errors.type && <div className='text-danger'>{errors.type}</div>}
              </div>
              {
                                carSwapCheck&&(
                                    <>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Interested Car 1<span className='text-danger'>*</span></label>
                <input type="text" name="swaptitle1" className="form-control" placeholder="Enter Interested Car Title"  value={data.swaptitle1} onChange={(e)=>setData('swaptitle1',e.target.value)} />
                {errors.swaptitle1 && <div className='text-danger'>{errors.swaptitle1}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Interested Car 2<span className='text-danger'>*</span></label>
                <input type="text" name="swaptitle2" className="form-control" placeholder="Enter Interested Car Model"  value={data.swaptitle2} onChange={(e)=>setData('swaptitle2',e.target.value)} />
                {errors.swaptitle2 && <div className='text-danger'>{errors.swaptitle2}</div>}
              </div>
              </>
                                )
                            }
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Trim <span className='text-danger'>*</span></label>
                <input type="text" name="trim" className="form-control" placeholder="Enter Trim"  value={data.trim} onChange={(e)=>setData('trim',e.target.value)} />
                {errors.trim && <div className='text-danger'>{errors.trim}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fuel Type <span className='text-danger'>*</span></label>
                <select name="fuel_type" id="" className="form-control" onChange={(e)=>setData('fuelType',e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Desiel">Desiel</option>
                  <option value="Petrol">Petrol</option>
                </select>
                {errors.fuelType && <div className='text-danger'>{errors.fuelType}</div>}
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
                <label className="form-label">Drive / (KM) </label>
                <input type="text" name="drive" className="form-control" placeholder="Drive"  value={data.drive} onChange={(e)=>setData('drive',e.target.value)} />
                {errors.drive && <div className='text-danger'>{errors.drive}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Interior Color <span className='text-danger'>*</span></label>
                <input type="text" name="interior_color" className="form-control" placeholder="Interior Color"  value={data.interiorColor} onChange={(e)=>setData('interiorColor',e.target.value)} />
                {errors.interiorColor && <div className='text-danger'>{errors.interiorColor}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Exterior Color <span className='text-danger'>*</span></label>
                <input type="text" name="exterior_color" className="form-control" placeholder="Exterior Color"  value={data.exteriorColor} onChange={(e)=>setData('exteriorColor',e.target.value)} />
                {errors.exteriorColor && <div className='text-danger'>{errors.exteriorColor}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Location <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" name="location" value={data.location} placeholder='Location' onChange={(e)=>setData('location',e.target.value)}/>
                {errors.location && <div className='text-danger'>{errors.location}</div>}
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
