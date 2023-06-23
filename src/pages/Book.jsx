import React from 'react'
import { useLocation } from 'react-router-dom'

function Book() {

    const location = useLocation();
    const { data } =  location?.state;

  return (
    <div>
    <div className='book-content-container container my-5'>
        <div>
        <div className='book-image'>
        <img src={data.image} alt="..."/>
        </div>
        <button className='btn btn-success w-100 my-2'>purchase book</button>
        </div>
        <div className='book-content'>
          <div className='top'>
            <h1>{data.title}</h1>
            <small>published by - {data.publisher}</small>
          <hr/>
          </div>
          <div className='middle'>
            <h2>Book Description</h2>
            <br/>
             <p>{data.description}</p>
          <hr/>
          </div>
          <div className='bottom'>
           <div className='bottom-isbn'>
            <h6>ISBN NUMBER</h6>
            <br/>
            {data.isbn}
           </div>
           <div className='bottom-price'>
            <h4>Retail Price</h4>
            <br/>
             {data.retailPrice}
           </div>
          </div>
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default Book