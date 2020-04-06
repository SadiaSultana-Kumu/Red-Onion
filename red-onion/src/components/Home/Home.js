import React from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import SiteInfo from '../SiteInfo/SiteInfo';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';


const Home = () => {

    return (
        <div>
            <Search></Search>
            <Menu></Menu>
            <Footer></Footer>
            <SiteInfo></SiteInfo>
        </div>
    );
};

export default Home; 