import React from 'react'
import '../components/footerforotherpage.css'
import logoforfoot from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa'

export default function Footerforotherpage() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="brand-info">
          <Link to='/home'>
              <img src={logoforfoot} className="brand-logo"/>
            </Link>
            <p className="brand-name">FITrackME</p>
            <p className="brand-slogan">The accurate fitness tarcker so far!</p>
          </div>
            <div className="footer-s-icons">
              <a href="#"><FaFacebook size={24} className='f-icon'/></a>
              <a href="#"><FaInstagram size={24} className='f-icon'/></a>
              <a href="#"><FaTwitter size={24} className='f-icon'/></a>
            </div>
        </div>

        <div className="footer-content-center">
            <ul>
              <h1 className='st1'>Menu</h1>
              <Link to='/home'>
                <li className='hh'>Home</li> 
              </Link>
              <Link to='/home'>
                <li className='hh'>Services</li> 
              </Link>
            <Link to='/service'>
              <li className='hh'>Workouts</li> 
            </Link>
            <Link to='/home'>
              <li className='hh'>About Us</li> 
            </Link>
            <Link to='/home'>
              <li className='hh'>Privacy Policy</li> 
            </Link>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2 className='forpppp'>Pricing</h2>
            <ul>
                <li className='hh'>Basic Plan</li>
                <li className='hh'>Monthly Plan</li>
                <li className='hh'>Annual Plan</li>
            </ul>
        </div>

      </div>
      <hr/>
          <p className='footer-cr-msg'><FaRegCopyright className='footer-icon'/> {new Date().getFullYear()} FITrackME | All Rights Reserved.</p>
    </div>
  )
}
