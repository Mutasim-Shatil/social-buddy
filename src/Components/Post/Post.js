import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const { id, title } = props.post;
  return (
    <div className="post">
      <h3>Post Id: {id}</h3>
      <p>Title: {title}</p>
      <Link to={`/post-details${id}`}>Post Comment</Link>
    </div>
  );
};

export default Post;
