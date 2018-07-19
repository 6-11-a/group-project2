import React, { Component } from 'react';
import axios from 'axios';
import './Catalog.css';
import { Icon } from 'react-icons-kit';
import { cartPlus } from 'react-icons-kit/fa/cartPlus';

export default class Catalog extends Component {
    state = {
        products: []
    };
    componentDidMount() {
        axios.get('/products').then((result) => {
            this.setState({ products: result.data }, () => {
                console.log(this.state);
            })
        })
    };
    addToCart(item) {
        if(!window.localStorage.cart) {
            item.qty = 1;
            item.total = item.qty * item.price;
            let cart = JSON.stringify({
                items: [item]
            });

            window.localStorage.setItem('cart', cart)
            alert('Item added to cart!')
        } else {
            let currentCart = JSON.parse(window.localStorage.getItem('cart'));
            let matchingItems = currentCart.items.filter((i) => i.name === item.name);
            if(matchingItems.length < 1) {
                item.qty = 1;
                item.total = item.qty * item.price;
                currentCart.items.push(item)
                window.localStorage.setItem('cart', JSON.stringify(currentCart))
                alert('Item added to cart!')
            } else {
                matchingItems[0].qty = (matchingItems[0].qty + 1)
                matchingItems[0].total = (matchingItems[0].price * matchingItems[0].qty);
                let nonMatchingItems = currentCart.items.filter((i) => i.name !== item.name);
                nonMatchingItems.push(matchingItems[0])
                window.localStorage.setItem('cart', JSON.stringify({
                    items: nonMatchingItems
                }))
                console.log(JSON.parse(window.localStorage.getItem('cart')));
            }
            
        }
        
    };
    render() {
        return (
            <div className="catalog-container">
                {this.state.products.map((product, index) => 
                        <div key={index} className="product-container">
                            <div className="product-img">
                            <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <h5>${product.price}</h5>
                                <button onClick={() => this.addToCart(product)}><Icon size={24} icon={cartPlus} /></button>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}

// {(!this.state.products) ? null : this.state.products.map((product, index) => (
//     <div key={index} className="product-container">
//         <div className="product-img">
//         <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-info">
//             <h4>{product.name}</h4>
//             <h5>{product.price}</h5>
//             <button onClick={this.handleAddToCart}><Icon size={24} icon={cartPlus} /></button>
//         </div>
//     </div>
// ))}