


// import React, { useContext } from 'react';
// import './Bedroom.css';
// import Cerousel from './Cerousel';
// import { Mycontext } from '../../Usecontext';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBCardTitle,
// } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';

// function Bedroom() {
//   const {searchTerm} = useContext(Mycontext)
//   const { Products } = useContext(Mycontext);
//   const filteredProduct = Products.filter(
//     (prod) => prod.type.toLowerCase() === 'living'

//   );
  
//   const navigate = useNavigate();

//   const handleClick = (product) => {
//     navigate(`/Show/${product.id}`);
//   };



//   return (
//     <div className='livingRoom'>
//       <Navbar/>
//       <Cerousel />
      
//       <div>
//         <h3>Bed Room</h3>
//       </div>
//       <MDBRow className='row-cols-6 row-cols-md-5 g-4'>
//         {filteredProduct.map((product) => (
//           <MDBCol key={product.id}>
//             <MDBCard className='living-card h-100'>
//               <MDBCardImage src={product.src} position='top' />
//               <MDBCardBody>
//                 <MDBCardTitle>{product.name}</MDBCardTitle>
//                 <MDBCardText>
//                   This is a longer card with supporting text 
//                 </MDBCardText>
//                 <MDBCardTitle> ₹{product.offerPize}</MDBCardTitle>
//               </MDBCardBody>
//               <button onClick={() => handleClick(product)}>click</button>
//             </MDBCard>
//           </MDBCol>
//         ))}
//       </MDBRow>
//       <div></div>
//     </div>
//   );
// }

// export default Bedroom;




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
  MDBTypography,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Image_card from './cards/Image_card';

function Bedroom() {
  // const {searchTerm} = useContext(Mycontext)
  const { Products } = useContext(Mycontext);
  const filteredProduct = Products.filter(
    (prod) => prod.type.toLowerCase() === 'living'

  );
  
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/Show/${product.id}`);
  };



  return (
    <div className='living'>
      <Navbar/>
      {/* <Cerousel /> */}
      
                                       {/* top banner
               *********************************************************** */}
<MDBCard background='dark' className='text-white'>
     <div > <MDBCardImage  overlay src='https://assets.isu.pub/document-structure/210728115003-d9ff5ba4830e96bb8bcd135aee92ac1e/v1/3c467e4349c0256be94c9d274202d807.jpeg' alt='...' />
     </div>
      <MDBCardOverlay>
        <MDBCardTitle><h1 style={{fontSize:'29vh',color:'#fff'}}>Living Room</h1></MDBCardTitle>
        {/* <MDBCardText>
       
The living room is the heart of the home, where families gather, and friends come together. 
It's a versatile space for relaxation, entertainment, and making memories. With the right 
furniture and design, you can transform your living room into a cozy, welcoming haven for 
all who enter.
        </MDBCardText>
        */}
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
      <Image_card/>

    </div>
  );
}

export default Bedroom;
