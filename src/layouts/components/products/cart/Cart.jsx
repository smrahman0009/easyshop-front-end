import "./Cart.css"
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import item_gallery_1 from "../../../../assets/item_gallery_1.png"
const Cart=()=>{
    const showCart=()=>{
        // document.querySelector(".cover-container").classList.toggle("cover-container-show")
        document.querySelector(".cart-container").classList.toggle("cart-container-show")
        
      }
    return(
        
        <div className="cart-container">
            <div className="cart-header">
                <h4>Your Items</h4>
                <div className="cart-header-icon" onClick={showCart}>
                    <FontAwesomeIcon icon="times" size="2x"></FontAwesomeIcon>
                </div>
            </div>
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