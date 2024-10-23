import React from 'react'
import './styles/NavBar.css'
import {Link} from "react-router-dom"

export default function NavBar({userAuth}) {
  return (
    <div>
       <nav className="navbar">
            <a href="#" className="navbar-logo">Logo</a>
            <ul className="navbar-links">
                <li>{userAuth && <Link to="/">Home</Link>}</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}
