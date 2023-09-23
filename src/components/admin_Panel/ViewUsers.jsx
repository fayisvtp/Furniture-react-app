import React, { useContext } from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../Usecontext';
import AdminNavbar from './AdminNavbar';
export default function ViewUsers() {

    const navigate = useNavigate()
    const {login} = useContext(Mycontext)
    const handlClick = (userId) => {
        navigate(`/More/${userId}`)

    }
  return (
    <>
    <div className='sticky-top'><AdminNavbar/></div>
    <MDBContainer>
    <MDBTable align='middle' className='mt-5'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>User Name</th>
          <th scope='col'> User Email</th>
          <th scope='col'>User MOBAIL NUMBER</th>
          <th scope='col'>USER ADRESS</th>
          <th scope='col'>USER ORDER PRODUCT</th>
          
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {login.map((user) => (

            <tr key={user.id} onClick={()=> handlClick(user.id)}>
                 <td>
            <MDBBadge color='success' pill>
              {user.id}
            </MDBBadge>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user.username} </p>
                <p className='text-muted mb-0'> </p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{user.email} </p>
      
          </td>
          <td>
            <p className='fw-normal mb-1'>{user.phone} </p>
      
          </td>
          <td>
            <p className='fw-normal sm-1'>{user.address.street} </p>
            <p className='fw-normal sm-1'>{user.address.city} </p>
            <p className='fw-normal sm-1'>{user.address.postalCode} </p>
            <p className='fw-normal sm-1'>{user.address.country} </p>
      
          </td>
          <td>
            {/* <p className='fw-normal sm-1'>{user.product.id} </p> */}
            <p className='fw-normal sm-1'>Product Name: {user.product.name} </p>
            {/* <p className='fw-normal sm-1'>{user.product.description} </p> */}
            <p className='fw-normal sm-1'>Amount: {user.product.price} </p>
            <p className='fw-normal sm-1'>Quantity: {user.product.quantity} </p>
      
          </td>
         
          
         
        </tr>
        
            ))}
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
    </>
  );
}