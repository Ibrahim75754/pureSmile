import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;