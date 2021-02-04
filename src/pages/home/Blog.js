import React, { useEffect, useState } from "react";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const url = "https://dev.to/api/articles?username=irohitgaur";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div>{console.log(blogs)}</div>
      {blogs.map((blog) => (
        <div className="blog__container">
          <div className="blog__posterContainer">
            <img
              className="blog__poster"
              src={blog.social_image}
              alt={blog.slug}
            />
          </div>
          <div className="blog__detailsContainer">
            <div className="blog__detailsName">{blog.title}</div>
            <div className="blog__details">
              <div className="blog__detailsDesc">{blog["description"]}</div>
              <div className="blog__detailsButtonContainer">
                <a key={blog.id} href={blog.url}>
                  <div className="blog__detailsButtons">read more</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blog;
