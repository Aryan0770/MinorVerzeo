import React from "react";
import pic from './pro.jpg'
function Products() {
  return (
    <div className="prod">
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
            <h1 class="font-weight-light">PRODUCTS PAGE</h1>
            <p>
             HELLO THIS IS THE PRODUCTS PAGE
             THE FOLLOWING PRODUCTS ARE:
             <ul>
<li> ReactJS</li>
<li> mongodb</li>
<li> angularJS</li>
<li>Ember </li>
<li>Backbone JS </li>
             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;