import React from 'react'
import './Popular.css'
import datap from '../Assets/data'
import Item from '../item/Item'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>
        BEST SELLERS HEADPHONES
      </h1>
      <hr />
      <div className="popular-item">
        {datap.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
