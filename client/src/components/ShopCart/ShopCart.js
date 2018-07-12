import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import './ShopCart.css'

export default class ShopCart extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }
    openCart = () => {
        this.setState({
            open: !this.state.open
        })
    };
    render() {
        return (
            <div className="shopCart-container"> 
                <ul className="cart-list">
                    <li className="cart-item">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71Iq0bRxISL.jpg" alt=""/>
                        <div className="cart-item-info">
                            <h3 className="cart-item-name">Cleaner</h3>
                            <div className="cart-item-value">
                                <span className="cart-item-price">$19.99</span>
                                <span className="cart-item-qty">Qty:
                                    <select name="" id="" className="cart-item-qty-select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <a href="#" className="cart-item-delete">x</a>
                    </li>
                </ul>
                <div className="cart-total">
                    <h3>Total:</h3> 
                    <h3>$19.99</h3>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        )
    }
}
