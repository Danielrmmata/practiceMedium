import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./view.scss"

export default function PostView() {
    const { id } = useParams()
    const [post, setPost] = React.useState({})

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:5001/post/${id}`)
            const data = await response.json()

            // Convert date to dateString in dd/mm/yyyy format
            const date = new Date(data.createdAt);
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            data.createdAt = dateString

            setPost(data)
        }

        fetchPost()
    }, []);
    return (
        <div className="post-card">
            {
                post && (
                    <>
                        <div className="post-card-body">
                            <p className="card-text">{ post.author?.name }</p>
                            <h5 className="card-title">{ post.title }</h5>
                            <p className="card-text text-muted">{ post.content }</p>
                            <p className="card-text">
                            <small className="text-muted">{ post.createdAt }</small>
                            <button className='btn-theme text-muted'>Theme</button><img/>
                            </p>
                        </div>
                        <div className='img-post-card'>
                            <img className='img-post' src='https://picsum.photos/200/134'/>
                        </div>
                </>
                )
            }
      </div>
    )
}