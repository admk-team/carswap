import React, { useEffect, useState } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';

const Index = ({ auth,payment_data,success, error }: any) => {
  const { errors } = usePage().props
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { data, setData, post, processing } = useForm({
    public_key: payment_data.public_key?payment_data.public_key:'',
    booking_price: payment_data.booking_price?payment_data.booking_price:'',
    post_car_price: payment_data.post_car_price?payment_data.post_car_price:'',
  });
  function handleSubmit(e:any){
    e.preventDefault();
    post(route('admin.paymentGateway.store'))
  }
  useEffect(() => {
    if (success) {
    setSuccessMessage(success);
    }
    if (error) {
    setErrorMessage(error);
    }
}, []);
  return (
    <>
     <Head title="Ravepay Settings" />
      <div className="container-fluid">
        <div className="row justify-content-center">
        <h1 className="h3 mb-2 text-gray-800">Payment Gateway</h1>
          <div className="col-12 col-md-6">
            {successMessage && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {successMessage}
                <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
          {errorMessage && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {errorMessage}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Ravepay Settings</h6>
              </div>
              <div className="card-body">
                <form className="row g-3" method='post' onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label className="form-label">Public Key <span className='text-danger'>*</span></label>
                    <input type="text" name="public_key" className="form-control" placeholder="Public Key"  
                    value={
                      data.public_key
                    } 
                    onChange={(e)=>setData('public_key',e.target.value)} />
                    {errors.public_key && <div className='text-danger'>{errors.public_key}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Booking Price <span className='text-danger'>*</span></label>
                    <input type="number" name="booking_price" className="form-control" placeholder="Booking Price"  value={
                      data.booking_price
                    } onChange={(e)=>setData('booking_price',e.target.value)} />
                    {errors.booking_price && <div className='text-danger'>{errors.booking_price}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Post Car Price <span className='text-danger'>*</span></label>
                    <input type="number" name="post_car_price" className="form-control" placeholder="Post Car Price"  value={
                     data.post_car_price
                    } onChange={(e)=>setData('post_car_price',e.target.value)} />
                    {errors.post_car_price && <div className='text-danger'>{errors.post_car_price}</div>}
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
Index.layout = (page:any) => <Layout children={page} />;
export default Index;
