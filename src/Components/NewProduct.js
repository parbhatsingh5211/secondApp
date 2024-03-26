import React from 'react'
import './NewProduct.css';
import { ProductForm } from './ProductForm';

export const NewProduct = (props) => {

  function printNewProductData(product){
    console.log("Inside new Product");
    console.log(product);
    props.printData(product);
  }

  return (
    <div className='newProduct'>
        <ProductForm printNewProduct={printNewProductData}/>
    </div>
  )
}
