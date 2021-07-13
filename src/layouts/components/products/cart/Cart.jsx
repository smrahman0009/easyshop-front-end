import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Cart.css"
import Item from "./Item"

const Cart=(props)=>{
    const {cartItems,removeProductFromCart} = props
    console.log(props,"Prosps")
    const showCart=()=>{
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
    }
    

    console.log("Cart",cartItems)
    return(
        
        <div className="cart-container">
            <div className="cart-header">
                <h4>Your Items</h4>
                <div className="cart-header-icon" onClick={showCart}>
                    <FontAwesomeIcon icon="times" size="2x"></FontAwesomeIcon>
                </div>
            </div>
            {
            cartItems.map(item=>(
                 <Item item={item} removeProductFromCart={removeProductFromCart}/>
            ))
            }
        </div>
    )
}
export default Cart