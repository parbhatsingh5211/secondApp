import React, {useState} from 'react'
import './ProductForm.css';

export const ProductForm = (props) => {
    
    const [newtitle, setTitle]= useState('');
    const [newdate, setDate]= useState('');
    
    function titleChangeHandler(event, prevState){
        setTitle(event.target.value)
        // console.log(event.target.value)
    }

    function dateChangeHandler(event){
        setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const productData= {
            title: newtitle,
            date: newdate
        };
        // console.log(productData);
        props.printNewProduct(productData);
        setDate('');
        setTitle('');
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='newProduct-form'>
            <div className='newProduct-title'>
                <label>Title</label>
                <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='newProduct-date'>
                <label>Date</label>
                <input type='date' value={newdate} onChange={dateChangeHandler} min='2021-01-01' max='2024-04-01'></input>
            </div>
            <div className='newProduct-button'>
                <button type='submit'>Add Prodcut</button>
            </div>
        </div>
    </form>

  )
}
