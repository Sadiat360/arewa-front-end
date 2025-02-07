import { Outlet } from "react-router-dom";
import React from "react";
import  './Layout.scss'
import Header from "../Header/Header.jsx";
import CartTab from '../CartTab/CartTab.jsx'

function Layout(){
    return(
        <div className="layout">
            <main>
                <Header/>
                <Outlet/>
                 
            </main>
            <CartTab/>
            
            </div>
    )
}
export default Layout;