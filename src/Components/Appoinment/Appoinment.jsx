import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { getStoredData, removeFromCart } from '../../utility/addToCart';

const Appoinment = () => {
    const [myAppointedDocts, setMyAppointedDocts] = useState([]);
    const notify = () => toast.error('Appoinment Cancled!');

    const allDoctors = useLoaderData();
    useEffect(() => {
        const appointedDoctorsId = getStoredData();
        const appointedDoctorsIdInt = appointedDoctorsId.map(id => parseInt(id));
        const appointedDocts = allDoctors.filter(doctor => appointedDoctorsIdInt.includes(doctor.id));
        setMyAppointedDocts(appointedDocts);
    }, [allDoctors])
    // remove item 
    const removeDoctFromCart = (id) => {
        notify()
        removeFromCart(id);
        setMyAppointedDocts(prev =>
            prev.filter(doctor => doctor.id !== id)
        );

    }

    return (
        <div>
            <ToastContainer />
            {myAppointedDocts.length === 0 ? <div className=' p-8 space-y-8'>
                <h1 className='text-4xl text-center font-bold mb-6'>You Have not Booked any appointment yet</h1>
                <p className='text-gray text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                <div className='flex justify-center'>
                    <Link to='/'><button className=' btn rounded-xl bg-[#176AE5] text-white'>Book An Appoinment</button></Link>
                </div>
            </div> :
                <div>
                    <h1 className='text-3xl font-bold text-center'>My Today's Appointments</h1>
                    <p className='text-center text-gray-600 mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                    <div className='mt-4'>
                        {
                            myAppointedDocts.map(doctor => <div className='bg-white p-8 mb-4 rounded-xl'>
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

                                <button onClick={() => removeDoctFromCart(doctor.id)} className='btn rounded-xl btn-outline text-[#FF0000] w-full '>Cancel Appointment</button>

                            </div>)
                        }
                    </div>
                </div>}
        </div>
    );
};

export default Appoinment;