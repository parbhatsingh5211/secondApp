import React from 'react'
import './ProductDate.css'

export const ProductDate = (props) => {
    const day=props.date.toLocaleString('en-US', {day: '2-digit'});
    const month=props.date.toLocaleString('en-US', {month: 'long'});
    const year=props.date.getFullYear();
  return (
    <div className='product-date'>
        <div className='product-date__month'>{month}</div>
        <div className='product-date__year'>{year}</div>
        <div className='product-date__day'>{day}</div>
    </div>
  )
}
