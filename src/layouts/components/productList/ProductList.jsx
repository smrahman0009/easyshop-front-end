import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import Card from "../products/card/card"

const ProductList = (props) =>{
    const {addProductToCart,products,isAddedToCart,removeProductFromCart} = props

    // console.log(products)
    return(
        <div className="container-xl container-main">
            <div class="row g-5">
                {
                    products.map(
                        (product)=>{
                           return <Card key={product.id} product={product} 
                           addProductToCart={addProductToCart} 
                           isAddedToCart={isAddedToCart} 
                           removeProductFromCart={removeProductFromCart}
                         />
                        }
                    )
                }
                
            </div>
        </div>
    )
}

export default ProductList;
