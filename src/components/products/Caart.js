import React, { useContext, useState } from 'react'
import { Mycontext } from '../../Usecontext'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
   
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";

import { useNavigate } from 'react-router-dom';
function Caart() {
  const { cart,setCart } = useContext(Mycontext); // Assuming you have a Mycontext provider in your application

 const navigate=useNavigate()
 const [count,setcount]=useState(1)
 const handleDecrement=()=>{
    setcount(count>1 ? count-1:1)
 
}
const trash=(dlt)=>{
    const update_cart=cart.filter((item)=>item.id !==dlt)
   setCart (update_cart)    
}

  return (
    
    <div>
            {/* <div className='banner-1 text-center' >
  <img className="image" style={{maxWidth: '100%',height:'auto'}}
    src={require("../image/img2.jpg")} 
    alt=""

  />
</div> */}
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        
             <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {cart.map((item)=>(
              <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={item.src}    alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{item.name}</p>
                {/* <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p> */}
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn onClick={handleDecrement} color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>
                 <p>{count}</p>
                {/* <MDBInput min={0} defaultValue={2} type="number" size="sm" /> */}

                <MDBBtn onClick={()=>setcount(count+1)} color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn> 
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                prize  {item.prize}
                </MDBTypography>
                <MDBTypography tag="h5" className="mb-0">
                  offer prize{item.offerPize*count}
                </MDBTypography>
              </MDBCol>
              <MDBCol onClick={()=>trash(item.id)} md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon  fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
          <button onClick={()=>navigate('/')}>to home</button>
          <button onClick={()=>navigate('/payment')}>Buy Now</button>

        
       
      </section>
    </div>
  );
}
export default Caart
