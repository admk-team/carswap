import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Edit = ({category }: any) => {
  const { data, errors, setData, post } = useForm({
    title: category.title || '',
    _method: 'put',
  });

  const handleSubmit = ()=> {
    post(route('admin.categories.update', category.id))
  }

  return (
    <>
     <Head title="Edit category" />
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Category</h1>
        <div className="row">
          <div className="col-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Edit Category</h6>
            </div>
            <div className="card-body">
              <form className="row g-3" encType='multipart/form-data'>
                <div className="col-12">
                  <label className="form-label">Title <span className='text-danger'>*</span></label>
                  <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={data.title} onChange={(e)=>setData('title', e.target.value)} />
                  {errors.title && <div className='text-danger'>{errors.title}</div>}
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()} >Update</button>
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
Edit.layout = (page:any) => <Layout children={page} />;
export default Edit;
