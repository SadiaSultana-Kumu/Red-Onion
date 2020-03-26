import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';
import Lunch from '../Lunch/Lunch';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <MenuBar></MenuBar>
            <Menu></Menu>
        </div>
    );
};

export default Home;