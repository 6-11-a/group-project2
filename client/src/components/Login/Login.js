import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <h1>Login</h1>
                <form action="">
                    <input type='text' name='username' placeholder='username' />
                    <input type='password' name='password' placeholder='password' />
                    <button>Login</button>
                </form>
                <h1>Sign Up</h1>
                <form action="">
                    <input type='text' name='username' placeholder='username' />
                    <input type='password' name='password' placeholder='password' />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
