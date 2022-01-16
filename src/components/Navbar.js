import React from 'react'
import logo from '../images/meme-logo.png'
import NavbarCss from "../navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="meme logo"></img>
            <div className="nav-vertical">
                <h1 className="navbar-name">Gif Search</h1>
                <h3 className="navbar-slogan" >Find your favorite gifs</h3>
            </div>
            <h3 className="navbar-team-names">Shakhram, Rashad, Awais</h3>
        </div>
    )
}