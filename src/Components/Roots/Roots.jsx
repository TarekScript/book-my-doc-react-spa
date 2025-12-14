import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';

const Roots = () => {
    return (
        <div className='bg-[#EFEFEF]'>
            <div className='min-h-screen flex flex-col bg-[#EFEFEF'>
                <NavBar></NavBar>
                <div className='flex-grow max-w-7xl mx-auto w-full'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;