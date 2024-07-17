import React from "react";
import './Navbar.css'
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navbar-left">
                <image src="{Logo}" alt ="" />
            </div>
            <div className="navbar-right"></div>

        </div>
    )
}
export default Navbar