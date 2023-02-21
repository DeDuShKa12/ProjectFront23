import React from 'react';
import {Header, Sidebar} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};