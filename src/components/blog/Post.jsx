import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <p>
          thanks for clicking, here are the prizes below
          web development starts at 2000 
          app development starts at 4000 
          Video editing and photoshop starts at 3000 
        </p>
      </div>
    </div>
  );
}

export default Post;
