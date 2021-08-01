import React from "react";
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/fontawesome/FontAwesome"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar=(props)=>{
  const {cartItems} = props
  const showCart=()=>{
    // document.querySelector(".cover-container").classList.toggle("cover-container-show")
    document.querySelector(".cart-container").classList.toggle("cart-container-show")
    
  }

  const showLogin=()=>{
    document.querySelector(".login-container").classList.toggle("login-container-show")
  }

  const navItem=()=>{
    document.querySelector(".nav-left").classList.toggle("nav-item-show")
  }
    
    return (
      <div className="nav-top">
        <div className="nav-left">
          <div className="nav-item nav-icon" > <FontAwesomeIcon className="nav-top-icon" icon="bars" size="lg" onClick={navItem}/></div>
          <div className="nav-item active">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Mobile</div>
          <div className="nav-item">Watch</div>
        </div>
        <div className="nav-right">
          {
            cartItems.length > 0 &&  <div className="cart-list-count">{cartItems.length}</div>
          }
         
          <div className="nav-item"> <FontAwesomeIcon  className="nav-top-icon" icon="cart-plus" size="lg" onClick={showCart}/></div>
          <div className="nav-item"> <FontAwesomeIcon  className="nav-top-icon" icon="user" size="lg" onClick={showLogin}/></div>
        </div>
      </div>
    )
}

export default Navbar;