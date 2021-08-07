import React from "react"
import { commerce } from "../../../lib/Commerce"
import "./checkout.css"
import CheckoutFormTemplate from "./CheckoutFormTemplate"
import CheckoutForm from "./CheckoutForm"

const Checkout = (props)=>{
   
    const {cart} = props
    const [checkoutToken,setCheckoutToken] = React.useState({})
    const generateCheckoutToken = async ()=>{
        if(cart.line_items.length){
            const token = await commerce.checkout.generateToken(cart.id,{type:'cart'})
            setCheckoutToken(token)
        }
    }
    // console.log(CheckoutFormTemplate)
    return (
        <div className="checkout-container">
            <form action="#" className="checkout-form">
                {
                    CheckoutFormTemplate.map(
                        (FormInput)=>(
                            <CheckoutForm formField={FormInput}/>
                        )
                    )
                }
                <div className="checkout-row">
                    <input className="checkout-input" type="submit" id="ccv" name="ccv" value="Submit"/>
                </div>

                <button onClick={generateCheckoutToken}>Generate Token</button>
        </form>
        </div>
    )
       
}

export default Checkout