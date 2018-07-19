import React, { Component } from 'react';
import './ShopCart.css'

export default class ShopCart extends Component {
    state = {
        cartItems: []
    };
    componentDidMount() {
        let currentCart = JSON.parse(window.localStorage.getItem('cart'))
        if(currentCart) {
            let total = 0;
            for(let i = 0; i < currentCart.items.length; i++) {
                total += (currentCart.items[i].price * currentCart.items[i].qty)
                if((currentCart.items.length - 1) === i) {
                    this.setState({
                        cartItems: currentCart.items,
                        grandTotal: total
                    })
                } else {
                    continue;
                }
            }    
        }   
    }
    deleteItem(item) {
        let newCart = {
            items: this.state.cartItems.filter((i) => i.name !== item.name)
        }
        
        if(newCart.items.length < 1) {
            localStorage.removeItem('cart')
        } else {
            window.localStorage.setItem('cart', JSON.stringify(newCart))
        }
        console.log(window.localStorage.cart);
        window.location.href = "/cart"
    }
    updateQty(e, itemName) {
        let currentCart = JSON.parse(window.localStorage.getItem('cart'))
        for(let i = 0; i < currentCart.items.length; i++) {
            if(currentCart.items[i].name === itemName) {
                currentCart.items[i].qty = parseInt(e.target.value);
                window.localStorage.setItem('cart', JSON.stringify(currentCart))
                window.location.href = "/cart"
            } else {
                continue
            }
        }
    }
    render() {
        return (
            <div className="shopCart-container"> 
                <ul className="cart-list">
                {this.state.cartItems.map((cartItem, index) => 
                    <li key={index} className="cart-item">
                        <img src={cartItem.image} alt={cartItem.name}/>
                        <div className="cart-item-info">
                            <h3 className="cart-item-name">{cartItem.name}</h3>
                            <div className="cart-item-value">
                                <span className="cart-item-price">${(cartItem.total * cartItem.qty)}</span>
                                <span className="cart-item-qty">Qty:
                                    <select ref="qtySelect" onChange={(e) => this.updateQty(e, cartItem.name)} className="cart-item-qty-select">
                                        <option value={cartItem.qty}>{cartItem.qty}</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <a href="#" className="cart-item-delete" onClick={() => this.deleteItem(cartItem)}>x</a>
                    </li>
                    )}
                </ul>
                <div className="cart-total">
                    <h3>Total:</h3> 
                    <h3>${this.state.grandTotal}</h3>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        )
    }
}
