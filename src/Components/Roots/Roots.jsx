import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';

const Roots = () => {
    return (
        <div className='bg-[#EFEFEF]'>
            <div className='max-w-7xl mx-auto bg-[#EFEFEF]'>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;