import React from "react";
import pic from './wc.jpg'
function Home() {
  return (
    <div className="home">
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
            <h1 class="font-weight-light">Home page</h1>
            <p>
             WELCOME EVERYONE! I HAVE CREATED THIS NEW WEBSITE WITH VARIOUS WEB PAGES.
             HAVE A LOOK THROUGH IT. HOPE YOU FIND IT INTERESTING. THANKYOU!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
