import './Header.scss'
import HeartSvg from '../../svgs/HeartSvg/HeartSvg';
import CartSvg from '../../svgs/CartSvg/CartSvg';
import MenuSvg from '../../svgs/MenuSvg/MenuSvg';
import SearchSvg from '../../svgs/SearchSvg/SearchSvg';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
function Header(){
    const [openSideBar, setOpenSideBar] = useState(false);
    const [sectionId, setSectionId] = useState()
    function handleToggleMenu(){
        setOpenSideBar(!openSideBar)
        
    }
    function handleSectionClick(event, sectionId){
         event.preventDefault();
         const section = document.getElementById(sectionId);
         if(section){
            section.scrollIntoView({behaviour: "ease-in"});
         }
         setSectionId()
    }
    return(
       <header className="header">
        <div className="header-container__mob">
            
                <ul className="header-list__left">
                    <li onClick={(e)=> handleSectionClick(e,'sideBar')}className="header-item"><MenuSvg className="header-item__icon"/></li>
                    <li className="header-item"><SearchSvg /></li>
                </ul>
           
            <p className="header-logo">Arewa</p>
           
                <ul className="header-list__right">
                    <li className="header-item"><HeartSvg /></li>
                    <li className="header-item"><CartSvg /></li>
                </ul>
        
        </div>
        {/* {openSideBar === true ?(<SideBar handleToggleMenu={handleToggleMenu}/>) : null } */}
        
        <div className="header-container">
            <p className="header-logo">Arewa</p>

                <ul className="header-list">
                <li className="header-item"><HeartSvg /></li>
                    {/* <li className="header-item"><IoPersonOutline /></li> */}
                    <li className="header-item"><SearchSvg /></li>
                    <li className="header-item"><CartSvg /></li>
                </ul>
          
        </div>
       </header>
    )
}
export default Header;