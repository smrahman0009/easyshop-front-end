import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Cart.css"
import Item from "./Item"
import { Link } from "react-router-dom";

const Cart=(props)=>{
    const {cart,handleUpdateCartQty,handleRemoveFromCart} = props
  
    const showCart=()=>{
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
    }
    
    const totalPrice = useSelector((state)=>state.totalPrice.price)
    // console.log(totalPrice)
    return(
        
        <div className="cart-container">
            <div className="cart-header">
                <h4>Your Items</h4>
                <div className="cart-header-icon" onClick={showCart}>
                    <FontAwesomeIcon icon="times" size="2x"></FontAwesomeIcon>
                </div>
            </div>
            {
            cart.line_items.map(lineItem=>(
                 <Item 
                    item={lineItem}
                    key={lineItem.id}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart} 
                  />
            ))
            }
            <div className="cart-totall-price">

                <label for="totall-price"><h6>Subtotal Price</h6></label>
                <input type="text" id="totall-price" value={cart.subtotal.formatted_with_symbol} disabled/>
            </div>
            <Link className="cart-checkout" to="/checkout">
                Checkout
            </Link>
        </div>
    )
}
export default Cart