import React from "react";
import './Contact.css'

const Contact =() =>{
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1><i class='bx bxs-contact'></i>Get in Touch</h1>
                <img src=''alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                   <h1>Let's Talk</h1>
                   <p> i'm currently available to talk more about my experiences, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
                   <div className="contact-details">
                    <div className="contact-detail">
                        <p><i class='bx bx-envelope' ></i> enkmun@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <p><i class='bx bx-phone' ></i> +703-380-9035</p>
                        
                    </div>
                    <div className="contact-detail">
                        <p><i class='bx bxs-location-plus' ></i> VA, United States</p>
                        </div>
                </div>
                
                </div>
                <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter you email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className="contact-submit">Submit</button>
            </form>

            </div>
            

        </div>
    )
}

export default Contact