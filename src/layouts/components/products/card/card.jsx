import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Switch, useHistory } from "react-router";


const Card=(props)=>{
    const {product} = props
    const history = useHistory() 
    return (
        <div className="card">
            <div className="card-image" onClick={()=>history.push("/details/")}>
                <img src={product.media.source} className="card-img-top card-image" alt={product.name}/>
            </div>
            <div className="card-body">
                <p className="card-text">{product.description.replace(/<[^>]*>?/gm, '')}</p>
                <hr/>
                <div className="card-lower">
                    <FontAwesomeIcon icon="cart-plus" size="lg"/>
                    <h6 className="card-title">{product.price.formatted_with_symbol}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card;