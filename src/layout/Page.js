import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Routes from '../components/Routes';

const Page = ({ setDarkTheme, darkTheme }) => {
    return (<div>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
    </div>);
};

export default Page;
