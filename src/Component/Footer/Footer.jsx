import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div id="services" className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src=""alt=""/>
                    <p>i am a full stack develooper from USA with 3 years of experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="links">
                    <div className="linkg">Github</div>
                    <div className="linkg">LinkedIn</div>
                    <div className="linkg">Download Resume</div>
                      </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2024 Anna Munkhchuluun.</p>
                <div className="footer-bottom-right"></div>
                <p>Terms of Conditions</p>
                <p>Services</p>
                <p>Privacy Policy</p>

            
            </div>

        </div>
    )
}

export default Footer