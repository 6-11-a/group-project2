import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import LoginSignUp from './Screens/LoginSignUp';
import './App.css';

class App extends Component {
  state = {
	  products: {}
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginSignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
