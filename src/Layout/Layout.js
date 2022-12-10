import React from 'react';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navber/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Layout;