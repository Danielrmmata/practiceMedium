import React, { useEffect, useState } from "react"
import "./blog.scss"
import Post from "../../../components/Post/Post.js"

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5001/posts")
            const data = await response.json()

            // Convert date to dateString in dd/mm/yyyy format
            await data.forEach(async (post) => {
                const date = new Date(post.createdAt)
                const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                post.createdAt = dateString;
            })

            console.log(data)

            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="blog">
            <div className="posts">
                {posts.map((post) => (
                    <Post key={post._id} {...post} />
                ))}
            </div>
        </div>
    )
}