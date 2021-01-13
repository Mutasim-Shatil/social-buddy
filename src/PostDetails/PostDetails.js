import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostComment from '../PostComment/PostComment';

const PostDetails = () => {
    const {postId} = useParams()
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setComment(data));
    }, [])
    console.log(comment);
    return (
        <div>
            {
                comment.map(comment => <PostComment comment={comment}></PostComment>)
            }
        </div>
    )
}

export default PostDetails
