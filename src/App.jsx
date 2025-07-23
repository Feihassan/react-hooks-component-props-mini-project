import React from "react";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blogData from "./data/blog";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
<About></About>
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;