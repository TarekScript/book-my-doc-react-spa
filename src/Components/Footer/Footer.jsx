import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='space-y-6 p-6'>
            <div className='flex items-center justify-center'><img className='h-12' src='https://i.ibb.co.com/Cp0v2p3D/logo.png' alt="" /> <a className="btn btn-ghost p-2 ml-4 text-2xl">MyDoc</a></div>
            <ul className=' flex items-center justify-center gap-6'>
                <NavLink to='/'><li className='mr-6 text-lg'>Home</li></NavLink>
                <NavLink to='./booking'><li className='mr-6 text-lg'>My-Bookings</li></NavLink>
                <NavLink to='/blogs'><li className='mr-6 text-lg'>Blogs</li></NavLink>
                <NavLink to='./contact'><li className='mr-6 text-lg'>Contact US</li></NavLink>
            </ul>
            <hr />
            <h3 className="tex-txl text-center">All Right Reserv @DevTool</h3>
        </div>
    );
};

export default Footer;