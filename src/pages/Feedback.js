import React from 'react'
import { useLocation } from 'react-router-dom'
import Former from '../components/Former/Former'
import Navbar from '../components/Navbar/Navbar';

const Feedback = () => {

    const location = useLocation();
    var rid = location.state.rid;
    var Rid = rid.rid;
    var partdetails = location.state.partdetail;
    var partdetail = partdetails.partdetail;
    console.log('rid and partdetails in feedback is ',Rid," ",partdetail)
    console.log("partdetails in ",partdetail);
  return (
    <>
    <Navbar/>
     <Former rid = {Rid} partdetail={partdetail}>
     </Former>
     {/* <BtnToSend/> */}
    </>
  )
}

export default Feedback