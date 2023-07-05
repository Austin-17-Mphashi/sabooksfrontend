import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div>
    <div className="contact-page">
      <div className="background-image mb-5">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries or feedback!</p>
        </div>
      </div>
      <div className="box-container my-5">
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
    </div>

    <div className="contact-form my-5">
      <h4 className='text-center my-3'>Send an email</h4>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            placeholder="Enter the topic"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Enter your message"
           
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
