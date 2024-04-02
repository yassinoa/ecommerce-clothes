import React, { useState } from 'react'
import './AddProduct.css'

import upload_area from "../../Assets/upload_area.svg";
const AddProduct = () => {
  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"",
      new_price:"",
      old_price:""
  });

  const imageHandler=(e)=>{
    setImage(e.target.files[0])
  }
  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const AddProduct = async () => {
console.log(productDetails)
let responseData;
let product=productDetails

let formData = new FormData()
formData.append('product',image)
await fetch('http://localhost:4000/upload',{
  method:'POST',
  headers:{
    Accept:'application/json'
  },
  body:formData,
}).then((resp)=>resp.json()).then((data)=>{responseData=data})
if(responseData.success){
  product.image=responseData.image_url
  console.log(product)
  await fetch('http://localhost:4000/addproduct',{
    method:'POST',
  headers:{
    Accept:'application/json',
    'Content-type':'application/json'
  },
  body:JSON.stringify(product),
}).then((resp)=>resp.json()).then((data)=>{data.success?alert('Product added'):alert('failed')})
  }
  }
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />

      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler} >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">kid</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <label for="file-input">
          <img className="addproduct-thumbnail-img" src={image?URL.createObjectURL(image):upload_area} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
    </div>
  )
}

export default AddProduct