import React from 'react';
import './Image_card.css'
import {
  MDBCard,
  MDBCardImage,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function ImageCard() {
  return (
    
    <MDBCardGroup>
      <MDBCard  className='Image'>
        <MDBCardImage src={require('./a (4).png')} alt='...' position='top' />

      </MDBCard>

      <MDBCard  className='Image'>
        <MDBCardImage src={require('./a (1).png')} alt='...' position='top' />
       
      </MDBCard>

      <MDBCard  className='Image'>
        <MDBCardImage src={require('./a (2).png')} alt='...' position='top' />
        
      </MDBCard>
      <MDBCard  className='Image'>
        <MDBCardImage src={require('./a (3).png')} alt='...' position='top' />
       
      </MDBCard>
      <MDBCard  className='Image'>
        <MDBCardImage src={require('./a (5).png')} alt='...' position='top' />
        
      </MDBCard>
      <MDBCardGroup>
      <MDBCard className='Image' >
        <MDBCardImage src={require('./shelf.png')} alt='...' position='top' />

      </MDBCard>

      <MDBCard className='Image'>
        <MDBCardImage src={require('./kitchen.png')} alt='...' position='top' />
       
      </MDBCard>

      <MDBCard className='Image'>
        <MDBCardImage src={require('./mesha.png')} alt='...' position='top' />
        
      </MDBCard>
      <MDBCard className='Image'>
        <MDBCardImage src={require('./diningg.png')} alt='...' position='top' />
       
      </MDBCard>
      <MDBCard className='Image'>
        <MDBCardImage src={require('./bedroom2.png')} alt='...' position='top' />
        
      </MDBCard>
    </MDBCardGroup>
    </MDBCardGroup>
 
  );
}