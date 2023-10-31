import React from 'react'
import "./home.scss"
import logoMedium from "../../../assets/images/logoMedium.png"

export default function home() {

  const allPost = []

  return (
    <header className='header_container'>
      <div className='logo-header'>
        <img className='logo-img' src={ logoMedium } />
      </div>
      <nav>
        
          <a>Our story</a>
          <a>Membership</a>
          <a>Write</a>
          <a>Sign In</a>
          <a>
            <button />
          </a>
        
        </nav>
      <div>
        
      </div>
      
    </header>
  )
}