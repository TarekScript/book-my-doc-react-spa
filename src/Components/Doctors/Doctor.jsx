import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image, yearsOfExperience, education, speciality, regNumber } = doctor;
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-64" />
            </figure>
            <div className="card-body ">
                <div>
                    <button className='text-[#09982F] btn rounded-xl btn-outline bg-[#09982F1A] btn-sm'>Avilable</button>
                    <button className='btn text-[#176AE5] bg-[#176AE51A] rounded-xl btn-sm ml-4'>{yearsOfExperience}+ Yeras Experience</button>
                </div>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <h3 className='font-medium text-gray-600'>{education}{speciality}</h3>
                <hr className='opacity-75' />
                <h3 className='font-medium text-gray-600'>Reg No. {regNumber}</h3>
                <div className="card-actions flex items-center justify-center">
                    <button className="btn btn-outline rounded-xl px-10 text-[#176AE5]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;