import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connectStore } from '../store';

class Header extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.setAuthState(false);
  }

  render() {
    return (
      <header>
        <h3>Shop App</h3>
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          {this.props.logged_in ? (
            <Fragment>
              <NavLink to="/form">Create Shop</NavLink>
              <button onClick={this.logOut}>Logout</button>
            </Fragment>
          ) : ''}
          {!this.props.logged_in ? <NavLink to="/user">Login/Register</NavLink> : ''}
        </nav>
      </header>
    )
  }
}

export default connectStore(Header);