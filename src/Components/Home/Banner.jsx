import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-gray-200 to-white border-[3px] border-[#FFFFFF] p-12 rounded-lg space-y-4'>
            <h1 className='text-center text-2xl md:text-5xl'>Dependable Care, Backed by Trusted <br /> <span className='md:pt-4 block'>Professionals.</span></h1>
            <p className='text-center text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex flex-col md:flex-row justify-center gap-2 items-center mt-10'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <button className='btn bg-[#176AE5] text-white ml-4 md:text-xl rounded-xl'>Search Now</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-6 justify-center items-center'>
                <img src='https://i.ibb.co.com/3Y4GzNJd/banner-img-1.png' alt="" />
                <img src='https://i.ibb.co/mwDpF5j/doctor-sample.png' alt="" />
            </div>
        </div>
    );
};

export default Banner;