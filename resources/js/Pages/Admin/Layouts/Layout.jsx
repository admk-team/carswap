import React from "react";
import { useState } from "react";
import TopNavbar from "../Partials/TopNavbar";
import Sidebar from "../Partials/Sidebar";

function Layout({ children }) {
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
            <div id="wrapper">
                <Sidebar onCollapseChange={changeStyle} style={style} />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopNavbar onCollapseChange={changeStyle} />

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
                            <a className="btn btn-primary" href="login.html">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
