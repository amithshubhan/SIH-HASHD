import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    height: 100px;
    width: 100%;
    top:0px;
    background: #b6eb7a;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    
`;

export const Navheading = styled.div`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    margin: 20px 5px;
    letter-spacing: 2px;
    color: #000;
`
export const NavLogo = styled.div`
    height: 70px;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin: 0 50px;
    cursor: pointer;
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 500px;
    font-size: 30px;
    padding: 0 30px;
`;
export const NavItems = styled.div`
    font-family: 'IBM Plex Mono', monospace;

    
`
export const Image = styled.div`
    background-image: url('./kisanseva.png');
    z-index: 2;
`;