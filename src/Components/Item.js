import React from 'react';
import './Item.css';
export const Item = (props) => {
    const ItemNo=props.name;;
  return (
    <div>
        <div className='Item'>{ItemNo}</div>
        {props.children}
    </div>
  )
}
