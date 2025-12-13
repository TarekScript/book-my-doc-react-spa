import React from 'react';
import { useLoaderData } from 'react-router';
import { getStoredData } from '../../utility/addToCart';

const Appoinment = () => {
    const appointedDoctorsId = getStoredData();
    const appointedDoctorsIdInt = appointedDoctorsId.map(id => parseInt(id));
    const allDoctors = useLoaderData();
    const appointedDocts = allDoctors.filter(doctor => appointedDoctorsIdInt.includes(doctor.id))

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>My Today's Appointments</h1>
            <p className='text-center text-gray-600 mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div>
                {
                    appointedDocts.map(doctor => <div className='bg-white p-8 mb-4 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-xl mb-2 font-bold'>{doctor.name}</h1>
                                <h3 className='text-gray-400 font-medium'>{doctor.education},{doctor.speciality}</h3>
                            </div>
                            <div className='text-gray-600 font-medium'>
                                <h3>Appoinment Fee: {doctor.fees} + Vat</h3>
                            </div>
                        </div>
                        <hr className='border-t border-dashed border-gray-500 opacity-50 my-4' />
                        <button className='btn rounded-xl btn-outline text-[#FF0000] w-full '>Cancel Appointment</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Appoinment;