import React from 'react';
import {
  MDBFooter,
  MDBContainer,

} from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter style={{backgroundColor:'#966F33'}} className=' text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://www.linkedin.com/in/fayis-vtp-ba3a771b2/?originalSubdomain=in'>
          fayis vtp
        </a>
      </div>
    </MDBFooter>
  );
}