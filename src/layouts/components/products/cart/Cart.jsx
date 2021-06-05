import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item_gallery_1 from "../../../../assets/item_gallery_1.png"
const Cart=()=>{
    return(
        <div className="cart-container">
           <div className="cart-product">
               <img src={item_gallery_1} alt="" />
               <div className="cart-product-info">
                   <p>  Amazfit T-Rex W1919US5N Smart Watch - Black</p>
                   <input type="number" name="" id="" min="1" max="5"/>
               </div>
               <div className="pdt-remove"><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
           </div>
           <div className="cart-product">
               <img src={item_gallery_1} alt="" />
               <div className="cart-product-info">
                   <p>  Amazfit T-Rex W1919US5N Smart Watch - Black</p>
                   <input type="number" name="" id="" min="1" max="5"/>
               </div>
               <div className="pdt-remove"><FontAwesomeIcon icon="trash-alt" className="checkout-icon" size="2x"/></div>
           </div>
        </div>
    )
}
export default Cart