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

export { setToCart, getStoredData }