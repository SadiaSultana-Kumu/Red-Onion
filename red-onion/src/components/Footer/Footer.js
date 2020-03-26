import React from 'react';
import './Footer.css'
import fimage1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import fimage2 from '../../images/Image/chef-cook-food-33614.png';
import fimage3 from '../../images/Image/architecture-building-city-2047397.png';

const Footer = () => {
    return (
        <div>
            <div className="choose">
               <h1>Why you choose us</h1>
               <p>Barton waited twenty always repair in within we do. An delighted offending<br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="footer-img">
               <img src={fimage1} alt=""/>
               <img src={fimage2} alt=""/>
               <img src={fimage3} alt=""/>
            </div>
        </div>
    );
};

export default Footer;