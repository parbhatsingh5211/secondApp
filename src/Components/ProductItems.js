import React from 'react'
import { Card } from './Card'
import { ProductDate } from './ProductDate'
import './ProductItems.css'

export const ProductItems = (props) => {
  return (
    <Card >
      <div className='product-item'>
      <ProductDate date={props.date}/>
      <div className='product-item__description'>
          <h2>{props.title}</h2>
      </div>
      </div>
    </Card>
  )
}
