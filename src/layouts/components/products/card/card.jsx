import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

import gallery_item_1 from "../../../../assets/gallery_item_1.jpeg"
import gallery_item_2 from "../../../../assets/gallery_item_2.jpeg"
import gallery_item_3 from "../../../../assets/gallery_item_3.jpeg"

const Card=()=>{
    const cardItems = []
    for (let index = 0; index < 10; index++) {
       cardItems.push(
        <div class="col-sm-6 col-md-4 col-lg-3 ">
            <div className="card">
                <img src={gallery_item_3} className="card-img-top card-image" alt="..."/>
                <div className="card-body">
                <p className="card-text">This is a longer card with supporting text below as a natural</p>
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