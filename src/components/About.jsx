import React from "react";
import pic from './user.jpg'
function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
              GUYS, MY NAME IS ARYAN MISHRA AND I STUDY IN KIIT UNIVERSITY BHUBANESHWAR.
              I AM A CSE STUDENT, AND ALWAYS WORKING ON DEVELOPING MY SKILLS. THATS ALL ABOUT ME.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
