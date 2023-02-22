import React from 'react';
import {Header, Sidebar} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = ({switchTheme, theme}) => {
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme}/>
            <Sidebar theme={theme}/>
            <Outlet theme={theme}/>
        </div>
    );
};

export {MainLayout};