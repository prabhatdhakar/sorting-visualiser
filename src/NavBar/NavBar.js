import React from "react";
import Logo from "./logo.png";
import "./NavBar.css";
const NavBar = () =>{
    return (
    <div>
        <header className="inner-width">
            
           <a href="https://www.youtube.com/watch?v=NXJ1wLsllwg&t=16s" ><img className="logo" src={Logo} alt="logoIsHere"/></a>
           <i className="menu-toggle-button fas fas-bars" ></i>
           <nav className="navigation-menu">
              <a href="google" ><i className="fas fa-home home" >Home</i></a>
              <a href="google" ><i className="fas fa-align-left about" >About Us</i></a>
              <a href="google" ><i className="fas fa-buffer works" >Works</i></a>
              <a href="google" ><i className="fas fa-users team" >Team</i></a>
              <a href="google" ><i className="fas fa-headset contact" >Contact Us</i></a>
           </nav>
        </header>
    </div>
    );   
};
export default NavBar;