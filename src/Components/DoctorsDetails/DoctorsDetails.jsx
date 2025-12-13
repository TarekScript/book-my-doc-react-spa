import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setToCart } from '../../utility/addToCart';

const DoctorsDetails = () => {
    const doctorsData = useLoaderData();
    const { id } = useParams();
    const selectedDoctor = doctorsData.find(doc => doc.id == id);
    const handleAppointment = () => {
        setToCart(id);
    }
    return (
        <div className='mt-8 '>
            <div className='bg-white p-8 space-y-4 rounded-xl'>
                <h1 className='font-bold text-center text-3xl'>Doctor’s Profile Details</h1>
                <p className='text-gray text-center '>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='flex flex-col md:flex-row items-center  gap-12 p-6 bg-white rounded-xl mt-8'>
                <div>
                    <img src={selectedDoctor.image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>{selectedDoctor.name}</h1>
                    <h3 className='text-gray-500'>{selectedDoctor.education}</h3>
                    <h3 className='text-gray-500'>{selectedDoctor.speciality}</h3>
                    <h3 className='text-gray-500 mt-4'>Working At: </h3>
                    <h2 className='font-medium mb-4'>{selectedDoctor.worksPlace}</h2>
                    <hr className='border-t border-dashed border-gray-500 opacity-50' />
                    <h3 className='text-gray-500 my-2'>Reg No. {selectedDoctor.regNumber}</h3>
                    <hr className='border-t border-dashed border-gray-500 opacity-50' />
                    <div className='flex gap-4 my-4 items-center'>
                        <h3>Availibality</h3>
                        {
                            selectedDoctor.availableDays.map(day => <button className='btn bg-[#FFA00033] btn-sm rounded-lg text-[#FFA000]'>{day}</button>)
                        }
                    </div>
                    <h3><span className='font-bold mr-2'>Consultation Fee:</span>     <span className='text-[#176AE5]'> Taka: {selectedDoctor.fees} <span className='text-gray-700'>(incl. Vat)</span> Per consultation.</span></h3>
                </div>
            </div>
            <div className='rounded-lg p-8 bg-white mt-8'>
                <h1 className='text-2xl font-bold text-center'>Book an Appointment</h1>

                <div className='flex justify-between mt-2'>
                    <h1 className='text-lg font-bold'>Avilability</h1>
                    <button className="btn bg-[#09982F33] rounded-lg text-[#09982F] btn-sm">Available</button>
                </div>
                <button className="btn bg-[#FFA0001A] text-[#FFA000] btn-sm rounded-xl flex mx-auto">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                <button onClick={handleAppointment} className="btn text-white font-bold flex mx-auto bg-[#176AE5] rounded-xl w-3/4 mt-4">Book Appointment Now</button>
            </div>
        </div>
    );
};

export default DoctorsDetails;