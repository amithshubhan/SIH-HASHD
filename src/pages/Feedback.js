import React from 'react'
import { useLocation } from 'react-router-dom'
import Former from '../components/Former/Former'
import Navbar from '../components/Navbar/Navbar';

const Feedback = () => {

    const location = useLocation();
    var rid = location.state.rid;
    var Rid = rid.rid;
  return (
    <>
    <Navbar/>
     <Former rid = {Rid}>
     </Former>
     {/* <BtnToSend/> */}
    </>
  )
}

export default Feedback