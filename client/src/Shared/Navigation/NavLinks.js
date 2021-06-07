import React from 'react';
import { NavLink } from 'react-router-dom';

import { Role } from '../../_helpers/role';
import { authenticationService } from '../../services/authentication-service';
import { history } from '../../_helpers/history';
import './NavLinks.css';

let currentUser = null;

const signout = () => {
  authenticationService.signout();
  history.push('/auth');
  window.location.reload(true);
}

const NavLinks = props => {
  authenticationService.currentUser.subscribe(user => currentUser = user);
  if(currentUser && currentUser._doc.role === Role.Admin) {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/" exact>Admin Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signout}>Sign out</NavLink>
        </li>
      </ul>
    );
  } else if(currentUser && currentUser._doc.role === Role.Reviewer) {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Reviewer</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signout}>Sign out</NavLink>
        </li>
      </ul>
    );
  } else if(currentUser && currentUser._doc.role === Role.Editor) {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Editor</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signout}>Sign out</NavLink>
        </li>
      </ul>
    );
  } else if(currentUser && currentUser._doc.role) {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/downloads">Download</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Account</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signout}>Sign out</NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/downloads">Download</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Sign in</NavLink>
        </li>
      </ul>
    );
  }

};

export default NavLinks;
