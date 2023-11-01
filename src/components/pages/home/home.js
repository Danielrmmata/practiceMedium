import React from 'react'
import "./home.scss"
import logoMedium from "../../../assets/images/logoMedium.png"
import animationSection from "../../../assets/images/animationSection.svg"
import trendingIcon from "../../../assets/images/trendingIcon.png"
import savePostIcon from "../../../assets/images/savePostIcon.svg"

export default function home() {

  const allPost = [{
    authorImg: '',
    autor: 'Daniel',
    title: 'Post',
    descriptionPost: 'This is a description of a post'
  }]

  return (
    <div>
      <header className='header_container'>
        <div className='logo-header'>
          <img className='logo-img' src={ logoMedium } />
        </div>
        <nav className='nav-container'>
            <ul className='nav-links'>
              <li className='nav-item'><a>Our story</a></li>
              <li className='nav-item'><a>Membership</a></li>
              <li className='nav-item'><a>Write</a></li>
              <li className='nav-item'><a>Sign In</a></li>
              <li className='nav-item'>
                <button className='btn-started'>Get started</button>
              </li>
            </ul>    
        </nav>
      </header>
      
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

      <section className='trending-section'>
        <div className='trending-title-container'>
          <img src= { trendingIcon }/>
          <h2 className='trending-title'>Trending on Medium</h2>
        </div>
        <div class="card-group">
        <span className='number-trending'>01</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Jarrod Overson</p>
              <h5 class="card-title">Was Rust Worth It?</h5>
              <p class="card-text"><small class="text-muted">Oct 25 · 8 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>02</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Netflix Technology Blog in Netflix TechBlog</p>
              <h5 class="card-title">Kubernetes And Kernel Panics</h5>
              <p class="card-text"><small class="text-muted">Oct 27 · 6 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>03</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Cassie Kozyrkov</p>
              <h5 class="card-title">What was the hardest thing about quitting my job at Google?</h5>
              <p class="card-text"><small class="text-muted">Oct 29 · 10 min read</small></p>
            </div>
          </div>
        </div>
        <div class="card-group">
        <span className='number-trending'>04</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Claire Franky</p>
              <h5 class="card-title">My Husband Could Never Find Out</h5>
              <p class="card-text"><small class="text-muted">Oct 26 · 6 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>05</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Isaac Saul</p>
              <h5 class="card-title">A personal, non-partisan perspective on the Israel-Hamas war</h5>
              <p class="card-text"><small class="text-muted">Oct 12 · 11 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>06</span>
          <div class="card">
            <div class="card-body">
              <p class="card-text">Nick Wignall</p>
              <h5 class="card-title">4 things Self-Disciplined People Don't Do</h5>
              <p class="card-text"><small class="text-muted">Oct 29 · 6 min read</small></p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="post-section">
      <div class="post-card">
            <div class="post-card-body">
              <p class="card-text">David Bowles</p>
              <h5 class="card-title">Tomicca: Our Departed on the Day of the Dead</h5>
              <p class="card-text text-muted">Without getting into just how much Día de Muertos or Day of the Dead in Mexico is...</p>
              <p class="card-text"><small class="text-muted">Oct 29 · 6 min read · </small>
              <button className='btn-theme text-muted'>Theme</button><img src={ savePostIcon }/></p>
            </div>
            <div className='img-post-card'>
              <img className='img-post' src='https://picsum.photos/200/134'/>
            </div>
          </div>
      </section>
    </div>
  )
}