import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="menubar">
            <nav>
                <button className="menu-toggle"><h6>Breakfast</h6></button>
                <button className="menu-toggle"><h6>Lunch</h6></button>
                <button className="menu-toggle"><h6>Dinner</h6></button>
            </nav>
        </div>
    );
};

export default MenuBar;