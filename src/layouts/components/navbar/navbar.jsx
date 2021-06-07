import React from "react";
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/fontawesome/FontAwesome"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar=()=>{
  
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
    // return (
    //   <div className="container-xl">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <div className="container-fluid">
    //         <a className="navbar-brand" href="#" onClick={showCart}> <FontAwesomeIcon icon="cart-plus"/></a>
    //         <a className="navbar-brand" href="#" onClick={showLogin}> <FontAwesomeIcon icon="user"/></a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="#">HOME</a>
    //             </li>
    //             <li className="nav-item dropdown">
    //               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                CATEGORIES
    //               </a>
    //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                 <li><a className="dropdown-item" href="#">Watches</a></li>
    //                 <li><a className="dropdown-item" href="#">Mobiles</a></li>
    //                 <li><hr className="dropdown-divider"/></li>
    //                 <li><a className="dropdown-item" href="#">Head Phones</a></li>
    //               </ul>
    //             </li>
    //           </ul>
    //           <form className="d-flex">
    //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //             <button className="btn btn-outline-success" type="submit">Search</button>
    //           </form>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // )

    return (
      <div className="nav-top">
        <div className="nav-left">
          <div className="nav-item nav-icon" onClick={navItem}> <FontAwesomeIcon icon="bars" size="2x"/></div>
          <div className="nav-item active">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Mobile</div>
          <div className="nav-item">Watch</div>
        </div>
        <div className="nav-right">
          <div className="nav-item" onClick={showCart}> <FontAwesomeIcon icon="cart-plus" size="2x"/></div>
          <div className="nav-item" onClick={showLogin}> <FontAwesomeIcon icon="user" size="2x"/></div>
        </div>
      </div>
    )
}

export default Navbar;