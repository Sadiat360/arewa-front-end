import './Header.scss'
import HeartSvg from '../../svgs/HeartSvg/HeartSvg';
import CartSvg from '../../svgs/CartSvg/CartSvg';
import MenuSvg from '../../svgs/MenuSvg/MenuSvg';
import SearchSvg from '../../svgs/SearchSvg/SearchSvg';
import SideBar from '../SideBar/SideBar';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header({toggleSideBar, toggleCart}){
    // const cart = useSelector((store => store.cart.items))
    // const [openSideBar, setOpenSideBar] = useState(false);
    // const [sectionId, setSectionId] = useState()
    
    // function handleSectionClick(event, sectionId){
    //      event.preventDefault();
    //      const section = document.getElementById(sectionId);
    //      if(section){
    //         section.scrollIntoView({behaviour: "ease-in"});
    //      }
    //      setSectionId()
    // }
    const [totalQuantity, setTotalQuantity] = useState(0)
    const carts = useSelector((store => store.cart.items))
     useEffect(()=> {
        let total = 0;
        carts.forEach(item => total += item.quantity)
        setTotalQuantity(total)
     }, [carts])
    return(
       <header className="header">
        <div className="header-container__mob">
            
                <ul className="header-list__left">
                    <li onClick={toggleSideBar}className="header-item"><MenuSvg className="header-item__icon"/></li>
                    <li className="header-item"><SearchSvg /></li>
                </ul>
           
            <p className="header-logo"><Link to='/' className="header-logo">Arewa</Link></p>
                <ul className="header-list__right">
                    <li className="header-item"><HeartSvg /></li>
                    <div className='header-cartwrap'>
                       <li  onClick={toggleCart}className="header-item"><Link to='/cart'><CartSvg /></Link></li>
                       <span className='header-quantity'>{totalQuantity}</span>
                    </div>
                   
                </ul>
        
        </div>
       
        <div className="header-container">
           
            <p className="header-logo"> <Link to='/' className="header-logo">Arewa</Link></p>
           
                <ul className="header-list">
                <li className="header-item"><HeartSvg /></li>
                    {/* <li className="header-item"><IoPersonOutline /></li> */}
                    <li className="header-item"><SearchSvg /></li>
                    <div className='header-cartwrap'>
                       <li  onClick={toggleCart}className="header-item"><CartSvg /></li>
                       <span className='header-quantity'>{totalQuantity}</span>
                    </div>
                </ul>
          
        </div>
       </header>
    )
}
export default Header;