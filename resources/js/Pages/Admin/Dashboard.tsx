import { PageProps } from "@/types";
import Layout from "./Layouts/Layout";
import { Link } from "@inertiajs/react";

function Dashboard({ auth }: PageProps) {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                {/* <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                    Generate Report
                </a> */}
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Users
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        35
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Cars
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        222
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-car fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Swaps Done 
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                14%
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div
                                                    className="progress-bar bg-info a1"
                                                    role="progressbar"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        18
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
            <div className="row">
                {/* <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Projects
                            </h6>
                        </div>
                        <div className="card-body">
                            <h4 className="small font-weight-bold">
                                Server Migration{" "}
                                <span className="float-right">20%</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bg-danger a2"
                                    role="progressbar"
                                ></div>
                            </div>
                            <h4 className="small font-weight-bold">
                                Sales Tracking{" "}
                                <span className="float-right">40%</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bg-warning a3"
                                    role="progressbar"
                                ></div>
                            </div>
                            <h4 className="small font-weight-bold">
                                Customer Database{" "}
                                <span className="float-right">60%</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar a4"
                                    role="progressbar"
                                ></div>
                            </div>
                            <h4 className="small font-weight-bold">
                                Payout Details{" "}
                                <span className="float-right">80%</span>
                            </h4>
                            <div className="progress mb-4">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                ></div>
                            </div>
                            <h4 className="small font-weight-bold">
                                Account Setup{" "}
                                <span className="float-right">Complete!</span>
                            </h4>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-success a6"
                                    role="progressbar"
                                ></div>
                            </div>
                        </div>
                    </div>
                   
                </div> */}

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Go To Requests
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <Link href={route('admin.cars.index')}>
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4 a7"
                                    src="/img/undraw_posting_photo.svg"
                                    alt="..."
                                />
                                </Link>
                                
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

Dashboard.layout = (page:any) => <Layout children={page} />;

export default Dashboard;
