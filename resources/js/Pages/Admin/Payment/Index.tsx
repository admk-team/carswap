import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Modal from "@/Components/Modal";

const Index = ({ auth, payments, success, error }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paymentsData, setPaymentsData] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const itemsPerPage = 10;
    useEffect(() => {
        setPaymentsData(payments);
    }, [payments]);
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
                <h1 className="h3 mb-2 text-gray-800">Payments</h1>
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
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Transaction ID</th>
                                        <th>Amount</th>
                                        <th>Currency</th>
                                        <th>Status</th>
                                        <th>Transaction Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((payment: any) => (
                                        <tr key={payment.id}>
                                            <td>{payment?.user.first_name}</td>
                                            <td>{payment?.user.email}</td>
                                            <td>{payment?.transaction_id}</td>
                                            <td>{payment?.amount}</td>
                                            <td>{payment?.currency}</td>
                                            <td>{payment?.status}</td>
                                            <td>{payment?.date}</td>
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
