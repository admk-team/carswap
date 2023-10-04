import React, { useState,useEffect } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';
import UserIcon from '@/Assets/user-icon.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Details = ({ auth,payment,car,user}: any) => {
// console.log('auth',payment);
  return (
    <>
     <Head title="Edit Car" />
      <div className="container-fluid">
        <h1 className="h4 mb-2 text-gray-800">User</h1>
       
         <div className="card shadow mb-4">
          <div className="card-body">
          <div className="table-responsive">
           <table className="table">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone No</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Address</th>
                                        <th>User Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr key={user.id}>
                                          <td>{user.first_name? user.first_name: 'No user data available'}</td>
                                          <td>{user.last_name? user.last_name: 'No user data available'}</td>
                                          <td>{user.email? user.email: 'No user data available'}</td>
                                          <td>{user.phone_no? user.phone_no: 'No user data available'}</td>
                                          <td>{user.city? user.city: 'No user data available'}</td>
                                          <td>{user.state? user.state: 'No user data available'}</td>
                                          <td>{user.address? user.address: 'No user data available'}</td>
                                          <td><img src={user &&  user.image ? '/storage/' + user.image : UserIcon} alt="Profile" className="w-10 h-10 rounded-full" /></td>                                         
                                        </tr>
                                </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
                            
                              <h1 className="h4 mb-2 text-gray-800">Car</h1>
                              <div className="card shadow mb-4">
                             <div className="card-body">
                             <div className="table-responsive">
                             <table className="table">
                                <thead>
                                    <tr>
                                        <th>Location</th>
                                        <th>Street</th>
                                        <th>L.G.A</th>
                                        <th>Title</th>
                                        <th>Condition</th>
                                        <th>Engine</th>
                                        <th>Milage</th>
                                        <th>Price</th>
                                        <th>Fuel Type</th>
                                        <th>Modal</th>
                                        <th>Transmission</th>
                                        <th>Extrior Color</th>
                                        <th>Interior Color</th>
                                        <th>Drive</th>
                                        <th>Cylinder</th>
                                        <th>Body Type</th>
                                        <th>Price Negotiable</th>
                                        <th>Custom Paper</th>
                                        <th>Year</th>
                                        <th>Description</th>
                                        <th>Car Images</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr key={car.id}>
                                        <td>{car.location? car.location: 'No data available'}</td>
                                        <td>{car.street? car.street: 'No data available'}</td>
                                        <td>{car.lga? car.lga: 'No data available'}</td>
                                        <td>{car.title? car.title: 'No data available'}</td>
                                        <td>{car.condition? car.condition: 'No data available'}</td>
                                        <td>{car.engine_capacity? car.engine_capacity: 'No data available'}</td>
                                        <td>{car.mileage? car.mileage: 'No data available'}</td>
                                        <td>{car.price? car.price: 'No data available'}</td>
                                        <td>{car.fuel_type? car.fuel_type: 'No data available'}</td>
                                        <td>{car.model? car.model: 'No data available'}</td>
                                        <td>{car.transmission? car.transmission: 'No data available'}</td>
                                        <td>{car.exterior_color? car.exterior_color: 'No data available'}</td>
                                        <td>{car.interior_color? car.interior_color: 'No data available'}</td>
                                        <td>{car.drive? car.drive: 'No data available'}</td>
                                        <td>{car.cylinder? car.cylinder: 'No data available'}</td>
                                        <td>{car.body_type? car.body_type: 'No data available'}</td>
                                        <td>{car.price_negotiable? car.price_negotiable: 'No data available'}</td>
                                        <td>{car.custom_paper? car.custom_paper: 'No data available'}</td>
                                        <td>{car.year? car.year: 'No data available'}</td>
                                        <td>{car.description? car.description: 'No data available'}</td>
                                        <td><img src={car &&  car.images ? '/storage/' + car.images[0] : UserIcon} alt="Profile" className="w-10 h-10 " /></td>                                      
                                        </tr>
                                  
                                </tbody>
                            </table>
                             </div>
                            </div>
                            </div>
                             <h1 className="h4 mb-2 text-gray-800">Payment</h1>
                             <div className="card shadow mb-4">
                             <div className="card-body">
                             <div className="table-responsive">
                             <table className="table">
                                          <thead>
                                             <tr>
                                             <th>Amount</th>
                                            <th>Response Code</th>
                                            <th>Response Message</th>
                                            <th>Charge amount</th>
                                            <th>Transaction Date</th>
                                            <th>Currency</th>
                                            <th>Transaction Id</th>
                                            <th>Status</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                           {payment && Object.keys(payment).length > 0 ? (
                                             <tr key={payment.id}>
                                               <td>{payment.amount ? payment.amount : 'No payment data available'}</td>
                                               <td>
                                                 {payment.charge_response_code
                                                   ? payment.charge_response_code
                                                   : 'No payment data available'}
                                               </td>
                                                                                      <td>
                                                 {payment.charge_response_message
                                                   ? payment.charge_response_message
                                                   : 'No payment data available'}
                                               </td>
                                               <td>
                                                 {payment.charged_amount
                                                   ? payment.charged_amount
                                                   : 'No payment data available'}
                                               </td>
                                               <td>{payment.date ? payment.date : 'No payment data available'}</td>
                                               <td>
                                                 {payment.currency ? payment.currency : 'No payment data available'}
                                               </td>
                                               <td>
                                               {payment.transaction_id
                                                 ? payment.transaction_id
                                                 : 'No payment data available'}
                                             </td>
                                             <td>{payment.status ? payment.status : 'No payment data available'}</td>
                                           </tr>
                                         ) : (
                                           <tr>
                                              <td >
                                               <h5 className="text-red-500">Payment has not been done yet.</h5>
                                             </td>
                                        </tr>
                                 )}
                               </tbody>
                            </table>

                               </div>
                               </div>
                             </div>
                           </div>
    </>
  );
};
Details.layout = (page:any) => <Layout children={page} />;
export default Details;
