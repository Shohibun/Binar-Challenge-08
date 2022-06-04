import React from "react";
import Sidebar from "../components/SidebarDashboarAdmin"
import Navbar from "../components/NavbarAdmin"
import Content from "../pages/DashboardAdmin"

export default function DashboardAdmin() {
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
