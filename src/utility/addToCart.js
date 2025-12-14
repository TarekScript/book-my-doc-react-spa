import { ToastContainer, toast } from 'react-toastify';
const notify = () => toast.error('Appointment already scheduled for today!');
const notify2 = () => toast.success('Appointment scheduled successfully!');
const getStoredData = () => {
    const apointedDoctStr = localStorage.getItem('storedDocts');
    if (apointedDoctStr) {
        const apointedDoct = JSON.parse(apointedDoctStr);
        return apointedDoct;
    }
    else {
        return [];
    }
}

const setToCart = (id, navigate) => {
    const doctors = getStoredData();
    if (doctors.includes(id)) {
        notify();
        return;
    }
    doctors.push(id);
    const doctorsStr = JSON.stringify(doctors);
    localStorage.setItem('storedDocts', doctorsStr);
    notify2();
    navigate('/booking')

}

const removeFromCart = (id) => {
    const storedDoctor = getStoredData();

    const restDoctors = storedDoctor.filter(doctor => doctor != id);
    const restDoctorsStr = JSON.stringify(restDoctors);
    localStorage.setItem('storedDocts', restDoctorsStr);

}

export { setToCart, getStoredData, removeFromCart }