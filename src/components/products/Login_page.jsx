// import React,{useContext} from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import './Login_page.css'
// // import './Navbar'
// import Navbar from '../Navbar';
// import { Mycontext } from '../../Usecontext';
// function Login_page() {
//   const {cart}=useContext(Mycontext)
//   return (
//     <>
//     <Navbar cart={cart.length}/>
    
//     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

//       <MDBRow>

//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

//           <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
//             The best offer <br />
//             <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
//           </h1>

//           <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//             quibusdam tempora at cupiditate quis eum maiores libero
//             veritatis? Dicta facilis sint aliquid ipsum atque?
//           </p>

//         </MDBCol>

//         <MDBCol md='6' className='position-relative'>

//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard className='my-5 bg-glass'>
//             <MDBCardBody className='p-5'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

//               <div className='d-flex justify-content-center mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div>

//               <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

//               <div className="text-center">

//                 <p>or sign up with:</p>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='facebook-f' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='twitter' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='google' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='github' size="sm"/>
//                 </MDBBtn>

//               </div>

//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//     </>
//   );
// }

// export default Login_page;

// import React, { useContext } from 'react'
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBCard,
//     MDBCardBody,
//     MDBCol,
//     MDBRow,
//     MDBInput,
//     MDBCheckbox,
//     MDBIcon
//   }
//   from 'mdb-react-ui-kit';
//   import { Link, useNavigate } from 'react-router-dom';

// import { Mycontext } from '../../Usecontext';

// function Login_page() {
//   const navigate=useNavigate()
//   // const {user,setusername,username}=useContext(Mycontext)
//   const {user,setuser,username}=useContext(Mycontext)
//   const login=((e)=>{
//     e.preventDefault()
//     const eml=e.target.email.value
//     const password=e.target.pwd.value
//     console.log(eml)
//     const filteruser=user.filter((item)=>item.email === eml)
//     if(filteruser.length!==0){
   
//       if( filteruser[0].password===password){
//         navigate('/')
//         setuser(filteruser[0].name)
//       }else{
//       alert("Invalid Details")
//       }
//     }else{
//       alert("user not avilable")
//     }

//   })
//   console.log(username);
//   return (
//     <div className='w-75 mx-auto '>

// <MDBContainer fluid>
// <MDBCard className='mx-5 mb-5 p-5 shadow-5 ' style={{marginTop: '50px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
// <h3 className='text-center'>LOGIN</h3>

//   <MDBCardBody className='p-5 text-center'>
// <form onSubmit={login}>
//   <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' required/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='pwd' type='password' required/>

//               {/* <div className="d-flex justify-content-between mx-4 mb-4">
//                 <a href="!#">Forgot password?</a>
//               </div> */}

//               <MDBBtn onClick={navigate('/')} className="mb-4 w-100">Sign in</MDBBtn>


//       <p>or <Link to={"/signup"}>sign up</Link></p>
//               </form>
//     <div className="text-center">

//       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//         <MDBIcon fab icon='facebook-f' size="sm"/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//         <MDBIcon fab icon='twitter' size="sm"/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//         <MDBIcon fab icon='google' size="sm"/>
//       </MDBBtn>

//       <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//         <MDBIcon fab icon='github' size="sm"/>
//       </MDBBtn>
//     </div>
//   </MDBCardBody>
// </MDBCard>
// </MDBContainer>
//     </div>
//   )
// }

// export default Login_page

import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../Usecontext";
// import { Productcontext } from "../Context";
export default function Login_page() {
  
  const navigat = useNavigate();
  const {user,setisloggedin} = useContext(Mycontext);
  // console.log(user);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handlLogin = (e) => {
    e.preventDefault();
    // console.log(email);
    
    const filters =user.filter((data)=> 
      data.email===email && data.password===password)
    if (filters.length>0) {
      navigat('/');
      setisloggedin(true)
    }

      else{
        alert("invalid user")
      }
    }
//   const getUser = user.find((user) => user.email === email && user.password === password);


// if(getUser){
//   // setUerName( [...setUerName,...getUser.setUerName])
//   navigat('/')
  
// }
// else{
//   alert("invalid user")
// }
   
    
    
  
  

 
 

 

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>
                <form action="" > 
                {/* /*onSubmit={handlLogin} */}
                  <MDBInput
                   
                   
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="emil"
                    type="email"
                    size="lg"
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                  <MDBInput
                 
                 
                 wrapperClass="mb-4 w-100"
                 label="Password"
                 id="pass"
                 type="password"
                 size="lg"
                 required 
                 onChange={(e) => {setPassword(e.target.value)}}     />
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Remember password"
                  />

                  <MDBBtn  onClick={handlLogin} size="lg" type="submit">
                    Login
                  </MDBBtn>
                </form>
                Don't have an account{" "}
                <MDBBtn onClick={()=> navigat('/signup')}>Register</MDBBtn>
                <hr className="my-4" />
                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>
                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
</>
 );
}



