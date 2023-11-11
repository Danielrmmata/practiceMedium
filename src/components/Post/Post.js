import React from 'react'
import "./Post.scss"
import { Link } from "react-router-dom"

export default function Post(props) {

  const { _id, title, author, content, createdAt, comments } = props
    console.log(props)

  return (
    
    <Link to={`/post/${_id}`} className="post">

      <div className="post-card">
        <div className="post-card-body">
          <p className="card-text">{ author.name }</p>
          <h5 className="card-title">{ title }</h5>
          <p className="card-text text-muted">{ content }</p>
          <p className="card-text">
            <small className="text-muted">{ createdAt }</small>
            <button className='btn-theme text-muted'>Theme</button><img/>
          </p>
        </div>
          <div className='img-post-card'>
            <img className='img-post' src='https://picsum.photos/200/134'/>
          </div>
      </div>

    </Link>
    
  )
}