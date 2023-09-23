import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../../Usecontext'

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
 
  


function AdminLogin() {
    
const navigate =useNavigate()
const [email,setemail]=useState()
const[password,setpassword]=useState()
const {admindata}=useContext(Mycontext)

const handleClick=(e)=>{
    e.preventDefault()
    admindata.forEach(data=>{
        if(data.email===email&&data.password===password){
          navigate('/adminhome')  
        }else{
            alert("try once")
        }
    })
}
  return (
    <MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <MDBCardBody className='p-5 w-100 d-flex flex-column'>

            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                             {/* ADMIN EMAIL SESSION
                             ******************* */}


            <MDBInput wrapperClass='mb-4 w-100'
            label='Email address' 
            id='formControlLg' 
            type='email' 
            size="lg"
            onChange={(e)=>setemail(e.target.value)}
            />

                                     {/* ADMIN PASSWORD SESSION
                             ******************* */}
            <MDBInput wrapperClass='mb-4 w-100'
             label='Password' 
             id='formControlLg' 
             type='password' 
             size="lg"
             onChange={(e)=>setpassword(e.target.value)}
             />

            
            <MDBBtn size='lg' onClick={handleClick}>
              Login
            </MDBBtn>

            <hr className="my-4" />

          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
  )
}

export default AdminLogin
