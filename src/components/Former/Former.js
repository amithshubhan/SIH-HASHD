
import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {db} from '../../config' 



const Former = ({rid,partdetail}) => {
  var linkarr;
  var productarr;
  console.log("partdetail in Former js is" ,partdetail)
  async function update(){
    console.log('updating');
var getdb =db.collection('reports').doc(partdetail.key);
console.log(partdetail.key);
partdetail.message = message;partdetail.links = links;
partdetail.products = products;
const res = await getdb.update({message: message,links: links,products: products});
console.log(res);
}
  let navigate = useNavigate();
 const toSend = (event) => {
    event.preventDefault();
    
    linkarr = links.split(',');
    productarr = products.split(',');
    console.log(linkarr);
    console.log(productarr);
    update();
    
  };

  const [products, setProducts] = useState('');
  const [links, setLinks] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const [error, setError] = useState(false);
  return (
    <>
      <FormStyle  name="form1" ref={form} autoComplete="new-password" onSubmit={toSend}>
        <div className="form-group">
          <label htmlFor="name">
            <PText>
            Message
            </PText>
            <textarea
            autoComplete="off"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
          <PText>
            Reference Links
            </PText>
            <textarea
            autoComplete="off"
              type="text"
              placeholder="Enter the values with comma separated"
              id="email"
              name="email"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
          <PText>
            Products
            </PText>
            <textarea
              type="text"
              placeholder="Enter the values with comma separated"
              id="products"
              name="products"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
            />
          </label>
        </div>
        <div className="btn">
        <button type="submit" >Send</button>
        </div>
      </FormStyle>
    </>
  );
}

export default Former




// function sendEmail(e) {
//     // if(form1.email.value == null){
//     //     return;
//     // }
//     console.log('working');
//     e.preventDefault();

//     if(form.current.name.value.length === 0 || form.current.email.value.length === 0 || form.current.message.value.length === 0  ){
//       setError(true);
//   }else{
      
//   emailjs.sendForm('service_ogx13cd', 'template_2mrl1da', form.current, '5TOWBxa9_oJtCx_zg')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
//   setError(false);
//   form.current.reset();
//   }


// }


const FormStyle = styled.form`
  
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {

    padding: 50px;
    width: 100%;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items:  center;
    flex-direction: column;
  }
  input,
  textarea {
    width: 100%;
    font-size: 15px;
    padding: 1.2rem;
    color: #5ff1d0;
    background-color: #093a6b;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    font-family: 'Fira Code', monospace;
  }
  textarea {
    min-height: 280px;
    width: 70%;
    resize: none;
    font-family: 'Fira Code', monospace;
  }
  .btn{
    display: flex;
    justify-content: right;

  }
  button[type='submit'] {
    background-color: #093a6b;
    color: #5ff1d0;
    font-size: 15px;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const PText = styled.p`
color: #000;
font-size: 15px; 
font-family: 'Fira Code', monospace;

`;

