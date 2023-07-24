import React from "react";
import pic from './ser.jpg'
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div class="container">
      <img src={pic} size='5px'className="card-img-top" alt="..."/>
        <h1 className="text-center mt-2">SERVICE PAGE</h1>
        <ul>
          <li>
            front end web developer
          </li>
          <li>
            flutter app developer
          </li>
          <li>
            Video editing
          </li>
          <li>
            photoshop
         </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
