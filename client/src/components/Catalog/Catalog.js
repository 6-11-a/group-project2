import React, { Component } from 'react';
import axios from 'axios';
import './Catalog.css';
import { Icon } from 'react-icons-kit';
import { cartPlus } from 'react-icons-kit/fa/cartPlus';

export default class Catalog extends Component {
    state = {};
    componentDidMount() {
        axios.get('/products').then((result) => {
            this.setState({ products: result.data }, () => {
                console.log(this.state);
            })
        }) 
    }
    render() {
        return (
            <div className="catalog-container">
                {(!this.state.products) ? null : this.state.products.map((product, index) => (
                        <div className="product-container">
                            <div className="product-img">
                            <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <h5>{product.price}</h5>
                                <button><Icon size={24} icon={cartPlus} /></button>
                            </div>
                        </div>
                ))}
            </div>
        )
    }
}
