import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import  './Layout.scss'
import Header from "../Header/Header.jsx";
import CartTab from '../CartTab/CartTab.jsx'
import SideBar from "../SideBar/SideBar.jsx";

function Layout(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false)
   
    function toggleSideBar(){
        setSidebarOpen((prev) => !prev)
       
    }
    function toggleCart (){
        setIsCartOpen((prev)=> !prev)
    }
    return(
        <div className="layout">
          {!isSidebarOpen  && <Header toggleSideBar={toggleSideBar} toggleCart={toggleCart}/>}

          {isSidebarOpen && (
                <div className="sideBar">
                    <SideBar toggleSideBar={toggleSideBar} />
                </div>
            )}
         
         
          <div className={`layout-container${isSidebarOpen ? "sideBar" : ''}`}>
             
              <main className={`main ${isSidebarOpen || isCartOpen ? " hidden" : ''}`}>
                  
                  <Outlet/>
                   
              </main>
              {isCartOpen && (<aside className="cart-tab">
               <CartTab toggleCart ={toggleCart}/>

              </aside>)}
              
          </div>
            
        </div>
    )
}
export default Layout;