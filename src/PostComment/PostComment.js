import React from 'react'
import "./PostComment.css"

const PostComment = (props) => {
    const {id,name,body,email} = props.comment 
    const { thumbnailUrl } = props.photos;
    return (
      <div className="post-comment">
        <div>
          <img src={thumbnailUrl} alt="" />
        </div>
        <div className="comment-section">
          <h3>Comment Id: {id}</h3>
          <h5>Name: {name}</h5>
          <p>Email: {email}</p>
          <p><strong>Comment:</strong> {body}</p>
        </div>
      </div>
    );
}

export default PostComment
