import React, { useEffect, useState } from "react";
import "./PostList.scss";
import Card from "./Card";

const PostList = ({search}) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      );
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const postsFitred = posts.filter(post => JSON.stringify(post).toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="post-list">
      {postsFitred.length ? postsFitred.map((post) => (
        <Card key={post.img} {...post} />
      )) : "ничего не найдено"}
    </div>
  );
};

export default PostList;
