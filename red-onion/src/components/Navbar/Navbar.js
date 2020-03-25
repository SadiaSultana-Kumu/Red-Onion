import React from 'react';
import logo from '../../images/logo2.png';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-md-between justify-content-center flex-wrap">
            <a className="navbar-brand" href=""><img src={logo} alt=""/></a>
       
           <div className="navbar-nav flex-row">
             <a className="nav-item nav-link active" href="">Home<span className="sr-only">(current)</span></a>
             <a className="nav-item nav-link"  href='/home'>Sign Out</a>
            <a className="nav-item nav-link" href="/signup">Sign Up</a>
        </div>
    </nav>
    );
}

export default Navbar;