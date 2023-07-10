import React from "react";
import { useState } from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
function Sidebar({ onCollapseChange, style }) {
    return (
        <ul className={style} id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Car Swap</div>
                <div className="text-center d-none d-md-inline mt-4">
                    <button
                        className="rounded-circle border-0"
                        id="sidebarToggle"
                        onClick={onCollapseChange}
                    ></button>
                </div>
            </a>
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
            <li className={`nav-item ${ route().current("demo") ? "active" : "collapsed" }`} >
                <Link href={route("demo")} className="nav-link collapsed">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Component</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
}

export default Sidebar;