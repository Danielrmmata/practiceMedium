
import React from "react"

import "./header.scss"
import logoMedium from "../../assets/images/logoMedium.png"

export default function Header() {


return (
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

    )
}