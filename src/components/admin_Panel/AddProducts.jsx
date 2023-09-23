import React, { useContext, useState } from 'react'
import { Mycontext } from '../../Usecontext'
import { useNavigate } from 'react-router-dom'

function AddProducts() {
    const [productname,setProductname]= useState('')
    const [prize,setPrize]= useState('')
    const [offerPrize,setofferPrize]= useState('')
    const [producttype,setProducttype]=useState('')
    const [image,setimage]=useState('')
    const {Products,setProduct} = useContext(Mycontext)
    const navigate = useNavigate()

    const handleSelection=(event)=>{
        setProducttype(event.target.value)
    }
    const addProducts=()=>{
        setProduct([...Products,{name:productname,type:producttype ,prize:prize,offerpize:offerPrize, src:image,id:Products.length+1}])
        alert("Added New Product")
      navigate('/')
    }
console.log(Products);
  return (
    <>
    <div className="container mt-5 ">
        <div className=" d-flex justify-content-center">
     <div className='addproductdiv'>
      <div className='addproductdiv2'>

        </div>
        <div className='addproductdiv3'>
            <form className='addproductform'>
            <div>
                <label>Product Name:</label>
                <input type="text" value={productname} onChange={(e)=>setProductname(e.target.value)}/>
                </div>
                <div>
                <label>type:</label>
                <select onChange={handleSelection}>
                    <option  value={"living"}>Living Room</option>
                    <option value={"bedroom"}>Bed Room</option>
                </select>
                </div>
                <div>
                <label>Prize:</label>
                <input type="number" onChange={(e)=>setPrize(e.target.value)} />
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
                <button className='my-button' onClick={()=>addProducts()}>ADD</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default AddProducts
