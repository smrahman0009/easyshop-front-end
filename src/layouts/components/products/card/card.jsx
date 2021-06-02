import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import "../../../../assets/fontawesome/FontAwesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Details from "../details/Details"

import gallery_item_1 from "../../../../assets/gallery_item_1.jpeg"
import gallery_item_2 from "../../../../assets/gallery_item_2.jpeg"
import gallery_item_3 from "../../../../assets/gallery_item_3.jpeg"
import { Route, Switch, useHistory } from "react-router";


const Card=()=>{
    const history = useHistory() 
    const cardItems = []
    for (let index = 0; index < 8; index++) {
       cardItems.push(
            <div className="card">
                <div className="card-image" onClick={()=>history.push("/details/")}>
                    <img src={gallery_item_3} className="card-img-top card-image" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text">This is a longer card with supporting text below as a natural</p>
                    <hr/>
                    <div className="card-lower">
                        <FontAwesomeIcon icon="cart-plus" size="lg"/>
                        <h6 className="card-title">$199</h6>
                    </div>
                </div>
               
            </div>
       )
        
    }
    return (
        cardItems
    )
}

export default Card;