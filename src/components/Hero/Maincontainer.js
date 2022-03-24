import React from 'react'
import Hero from './Hero'
import Heading from './Heading'
import { ContainerMain } from './ContainerMain'

const Maincontainer = ({obj}) => {
  var mp = new Map();
    obj.map((items,key)=>{
        console.log('RID in Mc is',items.RID);
        return mp.set(items.RID,items);
        
    })
    
    console.log('this is the get function',mp.get('1648130689933'));
  return (
      <>
    <Heading>Queries</Heading>
    <ContainerMain>
    {
      obj.map((item,key) => {
        return <Hero name={item.crop} rid={item.RID} mp={mp}/>;
      })
    }
    
    {/* {Object.entries(obj['details']).map((item) => {
      // console.log(item); 
      return <Hero name={item[1].desc} rid={item[1].rid}/>;
      // return <Hero name={item.desc} rid={item.rid}/>
    })} */}
    </ContainerMain>
    </>
  )
}

export default Maincontainer