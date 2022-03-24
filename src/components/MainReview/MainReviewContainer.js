import React from 'react'
import HeadReview from '../HeadReview/HeadReview';
import MainDetails from '../HeadReview/MainDetails';
import Imagepart from '../HeadReview/Imagepart';
const MainReviewContainer = ({partdetail}) => {
  return (
    <>
    <div style={{
        backgroundColor: 'transparent',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px'
      }}>

    <HeadReview partdetail = {partdetail}></HeadReview>
    <MainDetails partdetail = {partdetail}></MainDetails>
    <Imagepart partdetail = {partdetail}/>
    </div>
    {/* <Imagepart></Imagepart> */}
    </>
  )
}

export default MainReviewContainer