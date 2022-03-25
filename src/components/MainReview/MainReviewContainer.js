import React from 'react'
import HeadReview from '../HeadReview/HeadReview';
import MainDetails from '../HeadReview/MainDetails';
import Imagepart from '../HeadReview/Imagepart';
import styled from 'styled-components';
const MainReviewContainer = ({partdetail}) => {
  return (
    <>
    <ReviewCont style={{
        
      }}>

    <HeadReview partdetail = {partdetail}></HeadReview>
    <MainDetails partdetail = {partdetail}></MainDetails>
    <Imagepart partdetail = {partdetail}/>
    </ReviewCont>
    {/* <Imagepart></Imagepart> */}
    </>
  )
}

export default MainReviewContainer

const ReviewCont = styled.div`
background-color: transparent;
border-radius: 20px;
padding: 20px;
margin: 20px;

@media screen and (max-width:760px){
  padding: 10px;
  margin: 10px;
}
`