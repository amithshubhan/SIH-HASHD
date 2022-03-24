import React from 'react'
import Imagesub from './Imagesub'
import { ImageContainer } from './Imagepartele'

const Imagepart = ({partdetail}) => {
    console.log('part detail in imagepart',partdetail);
    var imageUrls = [];
    imageUrls.push(partdetail.imageUrls);
    console.log(imageUrls);
  return (<>
    <ImageContainer>
    {
      imageUrls.map((item,key) => {
        return <Imagesub url={item}/>;
      })
    }

    </ImageContainer>
        </>
  )
}

export default Imagepart