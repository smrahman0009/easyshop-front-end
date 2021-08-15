import React from "react";
import { Route, Switch } from "react-router";
import { commerce } from "../../lib/Commerce";
import { useEffect } from "react";
import { decTotalPrice, incTotalPrice } from "../../redux/ducks/TotalPrice";
import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import ProductList from "../components/productList/ProductList";
import Footer from "../components/footer/Footer";
import Details from "../components/products/details/Details"
import Cart from "../components/products/cart/Cart"
import Login from "../components/login/Login";
import Create from "../components/user/create/Create"
import SignUp from "../components/user/signup/SignUp"
import Services from "../components/services/Services"
import Checkout from "../components/checkout/Checkout";

import { useDispatch } from "react-redux";
import Commerce from '@chec/commerce.js';

const Home=()=>{
    const [products,setProducts] = React.useState([])
    const [cart,setCart] = React.useState({})
    const [checkoutToken,setCheckoutToken] = React.useState({})

    useEffect(()=>{
        const fetchProducts = async () => {
            const {data} = await commerce.products.list()
            setProducts(data)
        }
        const fetchCart = async () =>{
            const cart = await commerce.cart.retrieve()
            setCart(cart)
        }
        fetchProducts()
        fetchCart()
    },[])


    const handleAddToCart = async (productId,quantity)=>{
        const item = await commerce.cart.add(productId,quantity)
        setCart(item.cart)
    }

    const handleUpdateCartQty = async (lineItemId,quantity)=>{
        const item = await commerce.cart.update(lineItemId,{quantity})
        setCart(item.cart)
    }

    const handleRemoveFromCart = async (lineItemId)=>{
        const item = await commerce.cart.remove(lineItemId)
        setCart(item.cart)
    }

    useEffect(()=>{
        const generateCheckoutToken = async(cartId) =>{
            const token = await commerce.checkout.generateToken(cartId,{type:'cart'})
            setCheckoutToken(token)
        }
        generateCheckoutToken(cart.id)
    },[cart.id])
    // console.log(checkoutToken)

    return (
        <>
        <Navbar totalItems={cart.total_items} />
        <Login/>
        {
           Object.keys(cart).length > 0 &&
            <Cart 
                cart={cart} 
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        }
       
        <Switch>
            <Route exact path="/">
                <Carousel/>
                <Services/>
                <ProductList 
                    products={products} 
                    handleAddToCart={handleAddToCart}
                  />
            </Route>
            <Route path="/details/">
                <Details/>
            </Route>
            <Route path="/user/auth/create">
                <Create/>
            </Route>
            <Route path="/user/auth/signup">
                <SignUp/>
            </Route>
            <Route path="/checkout">
                {checkoutToken && <Checkout cart={cart} checkoutTokenId={checkoutToken.id}/>}
            </Route>
        </Switch>
        <Footer/>
        </>
    )
}

export default Home;