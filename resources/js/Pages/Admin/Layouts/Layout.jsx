import React from "react";
import { useState } from "react";
import TopNavbar from "../Partials/TopNavbar";
import Sidebar from "../Partials/Sidebar";
import { useForm } from "@inertiajs/inertia-react";

function Layout({children}) {
    // console.log(children.props.auth.user)
    const { post } = useForm();
    
    const [style, setStyle] = useState(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    );
    const changeStyle = () => {
        if (
            style ==
            "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ) {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
            );
        } else {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            );
        }
    };
    return (
        <>
            <div>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
                <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="/vendor/fontawesome-free/css/custom.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                <link href="/css/sb-admin-2.min.css" rel="stylesheet" />
            </div>

            <div id="wrapper">
                <Sidebar onCollapseChange={changeStyle} style={style} />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopNavbar onCollapseChange={changeStyle} auth={children.props.auth.user} />

                        <div className="container-fluid">{children}</div>
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            <div
                className="modal fade"
                id="logoutModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Ready to Leave?
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Select "Logout" below if you are ready to end your
                            current session.
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button className="btn btn-primary" type="button" onClick={()=>{
                                post(route('logout'))
                            }}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* srripts */}
            <div>
                {/* <script src="/vendor/jquery/jquery.min.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>

                <script src="/js/sb-admin-2.min.js"></script> */}

                {/* <script src="/vendor/chart.js/Chart.min.js"></script>

                <script src="/js/demo/chart-area-demo.js"></script>
                <script src="/js/demo/chart-pie-demo.js"></script> */}
            </div>
        </>
    );
}

export default Layout;
