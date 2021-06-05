import React from "react";
import { Route, Switch } from "react-router";

import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import Container from "../components/container/container";
import Footer from "../components/footer/Footer";
import Details from "../components/products/details/Details"
import Cart from "../components/products/cart/Cart"
import Cover from "../components/products/cart/Cover";

const Home=()=>{
    return (
        <>
        <Navbar/>
        <Cart/>
        {/* <Cover/> */}
        <Switch>
            <Route exact path="/">
                <Carousel/>
                <Container/>
            </Route>
            <Route path="/details/">
                <Details/>
            </Route>
        </Switch>
        <Footer/>
        </>
    )
}

export default Home;