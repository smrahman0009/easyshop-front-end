import "./checkout.css"

const CheckoutForm = (props)=>{
    const {formField} = props
    // console.log(formField)
    return (
        <>
            {
                formField.checkoutSubheading &&  <h4 className="checkout-subheading">{formField.checkoutSubheading}</h4>
            }
           
            <div className="checkout-row">
                <label 
                    className="checkout-lebel"
                    htmlFor={formField.htmlFor}>
                    {formField.label}
                </label>
                <input 
                    className="checkout-input"
                    type={formField.type}
                    id={formField.id}
                    name={formField.name}
                    placeholder={formField.placeholder} 
                />
            </div>
        </>
    )
}

export default CheckoutForm