import React from 'react';
import '../Membership.css';

const Membership = () => {
  return (
    <div className="membership-page">
      <div className="background-image">
        <div className="overlay">
          <h1>Membership</h1>
          <p>Unlock exclusive benefits and join our community!</p>
          <a className='btn btn-danger'>Create Membership Account</a>
        </div>
      </div>
      <h2 className='text-center my-5'>How to become a member</h2>
      <div className="box-container">
        <div className="box">
            <div>
          <h2>Basic</h2>
          <p>Access to basic features</p>
          </div>
        </div>
        <div className="box">
          <div>
          <h2>Basic</h2>
          <p>Access to basic features</p>
          </div>
        </div>
        <div className="box">
        <div>
          <h2>Basic</h2>
          <p>Access to basic features</p>
          </div>
        </div>
      </div>
      <a className='btn btn-danger my-5'>Create Membership Account</a>
      <div className='text-center my-4'>
        <p className=' mt-1'>Send your enquiries to :</p>
        <br/>
        <p className=' mb-1'>admin@sabooksonline.co.za</p>
      </div>
    </div>
  );
};

export default Membership;
