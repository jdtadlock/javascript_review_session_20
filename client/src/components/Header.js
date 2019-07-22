import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h3>Shop App</h3>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/form">Create Shop</NavLink>
    </header>
  )
}

export default Header;