import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostComment from '../PostComment/PostComment';

const PostDetails = (props) => {
    const {postId} = useParams()
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => setComment(data));
    }, [])
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
        .then((response) => response.json())
        .then(data => setPhotos(data))
    },[])
    return (
        <div>
            <h1 className="header">Comment: {comment.length}</h1>
            {
                comment.map(comment => <PostComment comment={comment} photos={photos}></PostComment>)
            }
        </div>
    )
}

export default PostDetails
