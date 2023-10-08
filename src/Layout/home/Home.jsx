import React from 'react';
import Banner from '../banneer/Banner';
import AllServices from '../allServices/AllServices';
import DetailsServices from '../services/DetailsServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllServices></AllServices>
            <DetailsServices></DetailsServices>
            <h1>this is home</h1>
            
        </div>
    );
};

export default Home;