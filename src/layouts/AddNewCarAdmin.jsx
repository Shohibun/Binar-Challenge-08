import React from "react";
import Sidebar from "../components/SidebarListCarAdmin";
import Navbar from "../components/NavbarAdmin";
import Content from "../pages/AddNewCarAdmin";

export default function AddNewCarAdmin() {
    return (
        <div className="wrapper">
            <Sidebar/>
            <div id="content">
                <Navbar/>
                <Content/>
            </div>
        </div>
    )
}
