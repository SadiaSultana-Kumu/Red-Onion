import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="menubar">
            <nav>
                <a href="/breakfast" className="menu-toggle"><strong>Breakfast</strong></a>
                <a href="/lunch" className="menu-toggle"><strong>Lunch</strong></a>
                <a href="/dinner" className="menu-toggle"><strong>Dinner</strong></a>
            </nav>
        </div>
    );
};

export default MenuBar;