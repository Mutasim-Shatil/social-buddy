import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Post = (props) => {
  const { id, title } = props.post;
  const classes = useStyles();
  return (
    <div className="post classes.root">
      <h3>Post Id: {id}</h3>
      <p>Title: {title}</p>
      <Link className="btn" to={`/post-details${id}`}>
        <Button variant="contained" color="primary">
          Post Comment
        </Button>
      </Link>
    </div>
  );
};

export default Post;
