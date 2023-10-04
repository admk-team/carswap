import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, usePage } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';

const Create = ({ auth }: any) => {
  const { errors } = usePage().props
  const [title,setTitle]=useState("")
  function handleSubmit(e:any){
    e.preventDefault();
    Inertia.post(route('admin.categories.store'),{title})
  }
  return (
    <>
     <Head title="Create Category" />
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Category</h1>
        <div className="row">
          <div className="col-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Create Category</h6>
              </div>
              <div className="card-body">
                <form className="row g-3" method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
                  <div className="col-12">
                    <label className="form-label">Title <span className='text-danger'>*</span></label>
                    <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)} />
                    {errors.title && <div className='text-danger'>{errors.title}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Create.layout = (page:any) => <Layout children={page} />;
export default Create;
