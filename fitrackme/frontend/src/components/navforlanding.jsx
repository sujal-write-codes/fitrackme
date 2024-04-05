import React from 'react';
import './navforlanding.css';
import logoforbase from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function NavForLanding() { 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoforbase} className="Logo"/>
      </div>
      <div className="navbar-buttons">
        <Link to='signup' className='signup-button'>Sign up</Link>
            <span className='button-gap'></span>
        <Link to='signin' className='signin-button'>Sign in</Link>
      </div>
    </nav>
  );
}
