import React from 'react';
import Doctors from '../Doctors/Doctors';
import Stats from '../Stats/Stats';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Stats></Stats>
        </div>
    );
};

export default Home;