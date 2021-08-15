import React from "react"
import { commerce } from "../../../lib/Commerce"
import "./checkout.css"
import CheckoutFormTemplate from "./CheckoutFormTemplate"
import CheckoutForm from "./CheckoutForm"
import OrderedItem from "./OrderedItem"
import { useEffect } from "react"

const Checkout = (props)=>{
    const {cart,checkoutTokenId} = props
    // console.log("cart=>",cart,"\n","Token",checkoutTokenId)
    const [shippingCountries,setShippingCountries] = React.useState({})
    const [shippingCountry,setShippingCountry] = React.useState('')
    const [shippingSubdivisions,setShippingSubdivisions] = React.useState({})
    const [shippingSubdivision,setShippingSubdivision] = React.useState('')
    const [shippingOptions,setShippingOptions] = React.useState([])
    const [shippingOption,setShippingOption] = React.useState('')

    const fetchShippingCountries = async () =>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchShippingSubdivisions = async (countryCode)=>{
        if(countryCode){
            // console.log(countryCode)
            const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
            setShippingSubdivisions(subdivisions)
            setShippingSubdivision(Object.keys(subdivisions)[0])
        }
    }
    useEffect(()=>{
        fetchShippingCountries()
    },[checkoutTokenId])

    useEffect(()=>{
        fetchShippingSubdivisions(shippingCountry)
    },[shippingCountry])
    // console.log(shippingSubdivisions)
   
    return (
        <div className="checkout-container">
            <form action="#" className="checkout-form">
                {
                    CheckoutFormTemplate.map(
                        (FormInput)=>(
                            <CheckoutForm 
                                formField={FormInput}
                                shippingCountries={shippingCountries}
                                setShippingCountry={setShippingCountry}
                                shippingCountry={shippingCountry}
                                shippingSubdivisions={shippingSubdivisions}
                                shippingSubdivision={shippingSubdivision}
                                setShippingSubdivision={setShippingSubdivision}
                                shippingOptions={shippingOptions}
                                shippingOption={shippingOption}
                            />
                        )
                    )
                }
                <div className="checkout-row">
                    <input className="checkout-input" type="submit" id="ccv" name="ccv" value="Submit"/>
                </div>
            </form>
            <div className="order-summary">
                <h4>Order Summary</h4>
                {cart.line_items && cart.line_items.map((item)=>(
                    <OrderedItem item={item}/>
                ))}
                <div className="order-subtotal">
                    <h5>Subtotal:</h5>
                    <h5>{cart.subtotal && cart.subtotal.formatted_with_code}</h5>
                </div>
            </div>
        </div>
    )
       
}

export default Checkout