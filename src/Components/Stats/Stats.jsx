import React from 'react';
import CountUp from 'react-countup';
import successDoctor from "../../assets/success-doctor.png"
import reviewImg from "../../assets/success-review.png"
import paitentsImg from "../../assets/success-patients.png"
import stuffsImg from "../../assets/success-staffs.png"

const Stats = () => {
    return (
        <div className='p-4 md:p-12 '>
            <h1 className='text-3xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className='text-center text-gray-400 mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='bg-white rounded-xl p-6 space-y-4'>
                    <img src={successDoctor} alt="" />
                    <h1 className='text-4xl font-bold duration={2.75}'><CountUp start={0}
                        end={199}
                        duration={2}
                        separator=","
                        enableScrollSpy
                    />+</h1>
                    <h3 className='font-medium text-gray-600'>Total Doctors</h3>
                </div>
                <div className='bg-white rounded-xl p-6 space-y-4'>
                    <img src={reviewImg} alt="" />
                    <h1 className='text-4xl font-bold duration={2.75}'><CountUp start={0}
                        end={467}
                        duration={2.5}
                        separator=","
                        enableScrollSpy
                    />+</h1>
                    <h3 className='font-medium text-gray-600'>Total Reviews</h3>
                </div>
                <div className='bg-white rounded-xl p-6 space-y-4'>
                    <img src={paitentsImg} alt="" />
                    <h1 className='text-4xl font-bold duration={2.75}'><CountUp start={0}
                        end={1900}
                        duration={3}
                        separator=","
                        enableScrollSpy
                    />+</h1>
                    <h3 className='font-medium text-gray-600'>Total Patients</h3>
                </div>
                <div className='bg-white rounded-xl p-6 space-y-4'>
                    <img src={stuffsImg} alt="" />
                    <h1 className='text-4xl font-bold duration={2.75}'><CountUp start={0}
                        end={300}
                        duration={2}
                        separator=","
                        enableScrollSpy
                    />+</h1>
                    <h3 className='font-medium text-gray-600'>Total  Stuffs</h3>
                </div>
            </div>
        </div>
    );
};

export default Stats;