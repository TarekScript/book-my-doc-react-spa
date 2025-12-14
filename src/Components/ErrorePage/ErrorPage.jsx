import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='p-4 md:p-20'>
            <img className='h-96 mx-auto' src="https://i.ibb.co.com/V0L0YnvP/error-Img.jpg" alt="" />
            <h1 className='text-xl md:text-7xl font-bold text-center'>404! </h1>
            <h3 className='text-lg md:text-3xl font-bold text-center mt-2'>oppps! Page Not Pound.</h3>
            <div className='flex  justify-center mt-4'>
                <Link to='/'> <button className='btn rounded-lg text-white bg-[#176AE5]'>Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;