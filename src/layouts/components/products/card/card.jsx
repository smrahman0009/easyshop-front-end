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
    const {product,addProductToCart} = props
    const history = useHistory() 
    const dispatch = useDispatch()
    const productDetails=()=>{
        // history.push("/details/")
        // dispatch(setProduct(product))
        dispatch(setCartItem(product))
    }
    // const cartItem = useSelector((state)=>state.cartItem.cartItem)
    // console.log(cartItem)
    return (
        <div className="card">
            <div className="card-image" onClick={productDetails}>
                <img src={product.media.source} className="card-img-top card-image" alt={product.name}/>
            </div>
            <div className="card-body">
                <p className="card-text">{product.description.replace(/<[^>]*>?/gm, '')}</p>
                <hr/>
                <div className="card-lower">
                    <FontAwesomeIcon icon="cart-plus" size="lg" onClick={()=>addProductToCart(product)}/>
                    <h6 className="card-title">{product.price.formatted_with_symbol}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card;