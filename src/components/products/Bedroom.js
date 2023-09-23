


import React, { useContext } from 'react';
import './Bedroom.css';

import { Mycontext } from '../../Usecontext';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardTitle,MDBCardOverlay,

} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

import ImageCard from './cards/Image_card';


function Bedroom() {
  // const {searchTerm} = useContext(Mycontext)
  const { Products } = useContext(Mycontext);
  const filteredProduct = Products.filter(
    (prod) => prod.type.toLowerCase() === 'bedroom'

  );
  
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/Show/${product.id}`);
  };



  return (
    <div className='bedRoom'>
      <Navbar/>
      {/* <Cerousel /> */}
      
                                       {/* top banner
               *********************************************************** */}
<MDBCard background='dark' className='text-white'>
     <div > <MDBCardImage  overlay src='https://cdn.dribbble.com/userupload/10235071/file/original-381fc572ec3405d03e10ca9f50752079.png?resize=1024x683' alt='...' />
     </div>
      <MDBCardOverlay>
        <MDBCardTitle><h1 style={{fontSize:'51vh',color:'#fff'}}>Bedroom</h1></MDBCardTitle>
        <MDBCardText>
       
The bedroom is often regarded as a sanctuary within the home, a private oasis where we seek solace and relaxation after a long day. It's a space that reflects our personal style and offers a sense of comfort and serenity. From the moment you step inside, the bedroom should envelop you in a cocoon of tranquility, with its carefully chosen furniture, soothing color palette, and thoughtfully arranged decor. Whether your taste leans towards minimalist modernity, classic elegance, or cozy rustic charm, the bedroom is your canvas to express your unique personality and create a haven of restful sleep. With the right combination of furnishings and design elements, your bedroom becomes not just a room, but a reflection of your dreams and aspirations.
        </MDBCardText>
       
      </MDBCardOverlay>
    </MDBCard>
{/* *********************************************************************************************** */}
      
 
      <MDBRow  className='carding row-cols-4 row-cols-md-4 g-4'>
        {filteredProduct.map((product) => (
    <MDBCol key={product.id}>
    <MDBCard style={{boxShadow:'none'}} className='bedroom-card h-100'>
      <MDBCardImage src={product.src} position='top' />
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <hr />
        <div className='bottom-text-container'>
          <MDBCardTitle className='bottom-text'>
            ₹{product.offerPize}
          </MDBCardTitle>
          <MDBCardTitle style={{ fontSize: '10px' }} className='small-text bottom-text'>
            mrp{product.prize}
          </MDBCardTitle>
        </div>
        <button style={{border:'none',width:'100%',backgroundColor: '#FFC26F'}} onClick={() => handleClick(product)}>View Product</button>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  
        ))}
    
      </MDBRow>
      
      <ImageCard/>

    </div>
  );
}

export default Bedroom;
