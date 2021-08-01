import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { incTotalPrice,decTotalPrice } from "../../../../redux/ducks/TotalPrice";
import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { counter } from "@fortawesome/fontawesome-svg-core";

const Item = (props) =>{
    const dispatch = useDispatch()
    const {item,removeProductFromCart,incCartItemQty,decCartItemQty} = props
    const [count,setCount] = React.useState(1) 
    const handleIncrement = (item) => {
        const price = item.price.raw
        incCartItemQty(item)
        setCount(count+1)
        dispatch(incTotalPrice(price))
    }
    
    const handleDecrement = (item) => {
        const price  = item.price.raw
        if(item.cart_quantity>1){
            setCount(count-1)
            dispatch(decTotalPrice(price))
            decCartItemQty(item)
        }
        
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
                    <input type="number" name="cart_pdt" id="cart-pdt" min="1" max="9" value={item.cart_quantity} disabled/>
                    <button onClick={()=>handleIncrement(item)}>+</button>
                    <p className="equal">=</p>
                    <input type="text" id="item-price" value={item.cart_quantity*item.price.raw} disabled/>
                </div>
            </div>
        <div className="pdt-remove" onClick={()=>removeProductFromCart(item,item.cart_quantity*item.price.raw)}><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
        </div>
   
    return(
       CartItem
    )
}

export default Item