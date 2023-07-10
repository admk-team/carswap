import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, usePage } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';

const Create = ({ auth,brands }: any) => {
  const { errors } = usePage().props
  const [title,setTitle]=useState("")
  const [brand_id,setBrandId]=useState("")
  const [condition,setCondition]=useState("")
  const [engineCapacity,setEngineCapacity]=useState("")
  const [mileage,setMileage]=useState("")
  const [location,setLocation]=useState("")
  const [price,setPrice]=useState("")
  const [fuelType,setFuelType]=useState("")
  const [model,setModel]=useState("")
  const [transmission,setTransmission]=useState("")
  const [drive,setDrive]=useState("")
  const [interiorColor,setInteriorColor]=useState("")
  const [exteriorColor,setExteriorColor]=useState("")
  const [images, setImages] = useState(null);
  const [description,setDescription]=useState("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };

  function handleSubmit(e:any){
    e.preventDefault();
    Inertia.post(route('admin.cars.store'),{title,brand_id,condition,engineCapacity,mileage,location,price,fuelType,model,transmission,drive,interiorColor,exteriorColor,images,description})
  }
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
                <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)} />
                {errors.title && <div className='text-danger'>{errors.title}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Brands <span className='text-danger'>*</span></label>
                <select name="brand_id" id="" className="form-control" onChange={(e)=>setBrandId(e.target.value)}>
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
                <select name="brand_id" id="" className="form-control" onChange={(e)=>setCondition(e.target.value)}>
                  <option value="">Select Condition</option>
                  <option value="Brand New">Brand New</option>
                  <option value="Used">Used</option>
                </select>
                {errors.brand_id && <div className='text-danger'>{errors.brand_id}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Engine Capacity <span className='text-danger'>*</span></label>
                <input type="text" name="engine_capacity" className="form-control" placeholder="Engine Capacity"  value={engineCapacity} onChange={(e)=>setEngineCapacity(e.target.value)} />
                {errors.engineCapacity && <div className='text-danger'>{errors.engineCapacity}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Mileage <span className='text-danger'>*</span></label>
                <input type="text" name="mileage" className="form-control" placeholder="Mileage"  value={mileage} onChange={(e)=>setMileage(e.target.value)} />
                {errors.mileage && <div className='text-danger'>{errors.mileage}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Price <span className='text-danger'>*</span></label>
                <input type="text" name="price" className="form-control" placeholder="Price"  value={price} onChange={(e)=>setPrice(e.target.value)} />
                {errors.price && <div className='text-danger'>{errors.price}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Fuel Type <span className='text-danger'>*</span></label>
                <select name="fuel_type" id="" className="form-control" onChange={(e)=>setFuelType(e.target.value)}>
                  <option value="">Select Fuel Type</option>
                  <option value="Desiel">Desiel</option>
                  <option value="Petrol">Petrol</option>
                </select>
                {errors.fuel_type && <div className='text-danger'>{errors.fuel_type}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Model <span className='text-danger'>*</span></label>
                <input type="text" name="model" className="form-control" placeholder="Model"  value={model} onChange={(e)=>setModel(e.target.value)} />
                {errors.model && <div className='text-danger'>{errors.model}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Transmission <span className='text-danger'>*</span></label>
                <input type="text" name="transmission" className="form-control" placeholder="Transmission"  value={transmission} onChange={(e)=>setTransmission(e.target.value)} />
                {errors.transmission && <div className='text-danger'>{errors.transmission}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Drive / (KM) </label>
                <input type="text" name="drive" className="form-control" placeholder="Drive"  value={drive} onChange={(e)=>setDrive(e.target.value)} />
                {errors.drive && <div className='text-danger'>{errors.drive}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Interior Color <span className='text-danger'>*</span></label>
                <input type="text" name="interior_color" className="form-control" placeholder="Interior Color"  value={interiorColor} onChange={(e)=>setInteriorColor(e.target.value)} />
                {errors.interior_color && <div className='text-danger'>{errors.interior_color}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Exterior Color <span className='text-danger'>*</span></label>
                <input type="text" name="exterior_color" className="form-control" placeholder="Exterior Color"  value={exteriorColor} onChange={(e)=>setExteriorColor(e.target.value)} />
                {errors.exterior_color && <div className='text-danger'>{errors.exterior_color}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Location <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" name="location" value={location} placeholder='Location' onChange={(e)=>setLocation(e.target.value)}/>
                {errors.location && <div className='text-danger'>{errors.location}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Images <span className='text-danger'>*</span></label>
                <input type="file" className="form-control" name="images" onChange={handleImageChange} multiple/>
                {errors.images && <div className='text-danger'>{errors.images}</div>}
              </div>
              <div className="col-md-12">
                <label className="form-label">Description <span className='text-danger'>*</span></label>
                <textarea name="description" className="form-control" value={description} placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}/>
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
