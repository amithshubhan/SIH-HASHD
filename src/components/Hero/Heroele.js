import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`

`;
export const HeroCards = styled.div`
    height: 100px;
    margin: 30px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #c7d0d8;
    border-radius: 15px;
    opacity: 0.8;
     
`;
export const Heroleft = styled.div`
    display: flex;
    flex-direction: column;
`
export const Dtitle = styled.div`
    font-size: 40px;
    font-family: 'IBM Plex Mono', monospace;
    margin: 10px;
`;
export const RIDNO = styled.p`
    font-size: 15px;
    font-family: 'IBM Plex Mono', monospace;
    margin: 3px 5px;
    padding: 2px;
`
export const Verify =styled.div`
    
    height: 50px;
    background-color: #708160;
    width: 100px;
    border-radius: 20px;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    

`;
export const Anch = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: white;
`;
export const Rtitle = styled.p`
    
`;
export const Heroright = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin: 10px;
    padding: 5px;
    left: 90%;
`;
export const HeaderTitle = styled.div`
    width: fit-content;
    

    font-family: 'IBM Plex Mono', monospace;
    font-size: 40px;
    font-weight: 600;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
`
export const HeaderContainer = styled.div`
    
    height: 70px;
    border-bottom: 1px solid grey;
    margin: 18px;
    justify-content: left;
    align-items: center;
`
