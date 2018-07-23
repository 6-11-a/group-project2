import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={(e) => this.login(e)}>
                    <input type='email' name='userEmail' placeholder='email@email.com' onChange={e => this.change(e)} />
                    <input type='password' name='userPassword' placeholder='password' onChange={e => this.change(e)} />
                    <button>Login</button>
                </form>
                <h1>Sign Up</h1>
                <form onSubmit={(e) => this.signup(e)}>
                    <input type='email' name='userEmail' placeholder='email@email.com' onChange={e => this.change(e)} />
                    <input type='password' name='userPassword' placeholder='password' onChange={e => this.change(e)} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
    login(e) {
        e.preventDefault();
        axios.post('/users/login', this.state).then((res) => {
            console.log(res);
            localStorage.setItem('auth_token', res.data.token);
            alert('success')
            window.location.href = '/';
        }).catch((err) => {
            console.log('error')
        })
      }
    signup(e) {
        e.preventDefault();
        axios.post('/users/signup', this.state).then((res) => {
            localStorage.setItem('auth_token', res.data.token);
            alert('success')
        }).catch((err) => {
            console.log('error')
        })
        console.log(this.state);
    }
}
