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

const setToCart = (id) => {
    const doctors = getStoredData();
    if (doctors.includes(id)) {
        alert('already added');
        return;
    }
    doctors.push(id);
    const doctorsStr = JSON.stringify(doctors);
    localStorage.setItem('storedDocts', doctorsStr);
}

const removeFromCart = (id) => {
    const storedDoctor = getStoredData();

    const restDoctors = storedDoctor.filter(doctor => doctor != id);
    const restDoctorsStr = JSON.stringify(restDoctors);
    localStorage.setItem('storedDocts', restDoctorsStr);
}

export { setToCart, getStoredData, removeFromCart }