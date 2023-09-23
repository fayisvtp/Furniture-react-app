import React from 'react';
import {
  MDBCard,
  MDBCardImage
} from 'mdb-react-ui-kit';
import './Cerousel.css' 

export default function Cerousel() {
  return (
    <>
      <MDBCard className='mb-3'>
        <MDBCardImage className='cardimage' position='top' src={require('../image/carousel1.png')} alt='...' />
        
      </MDBCard>

      <MDBCard className='mb-3'>
    
        <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
      </MDBCard>
    </>
  );
}