import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import Modal from "@/Components/Modal";

const Index = ({ auth, users, success, error }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersData, setUsersData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const itemsPerPage = 10;
    useEffect(() => {
        setUsersData(users);
    }, [users]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    const changeUserStatus = (id: number, status: number) => {
      Inertia.get(route("admin.users.status", { id, status }));
    };
    const roleHandler = (id: number, role: any) => {
      Inertia.get(route("admin.users.role", { id, role }));
    };
    const deleteHandler=((id: number)=>{
        setDeleteId(id);
        setShowModal(true);
    });
    const confirmDeleteHandler = () => {
        if (deleteId !== null) {
          Inertia.delete(route("admin.users.destroy", deleteId));
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
        <Head title="User | List"/>
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
                <h1 className="h3 mb-2 text-gray-800">Users</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                            {" "}
                            User List{" "}
                        </h6>
                        <Link
                            href={route("admin.users.create")}
                            className="btn btn-primary"
                        >
                            Add User
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Roles</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((user: any) => (
                                        <tr key={user.id}>
                                            <td>{user?.first_name}</td>
                                            <td>{user?.last_name}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.phone_no}</td>
                                            <td>{user?.city}</td>
                                            <td>{user?.state}</td>
                                            <td>{user?.address}</td>
                                            <td>
                                                <div className="dropdown mb-4">
                                                    <button
                                                        className={`btn btn-${
                                                            user && user.status && user.status == "1" ? "success" : "danger"
                                                        } dropdown-toggle`}
                                                        type="button"
                                                        id="dropdownMenuButton"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        {user && user.status && user.status == "1" ? "Active" : "Deactive"}
                                                    </button>
                                                    <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                        <button className="dropdown-item" onClick={() => changeUserStatus(user.id, 1)} >Active</button>
                                                        <button className="dropdown-item" onClick={() => changeUserStatus(user.id, 0)}>Deactive</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                              <div className="dropdown mb-4">
                                                <button className={`btn btn-${user.role&&user.role==1?'warning':'info'} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  {
                                                    user.role&&user.role==1?'Admin':'User'
                                                  }
                                                </button>
                                                <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                    <button onClick={()=>roleHandler(user.id,1)} className="dropdown-item">Assign Admin Role</button>
                                                    <button onClick={()=>roleHandler(user.id,0)} className="dropdown-item">Remove Admin Role</button>
                                                </div>
                                              </div>
                                            </td>
                                            <td>
                                              <div className="dropdown mb-4">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Action
                                                </button>
                                                <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" href={route('admin.users.edit',user.id)}>Edit</Link>
                                                    <button onClick={()=>deleteHandler(user.id)} className="dropdown-item">Delete</button>
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
                            {Array(Math.ceil(usersData.length / itemsPerPage))
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
