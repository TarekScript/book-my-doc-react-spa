import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';

const Roots = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;