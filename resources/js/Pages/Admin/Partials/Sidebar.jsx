import React from "react";
import { useState } from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import Logo from "@/Assets/headerlogo.png"

function Sidebar({ onCollapseChange, style }) {
    return (
        <ul className={style} id="accordionSidebar">
            <Link href="" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon ">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <img src={Logo} alt=""  />
                </div>
                <div className="sidebar-brand-text mx-3">Car Swap</div>
                <div className="text-center d-none d-md-inline mt-4">
                    <button
                        className="rounded-circle border-0"
                        id="sidebarToggle"
                        onClick={onCollapseChange}
                    ></button>
                </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${route().current("dashboard") ? "active" : "collapsed" }`} >
                <Link className="nav-link" href={route("admin.dashboard")}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.brands.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.brands.index")} className="nav-link collapsed">
                    <i className="fas fa fa-list"></i>
                    <span>Brands</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.cars.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.cars.index")} className="nav-link collapsed">
                    <i className="fa fa-car"></i>
                    <span>Cars</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.users.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.users.index")} className="nav-link collapsed">
                    <i className="fa fa-user"></i>
                    <span>Users</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default Sidebar;
