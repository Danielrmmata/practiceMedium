import React from 'react'
import "./home.scss"
import Header from "../../../layouts/header/header.js"
import TrendingPosts from "../../trendingPosts/trendingPosts.js"
import PostItem from "../../Post/Post.js"
import animationSection from "../../../assets/images/animationSection.svg"

export default function home() {
 

  return (
    <div>
      <section>
        <Header />
      </section>
      
      <section className='intro-section'>
        <div className='intro-container'>
          <h2 className='intro-title'>
            Stay curious.
          </h2>
        </div>
        <div className='description-container'>
          <h3 className='intro-description'>
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
        </div>
        <div className='btn-container'>
          <button className='btn-description'>Start reading</button>
        </div>
        <div className='animation-container'>
          <img className='img-animation' src={ animationSection } />
        </div>
      </section>

      <section>
      <TrendingPosts />
      </section>
      
      <section className="post-section">
        <PostItem />
      </section>

    </div>
  )
}