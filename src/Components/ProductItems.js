import React, {useState} from 'react'
import { Card } from './Card'
import { ProductDate } from './ProductDate'
import './ProductItems.css'

export const ProductItems = (props) => {

  const [title, setTitle]=useState(props.title);
 
  function addCartHandler() {
    setTitle("PopCorn");
    console.log("add to Cart");
  }
  return (
    <Card >
      <div className='product-item'>
      <ProductDate date={props.date}/>
      <div className='product-item__description'>
          <h2>{title}</h2>
      </div>
        <button onClick={addCartHandler}>Add to Cart</button>
      </div>
    </Card>
  )
}
