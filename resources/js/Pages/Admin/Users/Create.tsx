import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Create = ({ auth }: any) => {
  const { errors } = usePage().props
  const [image, setImage] = useState([]);
  const { data, setData, post, processing } = useForm({
    first_name: '',
    last_name: '',
    phone_no: '',
    city: '',
    state: '',
    address: '',
    email: '',
    password: '',
    password_confirmation: '',
    image:[]
  });

  function handleImageChange(e:any) {
    setData('image',e.target.files[0]);
  }

  function handleSubmit(e:any){
    e.preventDefault();
    post(route('admin.users.store'))
  }
  return (
    <>
     <Head title="Add User" />
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">User</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Add User</h6>
          </div>
          <div className="card-body">
            <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">First Name <span className='text-danger'>*</span></label>
                <input type="text" name="first_name" className="form-control" placeholder="First Name"  value={data.first_name} onChange={(e)=>setData('first_name',e.target.value)} />
                {errors.first_name && <div className='text-danger'>{errors.first_name}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Last Name <span className='text-danger'>*</span></label>
                <input type="text" name="last_name" className="form-control" placeholder="Last Name"  value={data.last_name} onChange={(e)=>setData('last_name',e.target.value)} />
                {errors.last_name && <div className='text-danger'>{errors.last_name}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Email <span className='text-danger'>*</span></label>
                <input type="email" name="email" className="form-control" placeholder="Email"  value={data.email} onChange={(e)=>setData('email',e.target.value)} />
                {errors.email && <div className='text-danger'>{errors.email}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Password <span className='text-danger'>*</span></label>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>setData('password',e.target.value)} />
                {errors.password && <div className='text-danger'>{errors.password}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Confirm Password <span className='text-danger'>*</span></label>
                <input type="password" name="password_confirmation" className="form-control" placeholder="Confirm Password" onChange={(e)=>setData('password_confirmation',e.target.value)} />
                {errors.password_confirmation && <div className='text-danger'>{errors.password_confirmation}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Phone Number <span className='text-danger'>*</span></label>
                <input type="text" name="phone_no" className="form-control" placeholder="Phone Number"  value={data.phone_no} onChange={(e)=>setData('phone_no',e.target.value)} />
                {errors.phone_no && <div className='text-danger'>{errors.phone_no}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">City <span className='text-danger'>*</span></label>
                <input type="text" name="city" className="form-control" placeholder="City"  value={data.city} onChange={(e)=>setData('city',e.target.value)} />
                {errors.city && <div className='text-danger'>{errors.city}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">State <span className='text-danger'>*</span></label>
                <input type="text" name="state" className="form-control" placeholder="State"  value={data.state} onChange={(e)=>setData('state',e.target.value)} />
                {errors.state && <div className='text-danger'>{errors.state}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Address <span className='text-danger'>*</span></label>
                <input type="text" name="address" className="form-control" placeholder="Address"  value={data.address} onChange={(e)=>setData('address',e.target.value)} />
                {errors.address && <div className='text-danger'>{errors.address}</div>}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <label className="form-label">Image <span className='text-danger'>*</span></label>
                <input type="file" className="form-control" name="image" onChange={handleImageChange}/>
                {errors.image && <div className='text-danger'>{errors.image}</div>}
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
