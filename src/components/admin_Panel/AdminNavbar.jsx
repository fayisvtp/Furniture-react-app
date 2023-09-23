import React,{useState} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function AdminNavbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    const navigate = useNavigate()
  return (


    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/adminhome'>MOBILIA</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            {/* <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink> */}
            <MDBNavbarLink onClick={()=>navigate('/bedroomadmin')} >PRODUCT LIST</MDBNavbarLink>
            <MDBNavbarLink onClick={()=>navigate('/viewusers')} >COSTUMER</MDBNavbarLink>
            {/* <MDBNavbarLink  href='#'>ADD </MDBNavbarLink> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default AdminNavbar
