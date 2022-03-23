import React,{useState,useEffect} from 'react';
import { Nav,NavContainer,NavLogo,Navheading, NavMenu, NavItems,Image } from './Navbarele';

const Navbar = () => {
  return (
      <Nav>

    <NavContainer>
        <NavLogo>
            <Navheading>SIH-HASHD</Navheading>
        </NavLogo>
        <NavMenu>
            <NavItems>
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