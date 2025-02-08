import { useState } from "react";
import CancelSvg from "../../svgs/CancelSvg/CancelSvg";
import SearchSvg from "../../svgs/SearchSvg/SearchSvg";
import ProfileSvg from '../../svgs/ProfileSvg/ProfileSvg.jsx'
import { Link } from "react-router-dom";
import './SideBar.scss'

function SideBar({toggleSideBar}){
   
    return(
            <>
            <nav className="sideBar-nav">
                 <button className="sideBar-nav__btn"onClick={toggleSideBar}><CancelSvg/></button>
               <ul className="sideBar-item">
                   <li className="sideBar-nav__list"><SearchSvg/></li>
                   <li className="sideBar-nav__list"><ProfileSvg/></li>
               </ul>

            </nav>
            <div>
                <Link to='/'><p>Shop all Arewa Products</p></Link>
            </div>

            </>
           

     
    )
}
export default SideBar;