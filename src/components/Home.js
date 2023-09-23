// import React, { useContext } from 'react'
import './Home.css' 
import Footer from './Footer'
// import Bedroom from './products/Bedroom'
import Navbar from './Navbar'
// import { Mycontext } from '../Usecontext'
// import Cerousel from './products/Cerousel'
import Image_card from './products/cards/Image_card'
import { MDBTypography, MDBContainer, MDBRow, MDBCol,MDBBtn  } from 'mdb-react-ui-kit';
import { MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Home() {
 

  return (
    <>
        <Navbar  style={{ position: 'sticky' }}/>
    {/* <Cerousel/> */}
   {/* <div className='cerousel'>
       <div className='carpenter banner-1 text-right' >
  <img className="image-man" style={{height:'100vh'}}
    src={require('./image/carpenter.png')} 
    alt=""/>
</div>
</div> */}
     
 <div className='main'>
<div className="container">
     
       {/* image carpenter
      ************ */}
      {/* ********************* */}
      <div className="row">
        <div className="col-md-6">
          
        <MDBCol style={{color:'#fff'}} tag='h1' className=' display-1'>Furnishing Your World</MDBCol>
        <MDBTypography style={{ border: '3px solid #fff', padding: '10px',fontSize:'16px',color:'#fff' }} tag='p' >
       <h3 style={{color:'#fff'}} className='col-md-5'>ABOUT US</h3>
        At "MOBILIA" we take pride in delivering exceptional benefits 
        to both our valued customers and the community. Our commitment to 
        quality craftsmanship ensures that every piece of furniture we create 
        not only enhances your living space but also stands the test of time.
         By choosing us, you're not just investing in beautiful furniture; you're 
         investing in enduring comfort, sustainability, and a brand that prioritizes 
         your satisfaction. Join our community of discerning customers who appreciate 
         the artistry and quality we bring to every piece.

        </MDBTypography>
       
        </div>
        <div className="col-md-6">  
          <MDBRipple rippleTag='a'>
            
              <img src={require("./image/carpenter.png")}
                className='table '
                alt='living'/>
            
          </MDBRipple>
        </div>
      </div>

  {/* image 1
      ************ */}
      {/* ********************* */}
      <div className="row">
        <div className="col-md-6">
          
        <MDBTypography tag='h1' className='tittle1 display-4'>Sleep in Style</MDBTypography>
      <Link to='/bedroom'>
        <MDBTypography tag='p' className='subTittle1 lead'>
        "Elevate your bedroom's ambiance with our curated furniture 
        selection. Discover timeless designs, unmatched comfort, 
        and exquisite craftsmanship for the bedroom of your dreams.
         Explore now and redefine your sanctuary."
        </MDBTypography>
      </Link>
        </div>
        <div className="col-md-6">  
          <MDBRipple rippleTag='a'>
            
              <img src={require("./image/pillow.png")}
                className='pillow img-fluid rounded'
                alt='living'/>
            
          </MDBRipple>
          
        </div>
      </div>

      {/* image 2
      ************ */}
      
       <MDBContainer>
      <MDBRow>

        <MDBCol md="6">
          
          <MDBRipple tag="a">
            <img
              src={require("./image/dining.png")}
              className="chair"
              alt="Dining"
            />
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6">
          <h1 className='tittle2 display-2' >Trade Up and Transform:</h1>
          <p className='subtittle2'>Discover the art of dining with our stunning dining furniture. From timeless tables to comfortable chairs, our collection offers a range of styles to suit your taste. Elevate your dining space and create lasting memories with family and friends.</p>
         <Link to={'/bedroom'}> 
        <MDBBtn outline style={{ borderColor: 'yellow',color:'#fff' }}>Explore</MDBBtn>
        </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    {/* image 3
    ********* */}
<div className="row">
        <div className="col-md-6">
        <MDBCol tag='h1' className='tittle1 display-2'>A Haven of Comfort</MDBCol>
      
        <MDBTypography tag='p' className='subTittle1 lead'>
        Revamp your living room effortlessly with our exquisite furniture. Discover the perfect blend of comfort and style as you choose from our handpicked selection of sofas, coffee tables, and more. Transform your living space into a haven of relaxation and elegance with our exceptional pieces. Explore our collection today and redefine your home's ambiance.
        </MDBTypography>
        <Link to={'/living'}> 
        <MDBBtn outline style={{ borderColor: 'yellow',color:'#fff' }}>Explore</MDBBtn>
        </Link>
        </div>
        <div className="col-md-6">  
          <MDBRipple rippleTag='a'>
            
              <img src={require("./image/living.png")}
                className='table '
                alt='living'/>
            
          </MDBRipple>
        </div>
      </div>

    
    
    </div>
    </div>
    {/* <div className='banner-1 text-center' >
  <img className="image" style={{maxWidth: '100%',height:'auto'}}
    src={require("./image/img1.jpg")} 
    alt=""/>
</div>
 */}
 <Image_card/>
      <Footer/>
    </>
  )
}

export default Home
