import { Link } from "react-router-dom";
import './Navigation.css';
import logo from "./images/logo-full-dark.svg";
import {IoSearchOutline, IoLogoBuffer } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";

function Navigation() {
    return (
        <header className='navigation'>
            <ul>
                <li className="list">
                    <div className='logo'>
                        <Link to="/" className='nav-link'><img src={logo} alt="" width="" height=""/></Link>
                    </div>
                </li>
                <li className="list">
                    <Link><button className="post">+ Post</button></Link>
                </li>
            </ul>
            <ul className="Rlist">
                <li className='list'>
                    <Link><button className="explore">Explore</button></Link>
                </li>
                <li className='listI'>
                    <Link to="/menu" className='nav-link'><IoSearchOutline className="icon1"/></Link>
                </li>
                <li className='listI'>
                    <Link to="/about" className='nav-link'><IoLogoBuffer className="icon1"/></Link>
                </li>
                <li className='listI'>
                    <Link to="/counter" className='nav-link'><HiChatAlt2 className="icon1"/></Link>
                </li>
                <li className='listI'>
                    <Link to="/contact" className='nav-link'><FaBell className="icon1"/></Link>
                </li>
                <li className='listI'>
                    <Link to="/classcomp" className=''><p className="">T</p></Link>
                </li>
                <li className='listII'>
                    <Link to="/classcomp" className=''><p className="">TheBeeCodes</p></Link>
                </li>
                <li className='list'>
                    {/* <Link to="/cart" className='nav-link'><IoCartOutline className='cart-icon'/>
                    <span className='cart_count'>{cart.length}</span></Link> */}
                </li>
            </ul>
        </header>
    )
}

export default Navigation;