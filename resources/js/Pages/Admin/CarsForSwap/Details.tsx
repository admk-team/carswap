import React, { useState,useEffect } from 'react'
import Layout from "../Layouts/Layout";
import { Head, useForm, usePage } from '@inertiajs/react';
import { Inertia  } from '@inertiajs/inertia';
import UserIcon from '@/Assets/user-icon.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Details = ({ auth,payment,car,user,brands,category}: any) => {
  const SwapcarOption = car.title1 ? true : false;
console.log('auth',brands);
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
                                        <th>Special Feature</th>
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
                                       
                                 
                                        {SwapcarOption && (
                                        <>
                                        <th>Purpose of Swap</th>
                                        <th>Fixed Engine</th>
                                        <th>Fixed Transmission</th>
                                        </>)}
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
                                        <td>{car.feature? car.feature: 'No data available'}</td>
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
                                        {SwapcarOption && (
                                        <><td>{car.porpose? car.porpose: 'No data available'}</td>
                                        <td>{car.fixedengine? car.fixedengine: 'No data available'}</td>
                                        <td>{car.fixedtrans? car.fixedtrans: 'No data available'}</td>
                                        </>)}
                                        <td>{car.description? car.description: 'No data available'}</td>
                                        <td><img src={car &&  car.images ? '/storage/' + car.images[0] : UserIcon} alt="Profile" className="w-10 h-10 " /></td>                                      
                                        </tr>
                                  
                                </tbody>
                            </table>
                             </div>
                            </div>
                            </div>
                            {SwapcarOption && (
    <div>
        <h1 className="h6 mb-2 text-gray-800">My Swap car Option:</h1>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th>Choose Make</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Condition</th>
                                <th>Interior Color</th>
                                <th>Mileage Max</th>
                                <th>Brand</th>
                                <th>Fuel Type</th>
                                <th>Transmission</th>
                                <th>Extrior Color</th>
                                <th>Cylinder</th>
                                <th>Custom Paper</th>
                                <th>Special Fetaure</th>
                                <th>Price</th>
                             
                                
                                


                            </tr>
                        </thead>
                        <tbody>
                            <tr key={car.id}>
                                <td>Car 1</td>
                                <td>{car.title1 ? car.title1 : 'No data available'}</td>
                                <td>{car.model1 ? car.model1 : 'No data available'}</td>
                                <td>{car.year1 ? car.year1 : 'No data available'}</td>
                                <td>{car.condition1 ? car.condition1 : 'No data available'}</td>
                                <td>{car.interiorColor1 ? car.interiorColor1 : 'No data available'}</td>
                                <td>{car.milage1 ? car.milage1 : 'No data available'}</td>
                                <td>{car.barnd1 ? car.barnd1 : 'No data available'}</td>
                                <td>{car.fuelType1 ? car.fuelType1 : 'No data available'}</td>
                                <td>{car.transmission1 ? car.transmission1 : 'No data available'}</td>
                                <td>{car.exteriorColor1 ? car.exteriorColor1 : 'No data available'}</td>
                                <td>{car.cylinder1 ? car.cylinder1 : 'No data available'}</td>
                                <td>{car.custom_paper1 ? car.custom_paper1 : 'No data available'}</td>
                                <td>{car.feature1 ? car.feature1 : 'No data available'}</td>
                                <td>{car.price1 ? car.price1 : 'No data available'}</td>
                            </tr>
                            <tr key={car.id}>
                                <td>Car 2</td>
                                <td>{car.title2 ? car.title2 : 'No data available'}</td>
                                <td>{car.model2 ? car.model2 : 'No data available'}</td>
                                <td>{car.year2 ? car.year2 : 'No data available'}</td>
                                <td>{car.condition2 ? car.condition2 : 'No data available'}</td>
                                <td>{car.interiorColor2 ? car.interiorColor2 : 'No data available'}</td>
                                <td>{car.milage2 ? car.milage2 : 'No data available'}</td>
                                <td>{car.barnd2 ? car.barnd2 : 'No data available'}</td>
                                <td>{car.fuelType2 ? car.fuelType2 : 'No data available'}</td>
                                <td>{car.transmission2 ? car.transmission2 : 'No data available'}</td>
                                <td>{car.exteriorColor2 ? car.exteriorColor2 : 'No data available'}</td>
                                <td>{car.cylinder2 ? car.cylinder2 : 'No data available'}</td>
                                <td>{car.custom_paper2 ? car.custom_paper2 : 'No data available'}</td>
                                <td>{car.feature2 ? car.feature2 : 'No data available'}</td>
                                <td>{car.price2 ? car.price2 : 'No data available'}</td>
                                   
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)}
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
