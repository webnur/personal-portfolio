import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navber/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;