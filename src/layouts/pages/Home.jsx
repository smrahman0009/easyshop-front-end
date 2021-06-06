import React from "react";
import { Route, Switch } from "react-router";

import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import Container from "../components/container/container";
import Footer from "../components/footer/Footer";
import Details from "../components/products/details/Details"
import Cart from "../components/products/cart/Cart"
import Login from "../components/login/Login";
import Create from "../components/user/create/Create"
import SignUp from "../components/user/signup/SignUp"
const Home=()=>{
    return (
        <>
        <Navbar/>
        <Login/>
        <Cart/>
        <Switch>
            <Route exact path="/">
                <Carousel/>
                <Container/>
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