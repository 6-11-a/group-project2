import React from 'react';
import Header from './../components/Header/Header';
import Catalog from '../components/Catalog/Catalog';
import Footer from '../components/Footer/Footer';
import '../components/Catalog/Catalog.css';

const Home = () => (
    <div>
        <Header />
        <Catalog />
        <Footer />
    </div>
);

export default Home;
