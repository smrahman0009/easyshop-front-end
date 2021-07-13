import React from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem, { decCartQty, incCartQty, removeCartItem } from "../../../../redux/ducks/CartItem";
import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { counter } from "@fortawesome/fontawesome-svg-core";

const Item = (props) =>{
    const {item,removeProductFromCart} = props
    
    const [count,setCount] = React.useState(1) 
    const handleIncrement = () => {
       setCount(count+1)
    }
    
    const handleDecrement = () => {
       setCount(count-1)
    }

  
    let CartItem = <div className="cart-product">
        <img src={item.media.source} alt="" />
            <div className="cart-product-info">
                <p>{item.name}</p>
                <div className="pdt-qnty">
                    <button onClick={()=>handleDecrement(item)}>-</button>
                    <input type="number" name="cart_pdt" id="cart-pdt" min="1" max="9" value={count}/>
                    <button onClick={()=>handleIncrement(item)}>+</button>
                </div>
            </div>
        <div className="pdt-remove" onClick={()=>removeProductFromCart(item)}><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
        </div>
   
    return(
       CartItem
    )
}

export default Item