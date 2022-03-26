import React,{useState} from 'react';
import { 
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    Counter,

  } from './Sidebarele';

const Sidebar = ({isOpen, toggle}) => {
  const [Blur, setBlur] = useState(false);
  
  return (
  <>
    <SidebarContainer isOpen={isOpen} onClick = {toggle}>

        <SidebarWrapper>
        
            <SidebarMenu>
                <SidebarLink to="/home" offset={-80} onClick={toggle}  smooth = {true} 
                duration={500} 
                spy={true} 
                exact='true'><Counter>01.</Counter>Review</SidebarLink>
                <SidebarLink to="/home" offset={-80} onClick={toggle}><Counter>02.</Counter>Not Review</SidebarLink>
                <SidebarLink to="/home" offset={-80} onClick={toggle}><Counter>03.</Counter>Correction</SidebarLink>
            </SidebarMenu>

            {/* <SideBtnWrap>
                <SidebarRoute to="/">Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  </>
  )
};

export default Sidebar;