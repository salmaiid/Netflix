import React from "react";
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import search from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import notifications from '../../assets/notifications_icon.svg'
import chevron from '../../assets/chevron-right.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <img src={netflix_logo} alt ="" />
                <ul>
                    <li>Home</li>
                    <li>TVshows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>      
                    <li>My List</li>
                    <li>Browse by Langueges</li>
                   
                </ul>
             
            </div>
            <div className="navbar-right"></div>
            <img src={search} alt=""className="icon" />
            <p>Children</p>
            <div className="navbar-profile"></div>
            <img src={profile_img} alt=""className="profile" />
            <img src={notifications} alt=""className="icons" />
            <img src={chevron} alt=""className="chevron" />
            <div className="dropdown">
                <p>Sign Out of Netflix</p>
            </div>

            


        </div>
    )
}
export default Navbar