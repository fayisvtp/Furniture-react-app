import React, { useContext } from 'react'
import { MDBBtn, MDBTable,MDBIcon,
     MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../Usecontext';
import AdminNavbar from './AdminNavbar';

function BedroomAdmin() {
    const navigate = useNavigate()
    const {Products,setProduct}= useContext(Mycontext)
    // const data =Products.filter((item)=>(item.type==="bedroom"))
    const trash = (id)=>{
      const result = Products.filter((item)=>item.id !==id)
        setProduct(result)
    }
    
  return (
      <div>
          <div className='sticky-top'><AdminNavbar/></div>
      <div className='d-flex justify-content-end'>
         <MDBBtn onClick={()=>navigate('/addproduct')} style={{background:'red',color:'#ffff',boxShadow:'none'}} >add products</MDBBtn>
         </div> 

        <MDBTable striped>
        <MDBTableHead>
       
          <tr>
            <th>num</th>
            <th>TYPE</th>
            <th>PRODUCT NAME</th>
            <th>MRP</th>
            <th>OFFER PRICE</th>
            <th>IMAGE</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          
          {Products.map((item) => (
            <tr >
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.prize}</td>
              <td>{item.offerPize}</td>
              <td><img style={{width:'50px',height:'50px',redius:'10%'}} src={item.src} alt={item.name} /></td>
              <MDBBtn style={{backgroundColor: 'transparent',boxShadow:'none'}} onClick={()=>trash(item.id)}><MDBIcon  fas icon="trash text-danger" size="lg" /></MDBBtn>
              <MDBBtn style={{backgroundColor: 'transparent',boxShadow:'none'}} onClick={()=>navigate(`/adminedit/${item.id}`)} ><MDBIcon style={{color:'green'}}  class="fa-solid fa-pen-to-square"/></MDBBtn>

            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default BedroomAdmin
