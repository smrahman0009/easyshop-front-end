import React from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem, { decCartQty, incCartQty, removeCartItem } from "../../../../redux/ducks/CartItem";
import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { counter } from "@fortawesome/fontawesome-svg-core";

const Item = (props) =>{
    const {item,removeProductFromCart} = props
    console.log(item.price)
    const [count,setCount] = React.useState(1) 
    const handleIncrement = () => {
       setCount(count+1)
    }
    
    const handleDecrement = () => {
        if(count>1) setCount(count-1)
    }

  
    let CartItem = <div className="cart-product">
        <div className="cart-product-media">
            <img src={item.media.source} alt="" />
            <p>{item.name}</p>
        </div>
            <div className="cart-product-info">
                <div className="pdt-qnty">
                    <input type="text" className="single-price" value={item.price.formatted_with_symbol} disabled/>
                    <button onClick={()=>handleDecrement(item)}>-</button>
                    <input type="number" name="cart_pdt" id="cart-pdt" min="1" max="9" value={count} disabled/>
                    <button onClick={()=>handleIncrement(item)}>+</button>
                    <p className="equal">=</p>
                    <input type="text" className="total-price" value={count*item.price.raw} disabled/>
                </div>
            </div>
        <div className="pdt-remove" onClick={()=>removeProductFromCart(item)}><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
        </div>
   
    return(
       CartItem
    )
}

export default Item