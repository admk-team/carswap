import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";

const Index = ({ auth }: any) => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Brands</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary"> Brand List </h6>
                        <Link href={route('admin.brands.create')} className="btn btn-primary">Add Brand</Link>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                  <tr>
                                      <th>Image</th>
                                      <th>Title</th>
                                      <th>Description</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Shad Decker</td>
                                  <td>Regional Director</td>
                                  <td>Edinburgh</td>
                                  <td>51</td>
                                  <td>2008/11/13</td> 
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Index.layout = (page) => <Layout children={page} />;
export default Index;
