import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../../../redux/ducks/Counter";
import CartItem, { removeCartItem } from "../../../../redux/ducks/CartItem";
import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { counter } from "@fortawesome/fontawesome-svg-core";

const Item = (props) =>{
    const {item} = props
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(increment());
    }
    
    const handleDecrement = () => {
        dispatch(decrement());
    }

    const count = useSelector((state)=>state.counter.count)
    const handleCartItem=(cartItem)=>{
        dispatch(removeCartItem(cartItem))
    }
    let CartItem
    console.log(count)
    if(count>0){
        CartItem = <div className="cart-product">
        <img src={item.media.source} alt="" />
            <div className="cart-product-info">
                <p>{item.name}</p>
                <div className="pdt-qnty">
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" name="cart_pdt" id="cart-pdt" min="1" max="9" value={count}/>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        <div className="pdt-remove" onClick={()=>handleCartItem(item)}><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
        </div>
    }else{
        CartItem = <div></div>
    }
    return(
       CartItem
    )
}

export default Item