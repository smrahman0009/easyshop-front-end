import React from "react";
import Navbar from "../components/navbar/navbar";
import Carousel from "../components/carousel/carousel";
import Container from "../components/container/container";
import Footer from "../components/footer/Footer";

const Home=()=>{
    return (
        <>
        <Navbar/>
        <Carousel/>
        <Container/>
        <Footer/>
        </>
    )
}

export default Home;