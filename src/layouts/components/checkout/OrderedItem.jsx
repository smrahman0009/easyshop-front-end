import "./checkout.css"

const OrderedItem = (props)=>{
    const {item} = props
    console.log(item)
    return (
        <div className="ordered-item">
            <div className="item-container">
                <img src={item.media.source} alt={item.name}/>
                <div className="name-qnty">
                    <p>{item.quantity}</p>
                    <p>x</p>
                    <p>{item.name}</p>
                </div>
            </div>
            <div className="price">{item.price.formatted_with_symbol}</div>
        </div>
    )
}

export default OrderedItem