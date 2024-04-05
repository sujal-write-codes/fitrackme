import React from 'react';
import './navforhome.css';
import logoforbase from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const NavForOther = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoforbase} className="Logo" alt="Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/caloriecalculator'>Calorie Calculator</Link>
          </li>
          <li>
            <Link to='/calorietracker'>Calorie Tracker</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavForOther;
