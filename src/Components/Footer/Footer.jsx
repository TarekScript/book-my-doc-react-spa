import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='space-y-6 p-6'>
            <div className='flex items-center justify-center'><img className='h-12' src='https://i.ibb.co.com/Cp0v2p3D/logo.png' alt="" /> <a className="btn btn-ghost p-2 ml-4 text-2xl">MyDoc</a></div>

            <hr className='border-t border-dashed border-gray-500 opacity-50 my-4' />
            <h3 className="tex-txl text-center">All Right Reserv @DevTool</h3>
        </div>
    );
};

export default Footer;