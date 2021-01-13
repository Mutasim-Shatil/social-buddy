import React, { useEffect, useState } from 'react'
import Post from '../Post/Post';
import "./Home.css"

const Home = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])
    // console.log(post);
    return (
        <div>
            <h1 className="header">User Post: {post.length}</h1>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

export default Home
