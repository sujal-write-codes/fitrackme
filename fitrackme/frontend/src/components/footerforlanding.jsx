import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa'
import logo from '../assets/Logo.png'
import '../components/footerforlanding.css'

export default function Footerforlanding() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand-info">
          <img src={logo} className="brand-logo" />
          <p className="brand-name">FITrackME</p>
          <p className="brand-slogan">The accurate fitness tarcker so far!</p>
        </div>
        <div className='footer-copyright'>
          <p className='footer-cr-msg'><FaRegCopyright className='footer-icon'/> {new Date().getFullYear()} FITrackME | All Rights Reserved.</p>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebook size={24} className='f-icon'/></a>
          <a href="#"><FaInstagram size={24} className='f-icon'/></a>
          <a href="#"><FaTwitter size={24} className='f-icon'/></a>
        </div>
      </div>
    </footer>
  )
}
