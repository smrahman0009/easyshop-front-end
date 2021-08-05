import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Switch, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../../redux/ducks/Product";
import { setCartItem } from "../../../../redux/ducks/CartItem";


const Card=(props)=>{
    const {product,handleAddToCart} = props
    const history = useHistory() 
    const productDetails=(productId,quantity)=>{
        history.push("/details/")
        window.scroll(0,0)
    }

    const addItemToCart=(productId,quantity)=>{
        handleAddToCart(productId,quantity)
    }
    return (
        <div className="card">
            <div className="card-image" onClick={()=>productDetails(product.id,1)}>
                <img src={product.media.source} className="card-img-top card-image" alt={product.name}/>
            </div>
            <div className="card-body">
                <p className="card-text">{product.description.replace(/<[^>]*>?/gm, '')}</p>
                <hr/>
                <div className="card-lower">
                    <FontAwesomeIcon icon="cart-plus" onClick={()=>addItemToCart(product.id,1)} />
                    <h6 className="card-title">{product.price.formatted_with_symbol}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card;