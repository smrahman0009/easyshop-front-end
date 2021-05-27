import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./container.css";
import Card from "../products/card/card"

const container = () =>{
    
    return(
        <div className="container-xl p-2 container-main">
            <div class="row g-5">
                <Card/>
            </div>
        </div>
    )
}

export default container;
