import React from 'react'
import "./PostComment.css"

const PostComment = (props) => {
    const {id,name,body} = props.comment 
    return (
        <div className="post-comment">
            <h1>Comment Id: {id}</h1>
            <h4>Name: {name}</h4>
            <p>Comment: {body}</p>
        </div>
    )
}

export default PostComment
