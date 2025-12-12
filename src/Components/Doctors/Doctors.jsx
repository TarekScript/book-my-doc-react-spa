import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [togo, setTogo] = useState(true);
    useEffect(() => {
        fetch('doctorsData.json')
            .then(res => res.json())
            .then(data => sliceData(data))
    }, []);
    const sliceData = (data) => {
        setAllDoctors(data);
        const sliecdDoctors = data.slice(0, 6);
        setDoctors(sliecdDoctors)
    }
    const handleViewAll = () => {
        setTogo(false)
        setDoctors(allDoctors);
    }
    return (
        <div className='mt-6'>
            <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
            <p className='text-center text-gray-500 mt-4 w-3/4 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            {/* doctor card  */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-6'>
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
            <div onClick={handleViewAll} className={`${togo ? "block" : "hidden"} flex  justify-center`}>
                <button className='btn bg-[#176AE5] text-white rounded-xl'>View All Doctors</button>
            </div>
        </div>
    );
};

export default Doctors;