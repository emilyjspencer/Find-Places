import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLinks.css';

const NavigationLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>All users</NavLink>
    </li>
    <li>
      <NavLink to="/1/listings">My Listings</NavLink>
    </li>
    <li>
      <NavLink to="/listings/new">Add Listing</NavLink>
    </li>
    <li>
      <NavLink to="/signup">Sign Up/Log In</NavLink>
    </li>
  </ul>

};


export default NavigationLinks;