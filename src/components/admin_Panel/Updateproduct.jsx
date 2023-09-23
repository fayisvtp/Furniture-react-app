import React, { useContext, useState } from 'react'
import { Mycontext } from '../../Usecontext'
import { useNavigate, useParams} from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function Updateproduct() {
    const {Products,setProduct} = useContext(Mycontext)
    const {id} = useParams ()
    const data = Products.find((item) => item.id === id)
  
    const [name,setname]=useState (data.name ||'')
    const [type,settype]=useState(data.type ||'')
    const [price,setprise]= useState(data.prize ||'')
    const [offerPrize,setofferPrize]=useState(data.offerPize ||'')
     const [image,setimage]=useState(data.src ||'')
     const navigate = useNavigate()
    
     const handleSubmit = (e)=>{
      // console.log(price);
     e.preventDefault()

     const productUpdate = {
        id: id,
        name:name,
        type:type,
        prize:price,
        offerPize:offerPrize,
        src:image,
    }; 
   
    // console.log(productUpdate);                                                      
    const  updatedproduct = Products.map((item)=>item.id===productUpdate.id ?productUpdate : item )
     
      
    setProduct(updatedproduct)
    alert('sett man')
    navigate('/bedroomadmin')
    // console.log(Products);
    // console.log(updatedproduct);
}


    return (
      <>
      <div className='sticky-top'><AdminNavbar/></div>
      <div className="container mt-5 ">
        <div className=" d-flex justify-content-center">
     <div className='addproductdiv'>
      <div className='addproductdiv2'>

        </div>
        <div className='addproductdiv3'>
            <form onSubmit={handleSubmit} className='addproductform'>
            <div>
                <label>Product Name:</label>
                <input type="text"  onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div>
                <label>Product Type:</label>
                <input type="text"  onChange={(e)=>settype(e.target.value)}/>
                </div>
                <div>
                <label>Prize:</label>
                <input type="text" onChange={(e)=>setprise(e.target.value)} />
                </div>
                <div>
                <label>Offer Prize:</label>
                <input type="number" onChange={(e)=>setofferPrize(e.target.value)} />
                </div>
                <div>
                <label>Image:</label>
                <input type="text" onChange={(e)=>setimage(e.target.value)} />
                </div>
                <div>
                <button className='my-button' type='submit' >UPDATE</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Updateproduct


