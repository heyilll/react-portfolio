import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from '../Learn';
import "./style.css";

function Contact(props) {
  return (
    <div>
      <div className='contact mx-auto'>
        <h1>Contact Me</h1>
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna.  
        </p>
        <Link to="learn" role="button" className="btn btn-link">
          Learn More
        </Link>
        <Link to="contact" role="button" className="btn btn-link">
          Learn Less
        </Link>
        <Routes>
          <Route path="learn" element={<Learn />} />
        </Routes>
      </div>

      <div className='cform container-fluid bottom'>
        <div className="card border-0 rounded-3 shadow-lg overflow-hidden col-6">
          <div className="card-body p-0 row">
            <div className="row g-0">
              <div className='col-sm-6 d-none d-sm-block bg-image'></div>
              <div className='col-sm-6 p-4'>
                <div className="text-center">
                  <div className="h3 fw-light">Contact Form</div>
                </div>  
                <form>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                    <label>Name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                  </div>

                  <div className="form-floating mb-3">
                    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                    <label >Email Address</label>
                    <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height:'10rem'}} data-sb-validations="required"></textarea>
                    <label >Message</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
