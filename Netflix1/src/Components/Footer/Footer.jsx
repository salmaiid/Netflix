import React from "react";
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>privacy</li>
                <li>Legal notices</li>
                <li>Cookie preferences</li>
                <li>Corporate information</li>
                <li>Contect Us</li>
            </ul>
            <p  className="Copyrigth-text"> 1997-2023 Netflix, Inc.</p>
           
        </div>
    )
}

export default Footer