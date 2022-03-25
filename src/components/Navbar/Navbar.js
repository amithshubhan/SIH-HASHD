import React,{useState,useEffect} from 'react';
import { Nav,NavContainer,NavLogo,Navheading, NavMenu, NavItems,Image } from './Navbarele';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

const Navbar = () => {
  return (
      <Nav>

    <NavContainer>
    <Link style={{ textDecoration: 'none' }} to='/'>
      <NavLogo>
            <Navheading>SIH-HASHD</Navheading>
        </NavLogo></Link>
        <NavMenu>
            <NavItems>
                {/* <Homebtn></Homebtn> */}
                
                {/* <NavLinks {}/>
                <NavLinks/>
                <NavLinks/> */}
                {/* <img src='./kisanseva.png'></img> */}
            </NavItems>
            
        </NavMenu>
    </NavContainer>
      </Nav>
  )
}

export default Navbar