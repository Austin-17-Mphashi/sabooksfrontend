import React from "react";
import { useLocation } from "react-router-dom";

function Book() {

  const location = useLocation();
  const { data } = location?.state;

  return (

    <div className="book-container my-5">
      <div className="book-image-container">
        <div className="book-image"  >
          <img src={data.image} alt="..." />
        </div>
        <button className="btn btn-success my-2">purchase book</button>
      </div>
      <div className="book-content">
        <div>
          <p className="text-primary">{data.title}</p>
          <small className="text-danger">published by - {data.publisher}</small>
          <hr />
        </div>
        <div >
          <p className="text-primary">Book Description</p>
          <br />
          <p>{data.description}</p>
          <hr />
        </div>
        <div>
          <div>
            <p className="text-primary">ISBN NUMBER</p>
            <br />
            <small>
            {data.isbn}
            </small>
            <hr />
          </div>
          <div>
            <p className="text-primary">Retail Price</p>
            <br />
            <small>
            R {data.retailPrice}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
