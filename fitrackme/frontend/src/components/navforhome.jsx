import React from 'react';
import './navforhome.css';
import logoforbase from '../assets/Logo.png';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';

const NavForLanding = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

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

      <div className="logoutbutton">
        <button onClick={handleClick} className='lgbtn'>Log Out</button>
      </div>
    </nav>
  );
};

export default NavForLanding;
