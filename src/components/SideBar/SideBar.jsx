import CancelSvg from "../../svgs/CancelSvg/CancelSvg";
import SearchSvg from "../../svgs/SearchSvg/SearchSvg";
import './SideBar.scss'

function SideBar({handleToggleMenu}){
    return(
        <div className="sideBar" id="sideBar">
            <ul>
                <li onClick={handleToggleMenu}><CancelSvg/></li>
                <li><SearchSvg/></li>
            </ul>

        </div>
    )
}
export default SideBar;