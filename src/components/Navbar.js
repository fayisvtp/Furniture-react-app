import React, {  useContext, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
// import Search from './products/Search';
import { Mycontext } from '../Usecontext';

export default function Navbar() {
  const {setSearchTerm,searchTerm,cart,isloggedin} = useContext(Mycontext)
  const navigate=useNavigate()
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(true);
const handleCart=()=>{
navigate('/caart')
}
const ChangeHandle = (e)=>{
  e.preventDefault(); 
  setSearchTerm(e.target.value)
  console.log(searchTerm);


}

  return (
    <>
      <MDBNavbar   style={{ position: 'sticky', top: '0', zIndex: '100'   }}expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Mobilia</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' onClick={()=>navigate('/')}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={()=>navigate('/bedroom')}>BED ROOM</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink  onClick={handleCart} >
                <MDBIcon fas icon="shopping-basket" > {cart.lenght}</MDBIcon>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              {isloggedin===true?(
                  <MDBNavbarLink onClick={()=>navigate('/')}>sign out </MDBNavbarLink>
                ) : (<MDBNavbarLink onClick={()=>navigate('/login')}>login </MDBNavbarLink>)
                }
                </MDBNavbarItem>

            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
              <input className='form-control' onChange={ChangeHandle} placeholder="Type query" aria-label="Search" type='Search' />
              <MDBBtn onClick={()=>{navigate('/search');console.log(cart.length);}} outline >Search</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* <Search/> */}
          </>
  );
}