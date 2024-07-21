import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar"
import home_bg from "../../assets/home-bg.jpg"
import mini_portal from "../../assets/mini-portal.png"
import watch from "../../assets/watch.png"
import joker from "../../assets/joker1.jpg"
import detail_modal from "../../assets/detail-modal.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../Components/TitileCards/TitleCards";
const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            
            
            <div className="hero">
                <img src={home_bg} alt="" className="bg-img" />
                <div className="hero-caption">
                <div className="hero-btns">
                        <button className="btn"> <img src={play_icon} alt="" />play</button>
                        <button className="btn dark-btn"> <img src={info_icon} alt="" />more info</button>
                    </div>

                    <h1>Unlimited movies, TV shows, and more...</h1>
                    <img src={mini_portal} alt="" className="caption-img" />
                    <img src={watch} alt="" className="caption-img" />
                    <img src={joker} alt="" className="caption-img" />
                    <img src={detail_modal} alt="" className="caption-img" />
                    <h1>Unlimited movies, TV shows, and more...</h1>
                  
                    <TitleCards/>
                 

                </div>

                    
            </div>
            <div className="more-cards">
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
            </div>

        </div>
    )
}
export default Home