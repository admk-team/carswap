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
            <li className={`nav-item ${route().current("categories.index") ? "active" : "collapsed" }`} >
                <Link className="nav-link" href={route("admin.categories.index")}>
                    <i className="fas fa-book"></i>
                    <span>Category</span>
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
            {/* <li className={`nav-item ${ route().current("admin.cars.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.cars.index")} className="nav-link collapsed">
                    <i className="fa fa-car"></i>
                    <span>Cars For Sale</span>
                </Link>
            </li> */}
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.swap.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.swap.index")} className="nav-link collapsed">
                    <i className="fa fa-car"></i>
                    <span>Post a Car</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.users.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.users.index")} className="nav-link collapsed">
                    <i className="fa fa-user"></i>
                    <span>Users</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.payments.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.payments.index")} className="nav-link collapsed">
                    <i className="fa fa-sign"></i>
                    <span>Payments</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.ratings.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.ratings.index")} className="nav-link collapsed">
                    <i className="fa fa-star"></i>
                    <span>Ratings</span>
                </Link>
            </li>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${ route().current("admin.inspections.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.inspections.index")} className="nav-link collapsed">
                    <i className="fa fa-sign"></i>
                    <span>Buy inspection details</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <li className={`nav-item ${ route().current("admin.swap_Ins.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.swap_Ins.index")} className="nav-link collapsed">
                    <i className="fa fa-sign"></i>
                    <span>Swap inspection details</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <li className={`nav-item ${ route().current("admin.paymentGateway.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.paymentGateway.index")} className="nav-link collapsed">
                    <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <span>Ravepay Gateway</span>
                </Link>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <li className={`nav-item ${ route().current("admin.partners.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.partners.index")} className="nav-link collapsed">
                    <i className="fa fa-sign"></i>
                    <span>Partners</span>
                </Link>
            </li>
            <li className={`nav-item ${ route().current("admin.subscribe.index") ? "active" : "collapsed" }`} >
                <Link href={route("admin.subscribe.index")} className="nav-link collapsed">
                    <i className="fa fa-sign"></i>
                    <span>Subscribe</span>
                </Link>
            </li>
        </ul>
    );
}

export default Sidebar;
