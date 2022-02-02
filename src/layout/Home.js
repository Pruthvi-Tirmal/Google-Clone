import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header';
import PrimarySearch from '../components/PrimarySearch';
const Home = ({ darkTheme }) => {
    return (
        <div>
            <Header darkTheme={darkTheme} />
            <PrimarySearch darkTheme={darkTheme} />
            <Footer />
        </div>
    )
};

export default Home;
