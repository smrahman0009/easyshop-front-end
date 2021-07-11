import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Cart.css"
import Item from "./Item"
import { useEffect } from "react";
import { getItemUpdate } from "../../../../redux/ducks/CartItem";

const Cart=()=>{
    const dispatch = useDispatch()

    const showCart=()=>{
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
    }
    
    
    const cartItems = useSelector(state=>state.cartItem.cartItem)
    
    useEffect(()=>{
        if(cartItems.length>0){
            dispatch(getItemUpdate())
        }
    })
    console.log("CART: ",cartItems.length,cartItems)
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
                 <Item item={item}/>
            ))
            }
        </div>
    )
}
export default Cart