import React from 'react';
import ClientsLogo from '../ClientsLogo/ClientsLogo';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';
import Works from '../Works/Works';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Header/>
            <ClientsLogo/>
            <Services/>
            <Works/>
            <Testmonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;