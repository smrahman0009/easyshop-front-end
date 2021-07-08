import React from "react";
import "./Details.css";
import "./Details.css";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item_gallery_1 from "../../../../assets/item_gallery_1.png"
import { useSelector } from "react-redux";

const Details =()=>{
    // const product = useSelector((state)=>state.product.product)
    // console.log(product,"<= Details")
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
                <div className="product-quantity">

                    <label for="cars">Quantity</label>
                    <br></br>
                    <select id="pdt-qnt">
                        <option value="1">only 1</option>
                        <option value="2">only 2</option>
                        <option value="3">only 3</option>
                        <option value="4">only 4</option>
                    </select>
                </div>
                </div>
                <div className="details-des-bottom">
                <button className="product-checkout"><FontAwesomeIcon icon="cart-plus" className="checkout-icon" size="lg"/> <span className="checkout-text">Checkout</span></button>
                <div className="product-query">
                        <p>
                        Have questions about this product ?
                        </p>
                    <div>
                        <h5>
                            9999999999
                        </h5>
                        <FontAwesomeIcon icon="phone" size="lg"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="product-dtl-gap">

            </div>
            <div className="product-dtl-spe">
                <h3>Product details of Xiaomi IMILAB KW66 Alloy Smart Watch for Men - Black</h3>
                <p>The Xiaomi iMi KW66 Multifunctional Watch is a gadget that will help in everyday life. Modern design with zinc alloy and IML coated case back give it a stylish look. You can easily change the dials to suit your mood and style. Xiaomi iMi KW66 has a built-in 340 mAh battery, which means that you can use it for a long time without recharging. The watch will also help monitor your health. Whatever you do during the day, Xiaomi iMi KW66 will always monitor your wellness and track even small deviations from the norm. The watch can control your heart condition around the clock and thus help monitor your cardiovascular system. Besides, Xiaomi iMi KW66 is waterproof - you can not worry about the state of the watch when it comes into contact with water.</p>
                <div className="specifications-list">
                    <div className="spe-type">Product Type</div>
                    <div className="spe-value">Watch</div>
                    <hr></hr>
                    <div className="spe-type">Case Material</div>
                    <div className="spe-value">Zinc Alloy</div>
                    <hr></hr>
                    <div className="spe-type">Battery</div>
                    <div className="spe-value">Built-in 340 mAh</div>
                    <hr></hr>
                    <div className="spe-type">Waterproof</div>
                    <div className="spe-value">Yes</div>
                    <hr></hr>
                    <div className="spe-type">Gender</div>
                    <div className="spe-value">Men</div>
                    <hr></hr>
                    <div className="spe-type">Display</div>
                    <div className="spe-value">1.28-inches 3D TFT</div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}

export default Details;