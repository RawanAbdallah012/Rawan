import React from 'react';
import { MdClose } from 'react-icons/md';
import CircleImg from './images/words.png';
import UserImg from './images/user.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './css/sidenav.css';
import { Link } from 'react-router-dom';
const SideNav = () => {
  return (
      <div className="col-lg-3 col-md-3 col-12">
        <nav>
        <div className='nav-content'>
           <div className="upper-content">
            <div className='header'>
                    <h1> Rawan </h1>

                    <button> 
                    <MdClose /> 
                    </button>
                </div>

                <div className='logo'>
                    <img src={CircleImg} alt="" />
                    <img src={UserImg} alt="Rawan" />
                </div>
                <h2> <Link to="mailto:rawanabdalla653@gmail.com"> rawanabdalla653@gmail.com </Link> </h2>
                <h2> <Link to="tel:01097856136"> 01097856136 </Link> </h2>
                <h2> <Link to="Cairo , Egypt"> Cairo , Egypt </Link> </h2>
                
                <h4> &copy; 2025 Rawan. All rights reserved. </h4>

                <div className='social-links'>
                    <a href="https://www.facebook.com/Rawan" target="_blank" rel="noopener noreferrer"> <FaFacebook /> </a>
                    <a href="https://www.twitter.com/Rawan" target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a>
                    <a href="https://www.instagram.com/Rawan" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
                    <a href="https://www.linkedin.com/in/rawan-abdallah96" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
                </div>
           </div>

           <div className='lower-content'>  
            <Link to="mailto:rawanabdalla653@gmail.com"> <MdEmail /> Contact With Me </Link>
           </div>
        </div>
    </nav>
      </div>
  )
}

export default SideNav;