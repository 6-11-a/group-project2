import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import './Header.css';



export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="logo">
                    <h1><a href="/"><span>E</span>comm</a></h1>
                </div>
                <div className="screen-links">
                    <a href="/cart"> <Icon size={30} className="cart-icon" icon={shoppingCart} /></a>
                    <a href="/login">Login/Sign up</a>
                </div>
            </div> 
        )
    }
}
