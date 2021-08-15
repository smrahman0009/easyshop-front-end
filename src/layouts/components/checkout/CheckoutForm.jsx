import "./checkout.css"

const CheckoutForm = (props)=>{
    const {
            formField,
            shippingCountries,
            shippingCountry,
            setShippingCountry,
            shippingSubdivisions,
            shippingSubdivision,
            setShippingSubdivision,
            shippingOptions,
            shippingOption
        } = props
    const TextInput = ()=>(
        <input 
            className="checkout-input"
            type={formField.type}
            id={formField.id}
            name={formField.name}
            placeholder={formField.placeholder}
            value={formField.value} 
        />
    )
    
    const countries = Object.entries(shippingCountries).map(([code,name])=>(
        {id:code,label:name} 
    ))

    const subdivisions = Object.entries(shippingSubdivisions).map(([code,name])=>(
        {id:code,label:name} 
    ))
    // console.log(subdivisions)
    const SelectInput = ()=>{
        if(formField.id == "customer-shipping-country"){
            return (
                <select id={formField.id} value={shippingCountry} onChange={(e)=>setShippingCountry(e.target.value)}>
                    {
                        countries.map((country)=>(
                            <option key={country.id} value={country.id}>{country.label}</option>
                        ))
                    }
                </select>
            )
        } else if(formField.id == "customer-shipping-subdivision"){
            return (
                <select id={formField.id} value={shippingSubdivision} onChange={(e)=>setShippingSubdivision(e.target.value)}>
                {
                    subdivisions.map((subdivision)=>(
                        <option key={subdivision.id} value={subdivision.id}>{subdivision.label}</option>
                    ))
                }
            </select>
            )
        }else {
            return (
                <select id={formField.id}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi" selected>Audi</option>
                </select>
            )
        }
    }
    
    return (
        <>
            {
                formField.checkoutSubheading &&  <h4 className="checkout-subheading">{formField.checkoutSubheading}</h4>
            }
           
            <div className="checkout-row">
                <label 
                    className="checkout-lebel"
                    htmlFor={formField.htmlFor}
                >
                {formField.label}
                </label>
                {
                    formField.type === "text" ? <TextInput/> : <SelectInput/>
                }
            </div>
        </>
    )
}

export default CheckoutForm