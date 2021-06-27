import "./Services.css"
import health_service from "../../../assets/health_service.png"
import statistics_window from "../../../assets/statistics_window.png"
import protection_service from "../../../assets/protection_service.png"
import growth_service from "../../../assets/growth_service.png"
import investment_service from "../../../assets/investment_service.png"

const Services=()=>{
    return(
        <div className="service-container">
            <h4 className="service-header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
            </h4>
            <div className="service-gallery">
                <div className="service-card">
                    <img src={health_service} alt="" className="service-img" />
                    <p className="service-des">Sed sollicitudin non odio ut suscipit</p>
                </div>
                <div className="service-card">
                    <img src={growth_service} alt="" className="service-img" />
                    <p className="service-des">Sed sollicitudin non odio ut suscipit</p>
                </div>
                <div className="service-card">
                    <img src={protection_service} alt="" className="service-img" />
                    <p className="service-des">Sed sollicitudin non odio ut suscipit</p>
                </div>
                <div className="service-card">
                    <img src={investment_service} alt="" className="service-img" />
                    <p className="service-des">Sed sollicitudin non odio ut suscipit</p>
                </div>
            </div>
        </div>
    )
}

export default Services