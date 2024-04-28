import React from "react";
import './About.css'

const About = () =>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1><i class='bx bx-file-find' ></i>About Me</h1>
                <img src=""alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src=""alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        Highly motivated and skilled Full Stack Developer with over 3 years of experience.
                        </p>
                        <p>Passionate about creating efficient, scalable, and maintainable software solutions.
                            <br></br> Seeking to leverage expertise in full stack development to contribute effectively 
                             <br></br>to innovative projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>MERN</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{width:"70%"}}/></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                    <hr/>
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                    
                    
            </div>

        </div>

    )
}

export default About