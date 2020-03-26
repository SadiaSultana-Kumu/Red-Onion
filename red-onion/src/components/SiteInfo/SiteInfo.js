import React from 'react';
import './SiteInfo.css';
import icon from '../../images/logo2.png';

const SiteInfo = () => {
    return (
        <div className="siteinfo">
            <div className="icon-img">
                <img src={icon} alt=""/>
            </div>
            <div className="siteinfo-p">
                <p>About Online Food<br/>Read our blog<br/>sign up to deliver<br/>Add your restaurant<br/></p>
            </div>
            <div className="siteinfo-p2">
                    <p>
                        Get Help<br/>
                        Read FAQs<br/>
                        View all cities<br/>
                        restaurants near me<br/>
                    </p>
                </div>
        </div>
    );
};

export default SiteInfo;