import React, { useContext, useState } from 'react'
import { Mycontext } from '../../Usecontext'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
// import Image_card from './cards/Image_card';
import './Showprdcts.css'
function Showprdcts() {
    const [count,setcount] = useState(1)
const navigate=useNavigate()

    const {id}=useParams()
    // const pdid = id;
    const {Products,cart,setCart,isloggedin}= useContext(Mycontext)
    const clickProduct = Products.filter((p)=>(p.id===id))
    const productid =()=>{
        if(cart.includes(clickProduct[0])){
            alert ("product already added")
        }
        else{
            setCart(()=>[...cart,...clickProduct])
            alert ("added")
        }
        navigate('/caart')
    }

    
    const handleDecrement = () => {
      setcount(count > 1 ? count - 1 : 1);
    }
    
    // console.log(clickProduct);

  return (

      <div className='ms5' >
        
      {
            clickProduct.map((item)=>(
              <div key={item.id} style={{ margin: '10px' }}>
                <MDBCard className='ms-5 mt-3 '>
      <MDBRow className='g-0'>
        <MDBCol md='5'>
          <MDBCardImage src={item.src} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            
            {/* <MDBCardText>
              <p className='text-muted'>{item.offerPize*count}</p>
            </MDBCardText> */}
             <h3 style={{color:'red'}}>Offer Price{item.offerPize*count}</h3>
            <MDBCardText>
              <small className='text-muted'>{item.prize}</small>
            </MDBCardText>
  <h5>
            <button onClick={()=>setcount(count=>count+1)} >+</button>{count}
            <button onClick={handleDecrement} >-</button>
            {isloggedin===true?(
            <button style={{backgroundColor:'yellow'}} className='show_buttoon' onClick={productid} >add to cart</button>)
           : (<button onClick={()=>{navigate('/login')}} >add to cart</button>)
            }</h5>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</div>
            ))
        }
      
    </div>
  )
}

export default Showprdcts
