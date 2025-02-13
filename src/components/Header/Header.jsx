import './Header.scss'
import HeartSvg from '../../svgs/HeartSvg/HeartSvg';
import CartSvg from '../../svgs/CartSvg/CartSvg';
import MenuSvg from '../../svgs/MenuSvg/MenuSvg';
import SearchSvg from '../../svgs/SearchSvg/SearchSvg';
import SideBar from '../SideBar/SideBar';
import { Link} from 'react-router-dom';

function Header({toggleSideBar, toggleCart}){
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
                    <li  onClick={toggleCart}className="header-item"><CartSvg /></li>
                   
                </ul>
        
        </div>
       
        <div className="header-container">
           
            <p className="header-logo"> <Link  className="header-logo" to='/'>Arewa </Link></p>
           
          

                <ul className="header-list">
                <li className="header-item"><HeartSvg /></li>
                    {/* <li className="header-item"><IoPersonOutline /></li> */}
                    <li className="header-item"><SearchSvg /></li>
                    <li onClick={toggleCart}className="header-item"><CartSvg /></li>
                </ul>
          
        </div>
       </header>
    )
}
export default Header;