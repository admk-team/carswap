import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Modal from "@/Components/Modal";

const Index = ({ auth, bookings, success, error }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paymentsData, setPaymentsData] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const itemsPerPage = 10;
    useEffect(() => {
        setPaymentsData(bookings);
    }, [bookings]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = paymentsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    useEffect(() => {
        if (success) {
        setSuccessMessage(success);
        }
        if (error) {
        setErrorMessage(error);
        }
    }, []);
    const changeBrandStatus = (id: number, status: number) => {
        Inertia.get(route("admin.swap_Ins.status", { id, status }));
      };
    return (
        <>
     
        <Head title="Payments | List"/>
            <div className="container-fluid">
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
                <h1 className="h3 mb-2 text-gray-800">Swap Inspection Details</h1>
                <div className="card shadow mb-4">
                    {/* <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                            {" "}
                            Review List{" "}
                        </h6>
                        <Link
                            href={route("admin.ratings.create")}
                            className="btn btn-primary"
                        >
                            Add Reviews
                        </Link>
                    </div> */}
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Inspection Time</th>
                                        <th>Inspection Date</th>
                                        <th>Selected Car</th>
                                        <th>Swaped Car</th>
                                        <th>Price</th>
                                        <th>Price Diffrence</th>
                                        <th>Status</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((Ins: any) => (
                                        <tr key={Ins.id}>
                                            {/* <td>{payment?.user.first_name}</td>
                                            <td>{payment?.user.email}</td> */}
                                            <td>{Ins?.Inspection_Time}</td>
                                            <td>{Ins?.Inspection_date}</td>
                                            <td>{Ins.mycar?.title}</td>
                                            <td>{Ins.car?.title}</td>
                                            <td>{Ins.car?.price}</td>
                                            <td>{Ins?.price_diff}</td>
                                            <td>
                                            <div className="dropdown mb-4">
                                              <button
                                                  className={`btn btn-${
                                                    Ins && Ins.status && Ins.status === 1 ? "success" : "danger"
                                                  } dropdown-toggle`}
                                                  type="button"
                                                  id="dropdownMenuButton"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                              >
                                                  {Ins && Ins.status && Ins.status === 1 ? "Active" : "Deactive"}
                                              </button>
                                              <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                  <button className="dropdown-item" onClick={() => changeBrandStatus(Ins.id, 1)} >Active</button>
                                                  <button className="dropdown-item" onClick={() => changeBrandStatus(Ins.id, 0)}>
                                                      Deactive
                                                  </button>
                                              </div>
                                          </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                          <ul className="pagination">
                            {Array(Math.ceil(paymentsData.length / itemsPerPage))
                                .fill(0)
                                .map((_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${
                                            currentPage === index + 1 ? "active" : ""
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Index.layout = (page: any) => <Layout children={page} />;
export default Index;
