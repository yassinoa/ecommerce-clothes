import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">TND {props.new_price}</div>
        <div className="item-price-old">TND {props.old_price}</div>
      </div>
      <div className="description">{props.description}</div>
    </div>
  )
}

export default Item
