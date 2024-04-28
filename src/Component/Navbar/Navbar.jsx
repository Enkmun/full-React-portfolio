import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [menu,setMenu]= useState("home");
  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu==="home"}

            </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"}
                
            </li>
             <li><AnchorLink className='anchor-link' offset={50} href='#footer'><p  onClick={()=>setMenu("footer")}>Services</p></AnchorLink>{menu==="footer"}
                
            </li>
            <li><AnchorLink className='anchor-link'  offset={50} href='#hero'><p onClick={()=>setMenu("hero")}>Portfolio</p></AnchorLink>{menu==="hero"}
                
            </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p  onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"}
                
            </li>
        </ul>
        <div className="nav-connect">Connect</div>

    </div>
  )
}
export default Navbar