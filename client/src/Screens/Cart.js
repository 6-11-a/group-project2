import React, { Component } from 'react';
import Header from './../components/Header/Header';
import ShopCart from '../components/ShopCart/ShopCart';
import Footer from '../components/Footer/Footer';


export default class Cart extends Component {
    render() {
        return (
            <div>
                <Header />
                <ShopCart />
                <Footer />
            </div>
        )
    }
}
