import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/breadcrums/Breadcrum'
import ProductDisplay from '../Components/productDisplay/ProductDisplay'
import DescriptionBox from '../Components/descriptionBox/DescriptionBox'
import RelatedProducts from '../Components/relatedProducts/RelatedProducts'

const Product = () => {
  const {allProduct}=useContext(ShopContext)
  const {productId}= useParams()
  const product= allProduct.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product