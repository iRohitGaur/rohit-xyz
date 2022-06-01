import React, { useEffect, useState } from "react";
import "./Blog.css";
import Color from "color-thief-react";

const query = `
{
  user(username:"irohitgaur") {
    publication {
      posts {
        title
        brief
        slug
        cuid
        coverImage
      }
    }
  }
}`;

function Blog() {
  const [hashnodeBlogs, setHashnodeBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const url = "https://dev.to/api/articles?username=irohitgaur";

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.hashnode.com", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
      });
      const data = await response.json();
      if (data) {
        setHashnodeBlogs(data.data?.user?.publication?.posts);
      }
    })();
  }, []);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="blog__heading">Blog</div>
      <div className="blog__scroll">
        {hashnodeBlogs.map((blog) => (
          <div className="blog__container" key={blog.cuid}>
            <Color src={blog.coverImage} format="hex" crossOrigin>
              {({ data, loading, error }) => (
                <div
                  className="blog__posterContainer"
                  style={{ backgroundColor: data }}
                >
                  <img
                    className="blog__poster"
                    src={blog.coverImage}
                    alt={blog.slug}
                  />
                </div>
              )}
            </Color>
            <div className="blog__detailsContainer">
              <div className="blog__detailsName">{blog.title}</div>
              <div className="blog__details">
                <div className="blog__detailsDesc">{blog["brief"]}</div>
                <div className="blog__detailsButtonContainer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://irohitgaur.hashnode.dev/${blog.slug}`}
                  >
                    <div className="blog__detailsButtons">read more</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {blogs.map((blog) => (
          <div className="blog__container" key={blog.id}>
            <Color src={blog.social_image} format="hex" crossOrigin>
              {({ data, loading, error }) => (
                <div
                  className="blog__posterContainer"
                  style={{ backgroundColor: data }}
                >
                  <img
                    className="blog__poster"
                    src={blog.social_image}
                    alt={blog.slug}
                  />
                </div>
              )}
            </Color>
            <div className="blog__detailsContainer">
              <div className="blog__detailsName">{blog.title}</div>
              <div className="blog__details">
                <div className="blog__detailsDesc">{blog["description"]}</div>
                <div className="blog__detailsButtonContainer">
                  <a target="_blank" rel="noreferrer" href={blog.url}>
                    <div className="blog__detailsButtons">read more</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
