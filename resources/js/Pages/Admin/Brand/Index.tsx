import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Modal from "@/Components/Modal";

const Index = ({ auth, brands, success, error }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [brandsData, setBrandsData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const itemsPerPage = 10;
    useEffect(() => {
        setBrandsData(brands);
    }, [brands]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = brandsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    const changeBrandStatus = (id: number, status: number) => {
      Inertia.get(route("admin.brands.status", { id, status }));
    };
    const deleteHandler=((id: number)=>{
        setDeleteId(id);
        setShowModal(true);
    });
    const confirmDeleteHandler = () => {
        if (deleteId !== null) {
          Inertia.delete(route("admin.brands.destroy", deleteId));
        }
        setShowModal(false);
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
        <Head title="Brand | List"/>
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
                <h1 className="h3 mb-2 text-gray-800">Brands</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                            {" "}
                            Brand List{" "}
                        </h6>
                        <Link
                            href={route("admin.brands.create")}
                            className="btn btn-primary"
                        >
                            Add Brand
                        </Link>
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
                                    {currentItems.map((brand: any) => (
                                        <tr key={brand.id}>
                                            <td>
                                                <img
                                                    src={
                                                        "/storage/" +
                                                        brand?.image
                                                    }
                                                    alt=""
                                                    className="h-[50px] w-[100px]"
                                                />
                                            </td>
                                            <td>{brand?.title}</td>
                                            <td>{brand?.description}</td>
                                            <td>
                                            <div className="dropdown mb-4">
                                              <button
                                                  className={`btn btn-${
                                                      brand && brand.status && brand.status === 1 ? "success" : "danger"
                                                  } dropdown-toggle`}
                                                  type="button"
                                                  id="dropdownMenuButton"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                              >
                                                  {brand && brand.status && brand.status === 1 ? "Active" : "Deactive"}
                                              </button>
                                              <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                  <button className="dropdown-item" onClick={() => changeBrandStatus(brand.id, 1)} >Active</button>
                                                  <button className="dropdown-item" onClick={() => changeBrandStatus(brand.id, 0)}>
                                                      Deactive
                                                  </button>
                                              </div>
                                          </div>
                                            </td>
                                            <td>
                                              <div className="dropdown mb-4">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Action
                                                </button>
                                                <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" href={route('admin.brands.edit',brand.id)}>Edit</Link>
                                                    <button onClick={()=>deleteHandler(brand.id)} className="dropdown-item">Delete</button>
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
                            {Array(Math.ceil(brandsData.length / itemsPerPage))
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
            {/* Delete modal */}
            {showModal && (
                <Modal show={true} onClose={() => setShowModal(false)}>
                    <div className="modal-dialog">
                        <div className="modal-content border-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Confirm Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete?
                        </div>
                        <div className="modal-footer">
                            <button  className="btn btn-danger" onClick={confirmDeleteHandler}>Yes</button>
                            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                        </div>
                    </div>
              </Modal>
            )}
        </>
    );
};
Index.layout = (page: any) => <Layout children={page} />;
export default Index;
