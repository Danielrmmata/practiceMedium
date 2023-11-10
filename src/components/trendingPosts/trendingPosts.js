import React from "react";

import "./trendingPosts.scss"
import trendingIcon from "../../assets/images/trendingIcon.png"

export default function TrendingPosts() {

    return (

<section className='trending-section'>
        <div className='trending-title-container'>
          <img src= { trendingIcon }/>
          <h2 className='trending-title'>Trending on Medium</h2>
        </div>
        <div className="card-group">
        <span className='number-trending'>01</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Jarrod Overson</p>
              <h5 className="card-title">Was Rust Worth It?</h5>
              <p className="card-text"><small className="text-muted">Oct 25 · 8 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>02</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Netflix Technology Blog in Netflix TechBlog</p>
              <h5 className="card-title">Kubernetes And Kernel Panics</h5>
              <p className="card-text"><small className="text-muted">Oct 27 · 6 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>03</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Cassie Kozyrkov</p>
              <h5 className="card-title">What was the hardest thing about quitting my job at Google?</h5>
              <p className="card-text"><small className="text-muted">Oct 29 · 10 min read</small></p>
            </div>
          </div>
        </div>
        <div className="card-group">
        <span className='number-trending'>04</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Claire Franky</p>
              <h5 className="card-title">My Husband Could Never Find Out</h5>
              <p className="card-text"><small className="text-muted">Oct 26 · 6 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>05</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Isaac Saul</p>
              <h5 className="card-title">A personal, non-partisan perspective on the Israel-Hamas war</h5>
              <p className="card-text"><small className="text-muted">Oct 12 · 11 min read</small></p>
            </div>
          </div>
          <span className='number-trending'>06</span>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Nick Wignall</p>
              <h5 className="card-title">4 things Self-Disciplined People Don't Do</h5>
              <p className="card-text"><small className="text-muted">Oct 29 · 6 min read</small></p>
            </div>
          </div>
        </div>
      </section>
    )
}