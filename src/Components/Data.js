import React from 'react';
import './Data.css'

export const Data = (props) => {
    const itemDate=props.date;
    const itemMonth=props.month;
    const itemYear=props.Year;
  return (
    <div className='data'>
        <span>{itemDate}</span>
        <span>{itemMonth}</span>
        <span>{itemYear}</span>
    </div>
  )
}
