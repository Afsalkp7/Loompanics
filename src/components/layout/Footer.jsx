import React from 'react'
import './footer.css'
import logo from '../../assets/logo_with_bg.jpg'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footerMain'>
        <div className="footerTop">
            <div className="footerlogoDiv">
                <img src={logo} alt="logo" />
            </div>
            <div className="dataDiv">
                <div className="address">
                    <ul>
                        <li><CiLocationOn /> PK house,narikkuni,kozhikkode</li>
                        <li><CiPhone /> +91 9876543210</li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li><CiFacebook /></li>
                        <li><FiYoutube /></li>
                        <li><IoLogoInstagram /></li>
                        <li><FaWhatsapp/></li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div className="footerBottom">
            <div className="menuDiv">
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Home</li>
                    <li>Books</li>
                    <li>Membership</li>
                </ul>
            </div>
            <div className="copyDiv">
                <span>Copyright © 2024 • Loompanics.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer