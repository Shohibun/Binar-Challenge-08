import React from "react";
import Sidebar from "../components/SidebarListCarAdmin";
import Navbar from "../components/NavbarAdmin";
import Content from "../pages/ListCarAdmin";

export default function ListCarAdmin() {
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
