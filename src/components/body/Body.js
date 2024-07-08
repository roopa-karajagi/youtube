import React from "react";
import SideBar from "./sideBar/SideBar";
import { Outlet } from "react-router-dom";

const BodyComponent = () => {
    return (
        <div className="grid grid-flow-col">
            <SideBar />
           <Outlet />
        </div>
    )
}

export default BodyComponent;