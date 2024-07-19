import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar"
 import home_bg from "../../assets/home-bg.jpg"
 import mini_portal from "../../assets/mini_portal.png"
const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            <div className="hero">
                <img src={home_bg} alt="" className="bg_img" />
                <div className="hero-caption">
                    <img src={mini_portal} alt="" className="portal-img" />
                 

                </div>

                    
            </div>

        </div>
    )
}
export default Home