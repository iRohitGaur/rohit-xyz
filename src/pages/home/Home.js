import React, { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

function Home() {
  const [content, setContent] = useState("portfolio");

  let contentHandler = (newContent) => {
    setContent(newContent);
  };

  return (
    <>
      <Sidebar
        content={content}
        contentHandler={(newContent) => contentHandler(newContent)}
      />
      <Content content={content} />
    </>
  );
}

export default Home;
