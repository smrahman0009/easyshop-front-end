import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css"
import mobile_crl_1 from "../../../assets/mobile_crl_1.jpeg"
import mobile_crl_2 from "../../../assets/mobile_crl_2.jpg"
import mobile_crl_3 from "../../../assets/mobile_crl_3.jpg"

const Carousel=()=>{
    return (

    <div id="header-carousel" className="carousel slide carousel-fade container-xxl" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
                <img src={mobile_crl_1} className="d-block w-100 carousel-image" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={mobile_crl_2} className="d-block w-100 carousel-image" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={mobile_crl_3} className="d-block w-100 carousel-image" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}


export default Carousel;

