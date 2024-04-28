import React from "react";
import './Hero.css'
import profile from '../../assets/profile.jpg'
const Hero = () =>{
    return (
        <div id="portfolio" className="hero">
            <img src={profile}alt=""/>
            <h1>
                <span>I'm Anna Munkhchuluun,</span> Full stack developer in USA.
            </h1>
            <p>
                I am full stack developer from Virginia
            </p>
          <div className="hero-action">
            <div className="hero-connect">Connect</div>
            <div className="hero-resume">Resume</div>

          </div>
            


        </div>
    )
}

export default Hero