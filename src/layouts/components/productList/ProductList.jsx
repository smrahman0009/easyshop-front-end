import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";
import Card from "../products/card/card"
import { commerce } from "../../../lib/Commerce";
import { useEffect } from "react";

const ProductList = () =>{
    const [products,setProducts] = React.useState([])
    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
    return(
        <div className="container-xl container-main">
            <div class="row g-5">
                {
                    products.map(
                        (product)=>{
                           return <Card key={product.id} product={product}/>
                            // return console.log(product.name)
                        }
                    )
                }
                
            </div>
        </div>
    )
}

export default ProductList;
