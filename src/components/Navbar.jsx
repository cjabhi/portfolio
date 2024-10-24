import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click , setClick] = useState(false);
    const handleclick = ()=>{setClick(!click)};
    const [color , setcolor] = useState(false);
    const handlecolor = ()=>{
        if(window.scrollY>=1){
            setcolor(true);
        }else{
            setcolor(false);
        }
    }
    window.addEventListener("scroll" , handlecolor);
  return (
    <div className={color ? "header header-bg" : " header"} >
        <Link> <h1>Abhishek Sharma</h1> </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li> <Link to={'/'} >Home</Link> </li>
            <li> <Link to={'/about'} >About</Link> </li>
            <li> <Link to={'/project'}>Projects</Link> </li>
            <li> <Link to={'/contact'} >Contact</Link> </li>
        </ul>
        <div className='hamburger' >
            {
                !click ? (<FaBars size={20} style={{color:"#fff"}} onClick={handleclick} />) : (<FaTimes size={20} style={{color:"#fff"}} onClick={handleclick} />)
            }
        </div>
        
    </div>
  )
}

export default Navbar