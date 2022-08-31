import React from 'react'
import "./footer.css";
import logo from '../../assets/hippo02.PNG';
import './footer.css';

const Footer = () => (
  <div className="Hippo1_footer section__padding">
    <div className="Hippo1_footer-heading">
      <h1 className="gradient__text">Do you want to Booking Hotel place. </h1>
    </div>

    <div className="Hippo1_footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="Hippo1_footer-links">
      <div className="Hippo1_footer-links_logo">
        <img src={logo} alt="logo" />
        <p>20, Keerthi Sri Rajasinghe Mawatha Kandy ,20000 <br /> All Rights Reserved</p>
      </div>
      <div className="Hippo1_footer-links_div">
        <h4>Links</h4>
        <p>Who We Are</p>
        <p>Social Media</p>
        <p>News</p>
        <p>Contact</p>
      </div>
      <div className="Hippo1_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="Hippo1_footer-links_div">
        <h4>Get in touch</h4>
        <p>20, Keerthi Sri Rajasinghe Mawatha Kandy ,20000</p>
        <p>0812 080 800</p>
        <p>hotelshippo.com</p>
      </div>
    </div>

    <div className="Hippo1_footer-copyright">
      <p>@2022 HotelHippo.com. @All rights reserved.</p>
    </div>
  </div>
);

export default Footer;





