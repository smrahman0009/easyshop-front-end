import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Cart.css"
import Item from "./Item"

const Cart=(props)=>{
    const {cartItems,removeProductFromCart} = props
  
    const showCart=()=>{
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
    }
    
    const totalPrice = useSelector((state)=>state.totalPrice.price)
    console.log(totalPrice)
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
            <input type="text" id="totall-price" value={totalPrice}/>
        </div>
    )
}
export default Cart