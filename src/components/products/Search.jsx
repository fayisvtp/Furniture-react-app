import React,{useContext} from 'react'
import { Mycontext } from '../../Usecontext';
import Navbar from '../Navbar';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBCardTitle,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

 
function Search() {
    const {Products} = useContext(Mycontext)
    const {searchTerm} = useContext(Mycontext)
    const navigate=useNavigate()
    const handleClick = (product) => {
        navigate(`/Show/${product.id}`);
      };
   
  return (
      
      <>
      <div className="template_Container">
        <Navbar/>
        <MDBRow className='row-cols-4 row-cols-md-4 g-4'>
        {Products.filter((item)=>{return searchTerm.toLowerCase() === ""? item : item.type.toLowerCase().includes(searchTerm)}).map((product) => (
          <MDBCol key={product.id}>
            <MDBCard className='bedroom-card h-100'>
              <MDBCardImage src={product.src} position='top' />
              <MDBCardBody>
                <MDBCardTitle>{product.name}</MDBCardTitle>
               
              </MDBCardBody>
              <button onClick={() => handleClick(product)}>click</button>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
        {/* {
          Products.filter((item)=>{return searchTerm.toLowerCase() === ""? item : item.name.toLowerCase().includes(searchTerm)}).map((val) => {
              return(
                <div className="template" key={val.id}>
                    <img src={val.src} alt="" />
                    <h3>{val.name}</h3>
                    <p className="price">${val.offerpize}</p>
                </div> 
              )
            })
        } */}
      </div>
      </>
 
  )
}

export default Search
