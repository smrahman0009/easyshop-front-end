import React from "react";
import "./Details.css";
import "./Details.css";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item_gallery_1 from "../../../../assets/item_gallery_1.png"

const Details =()=>{
    return(
        <div className="product-details">
            <div className="details-img">
                <div className="img-main">
                    <img src={item_gallery_1} alt="" />
                </div>
                <div className="img-sub">
                   <img src={item_gallery_1} alt="" />
                   <img src={item_gallery_1} alt="" />
                   <img src={item_gallery_1} alt="" />
                </div>
            </div>
            <div className="details-des">
                <div className="details-des-top">
                <h4 className="product-name">
                Amazfit T-Rex W1919US5N Smart Watch - Black
                </h4>
                <p className="product-brand">
                BRAND : AMAZFIT  |  More Smart Watch from AMAZFIT
                </p>
                <p className="product-price">
                    <span className="price-icon">$</span><span className="price-amount">19990</span>
                </p>
                <div class="btn-group">
                <button type="button" class="btn btn-quantity dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                   Quantity
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">1</a></li>
                    <li><a className="dropdown-item" href="#">2</a></li>
                    <li><a className="dropdown-item" href="#">3</a></li>
                </ul>
                </div>
                </div>
                <div className="details-des-bottom">
                <button className="product-checkout"><FontAwesomeIcon icon="cart-plus" className="checkout-icon" size="lg"/> <span className="checkout-text">Checkout</span></button>
                <p className="product-query"></p>
                </div>
            </div>
        </div>
    )
}

export default Details;