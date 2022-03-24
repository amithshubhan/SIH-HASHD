import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MainHead = styled.div`
    display:flex;
    justify-content: left;
    align-items: center;
    display: flex;
    marign: 20px;
    paddin: 10px;
    
`
export const SmallHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 20px;
    font-weight: 400;
    
`;
export const ActHead = styled.div`
margin: 10px;
padding: 10px;
font-family: 'IBM Plex Mono', monospace;
font-size: 60px;
font-weight: 800;
`;
export const HeadCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: rgb(83,160,66);
    margin: 30px;
    padding: 40px;
    border-radius: 20px;
    color:white;
    box-shadow: 10px 10px 5px grey;
    
`;
export const Smallcontent = styled.div`
    margin: 5px;
    padding: 5px;
`;