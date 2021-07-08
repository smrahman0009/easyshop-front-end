import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../../redux/ducks/Counter";

import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item_gallery_1 from "../../../../assets/item_gallery_1.png"
const Cart=()=>{
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment());
    }
    
    const handleDecrement = () => {
        dispatch(decrement());
    }

    const count = useSelector((state)=>state.counter.count)
    const showCart=()=>{
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
        
      }
    const cartItems = useSelector(state=>state.cartItem.cartItem)
    console.log(cartItems)
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
                    <div className="cart-product">
                        <img src={item.media.source} alt="" />
                        <div className="cart-product-info">
                            <p>{item.name}</p>
                            <div className="pdt-qnty">
                                <button onClick={handleDecrement}>-</button>
                                <input type="number" name="cart_pdt" id="cart-pdt" min="1" max="9" value={count}/>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                        <div className="pdt-remove"><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart