import React, { useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Edit = ({brand }: any) => {
  const { data, errors, setData, post, progress } = useForm({
    title: brand.title || '',
    description: brand.description || '',
    image: null,
    _method: 'put',
  });
  const [image, setImage] = useState(null);

  function handleImageChange(e:any) {
    setData('image', e.target.files[0]);
    setImage(e.target.files[0]);
  }

  const handleSubmit = ()=> {
    post(route('admin.brands.update', brand.id))
  }

  return (
    <>
     <Head title="Edit Brand" />
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Brand</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Edit Brand</h6>
            {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )}
          </div>
          <div className="card-body">
            <form className="row g-3" encType='multipart/form-data'>
              <div className="col-12 col-md-6">
                <label className="form-label">Title <span className='text-danger'>*</span></label>
                <input type="text" name="title" className="form-control" placeholder="Enter Title"  value={data.title} onChange={(e)=>setData('title', e.target.value)} />
                {errors.title && <div className='text-danger'>{errors.title}</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Image <span className='text-danger'>*</span></label>
                <input type="file" className="form-control" name="image" onChange={handleImageChange}/>
                {errors.image && <div className='text-danger'>{errors.image}</div>}
              </div>
              <div className="col-md-12">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control" value={data.description} placeholder="Enter Description" onChange={(e)=>setData('description', e.target.value)}/>
              </div>
              <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()} >Update</button>
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
