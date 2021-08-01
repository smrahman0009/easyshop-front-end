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
            item.cart_quantity = 1
            setCartItems(cartItems.concat(item))
            dispatch(incTotalPrice(item.price.raw))
            // console.log(item)
        }
      
    }
    const removeProductFromCart=(item,totalPrice)=>{
        if(totalPrice){
            dispatch(decTotalPrice(totalPrice))
        }else{
            const tempItem  = cartItems.filter(product=>product==item)
            // console.log(tempItem)
            dispatch(decTotalPrice(tempItem[0].price.raw*tempItem[0].cart_quantity))
        }
        setCartItems(cartItems.filter(cartItem=> item !== cartItem))
    }

    const isAddedToCart=(item)=>{
        return cartItems.includes(item)
    }

    const incCartItemQty=(item)=>{
        setCartItems(
                cartItems.filter(
                    cartItem=>{
                        if(cartItem == item){
                            cartItem.cart_quantity += 1
                        }
                        return cartItem
                    }
                )
            )
        // const itemIndex = cartItems.indexOf(item)
        // item.cart_quantity += 1
        // cartItems[itemIndex] = item
    }

    const decCartItemQty=(item)=>{
        setCartItems(
            cartItems.filter(
                cartItem=>{
                    if(cartItem == item){
                        cartItem.cart_quantity -= 1
                    }
                    return cartItem
                }
            )
        )
    }

    return (
        <>
        <Navbar/>
        <Login/>
        <Cart 
            cartItems={cartItems}
            removeProductFromCart={removeProductFromCart}
            incCartItemQty={incCartItemQty}
            decCartItemQty={decCartItemQty}
        />
        <Switch>
            <Route exact path="/">
                <Carousel/>
                <Services/>
                <ProductList 
                    addProductToCart={addProductToCart}
                    products={products} 
                    isAddedToCart={isAddedToCart} 
                    removeProductFromCart={removeProductFromCart}
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
        </Switch>
        <Footer/>
        </>
    )
}

export default Home;