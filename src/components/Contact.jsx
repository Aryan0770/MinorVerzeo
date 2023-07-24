import React from "react";
import pic from './co.jpg'
function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img src={pic} className="card-img-top" alt="..."/>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              PLEASE FILL THE INFORMATION:
              <form>
            <input type="text" class="form-control form-control-lg" placeholder='First Name'/>
            <br/>
            <input type="password" class="form-control form-control-lg" placeholder='Password'/>
            <br/>
            <input type="submit" className='btn btn-danger'/>
        </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
