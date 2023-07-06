import React from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import {useState} from 'react';

function Layout({ children }) {
    const [style , setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const changeStyle = () =>{
       if(style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
           setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
       }else{
           setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
       }
    };
    return (
        <>
    <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <Sidebar onCollapseChange={changeStyle} style={style} />
        {/* <!-- End of Sidebar --> */}
        {/* 
<!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <TopNavbar onCollapseChange={changeStyle} />
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
                {children}
                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            {/* <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer> */}
            {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */ }
    {/* 
<!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* <!-- Logout Modal--> */ }
    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Layout