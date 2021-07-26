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
import { useDispatch } from "react-redux";
const Home=()=>{
    const [products,setProducts] = React.useState([])
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    
    const [cartItems,setCartItems] = React.useState([])
    const addProductToCart=(item)=>{
        const flag = cartItems.includes(item)
        if(!flag){
            setCartItems(cartItems.concat(item))
            dispatch(incTotalPrice(item.price.raw))
        }
      
    }
    const removeProductFromCart=(item,totalPrice)=>{
        setCartItems(cartItems.filter(cartItem=> item !== cartItem))
        dispatch(decTotalPrice(totalPrice))
    }

    return (
        <>
        <Navbar/>
        <Login/>
        <Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart}/>
        <Switch>
            <Route exact path="/">
                <Carousel/>
                <Services/>
                <ProductList addProductToCart={addProductToCart} products={products}/>
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
        </Switch>
        <Footer/>
        </>
    )
}

export default Home;