import React from 'react'
import { Imagesegment,Downloadbtn,Imagesubseg,Downloadbtncomp } from './Imagepartele'
import { FiDownload } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";

import Button from 'react-bootstrap/Button';


import { saveAs } from 'file-saver'

  



const Imagesub = ({url}) => {

    const downloadImage = () => {

        saveAs(url, 'image.jpg') // Put your image url here.
      }
    
  return (
    <>
    <Imagesubseg>
    <Imagesegment>
            <img src={url} alt="plant" />
        </Imagesegment>
        <Downloadbtn>
        
        <Downloadbtncomp>
        
            <Button onClick={downloadImage}><AiFillEye />  VIEW</Button>
            </Downloadbtncomp>
        </Downloadbtn>
        </Imagesubseg>
    </>
  )
}

export default Imagesub