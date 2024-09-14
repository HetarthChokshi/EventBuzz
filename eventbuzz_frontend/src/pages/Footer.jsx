import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href=""><i className="fa-brands fa-facebook" /></a>
                    <a href=""><i className="fa-brands fa-instagram" /></a>
                    <a href=""><i className="fa-brands fa-twitter" /></a>
                    <a href=""><i className="fa-brands fa-google-plus" /></a>
                    <a href=""><i className="fa-brands fa-youtube" /></a>
                </div>
                <center>
                <img src="/images/eventbuzz-white.png" className="brand-logo" alt="EventBuzz logo" loading="lazy" />
                </center>
            </div>
            <div className="footerBottom">
                <p>
                    Copyright ©2024; Designed by{" "}
                    <span className="designer">Byte Benders</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;