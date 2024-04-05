import React from 'react'
import '../stylesheets/Landing.css'
import NavForLanding from '../components/navforlanding';
import person from '../assets/Person.png';
import { FaRunning, FaFire } from "react-icons/fa";
import { FaClipboardList, FaClipboard } from "react-icons/fa6";
import { FaChartPie, FaCalculator, FaUser, FaCheckCircle } from "react-icons/fa";
import girl from '../assets/My project.png';
import group22 from '../assets/Group 22.png';
import { BiMessageRoundedError } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import  FooterforLanding from '../components/footerforlanding';

export default function Landing() {
  return (
      <div className='main'>
        <NavForLanding />
          <div className="contents">
            <div className="content-1">
              <h1 className='h-1'>Track your fitness <br /><span className='journey'>JOURNEY </span>with us</h1>
            </div>
            <div className="content-2">
              <p className='p-1'>We are here to support and enhance your fitness journey by <br />providing personalized calorie calculations, as well as <br />
              assisting you in setting achievable goals and <br /> working towards them effectively.</p>
            </div>

            <div className="imagesform-landing">
              <img src={person} className='pperson'/>
                <div className='circle'></div>
                  <div className="info">
                    <div className="info-wrapper">
                      <div className="infos1">
                        <div className='fcircle'>
                          <FaRunning className="running-icon" />
                        </div>
                        <p className='pforicons'>495 <span className='km'>km</span></p>
                      </div>
                      <div className="infos2">
                        <div className="fcircle">
                          <FaClipboardList className="running-icon" />
                        </div>
                        <p className='pforicons'>Challenge <span className='ys'>Yourself</span></p>
                      </div>
                      <div className="infos3">
                        <div className="fcircle">
                          <FaFire className="running-icon" />
                        </div>
                        <p className='pforicons'>Calorie <span className='tc'>Tracker</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="os-content">
                  <h1 className='os'>Our Services</h1>
                  <p className='osp'>What do we do?</p>
                  <div className="oscontent-wrapper">
                    <div className="oss">
                      <FaChartPie className='iconsforcp'/>
                      <p className='ct'>Calorie Tracking</p>
                      <p className='ctp'>We track your calorie and nutrition so you can be fit.</p>
                    </div>
                    <div className="oss">
                      <FaCalculator className='iconsforcp'/>
                      <p className='cc'>Calorie Calculator</p>
                      <p className='ccp'>Calculate the calorie according <br />to the body.</p>
                    </div>
                    <div className="oss">
                      <FaClipboard className='iconsforcp'/>
                      <p className='sg'>Set Goals</p>
                      <p className='sgp'>We help you to set golas and work for it.</p>
                    </div>
                    <div className="oss">
                      <FaUser className='iconsforcp'/>
                      <p className='up'>User Profile</p>
                      <p className='upp'>User has their own profile <br />for their build-up.</p>
                    </div>
                  </div>
                </div>

                <div className="forfeatures">
                  <div className="wc">
                    <h1 className="h1f">Features</h1>
                    <p className='wju'>Why Join Us?</p>
                    <p className='wjupp'>We are growing day by day by you support and we are discovering 
                      each and <br /> every new feature for your betterment. We are serving 
                      our customers <br />from 2022 and, Since then we are receiving 
                      only good reviews.</p>
                    <div className="check">
                      <div className="fordf">
                      <p className="checkc1"><FaCheckCircle className='fcci'/>Comprehensive Tracking</p>
                      <p className="checkc2"><FaCheckCircle className='fcci'/>Personalized Experience</p>
                      <p className="checkc3"><FaCheckCircle className='fcci'/>Goal Tracking</p>
                      <p className="checkc4"><FaCheckCircle className='fcci'/>User-Friendly Interface</p>
                      <p className="checkc5"><FaCheckCircle className='fcci'/>Affordable Pricing</p>
                    </div>
                      </div>
                  </div>
                </div>
                <div className="picforfeatures">
                  <img src={group22} className='group22'/>
                    <div className='forcc'></div>
                  <img src={girl} className='girli'/>
                </div>
                <div className="forpricing">
                  <h1 className="pp">Pricing Plan</h1>
                  <p className='mpp'>Member Pricing Plan</p>
                  <div className="forpricetable">
                    <div className="forppt">
                      <div className="tom">
                      <p className='bp'>Basic Plan</p>
                      <p className='rupees'>Rs. 0</p>
                      <hr className='line'/>
                        <div className="dm">
                          <p className='a1'><FaCheckCircle className='ci'/>Has access to few services.</p>
                          <p className='a2'><FaCheckCircle className='ci'/>Limited access to workout plans.</p>
                        </div>
                        <button className='bms1'>Buy Membership</button>
                      </div>
                    </div>
                    <div className="forppt">
                      <div className="tom">
                      <p className='bp'>Monthly Plan</p>
                      <p className='rupees'>Rs. 500</p>
                      <hr className='line'/>
                        <div className="dm">
                          <p className='a1'><FaCheckCircle className='ci'/>Has access to all services.</p>
                          <p className='a2'><FaCheckCircle className='ci'/>No any limitation to workout plans.</p>
                          <p className='a3'><FaCheckCircle className='ci'/>Free one week extra.</p>
                        </div>
                        <button className='bms2'>Buy Membership</button>
                      </div>
                    </div>
                    <div className="forppt">
                      <div className="tom">
                      <p className='bp'>Annual Plan</p>
                      <p className='rupees1'>Rs. 1000</p>
                      <hr className='line'/>
                        <div className="dm">
                          <p className='a1'><FaCheckCircle className='ci'/>Has access to all services.</p>
                          <p className='a2'><FaCheckCircle className='ci'/>No any limitation to workout plans.</p>
                          <p className='a3'><FaCheckCircle className='ci'/>Free two week extra.</p>
                          <p className='a4'><FaCheckCircle className='ci'/>Free FITrackME merch.</p>
                        </div>
                        <button className='bms3'>Buy Membership</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fortestimonial">
                  <h1 className='testi'>Testimonial</h1>
                  <p className="testip">"What our member says"</p>
                  <p className="testip1">Our clients consistently show their appreciation for our <br />services,and their feedback brings us great joy.</p>
                  <div className="ft">
                    <div className="ft1">
                      <BiMessageRoundedError className='ft1icon'/>
                      <p className='ft1p'>FitrackMe: A game-changer in fitness tracking! With its user-friendly interface and powerful features, I effortlessly reach my goals. It's like having a personal trainer in my pocket. If you're serious about fitness, FitrackMe is a must-have!"</p>
                      <div className="ratings">
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      </div>
                      <CgProfile className='tprofile'/>
                      <p className='ntest'>Sujal Chaudhary</p>
                    </div>
                    <div className="ft1">
                      <BiMessageRoundedError className='ft1icon'/>
                      <p className='ft1p'>FitrackMe: A game-changer in fitness tracking! With its user-friendly interface and powerful features, I effortlessly reach my goals. It's like having a personal trainer in my pocket. If you're serious about fitness, FitrackMe is a must-have!"</p>
                      <div className="ratings">
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      </div>
                      <CgProfile className='tprofile'/>
                      <p className='ntest'>Sujal Chaudhary</p>
                    </div>
                    <div className="ft1">
                      <BiMessageRoundedError className='ft1icon'/>
                      <p className='ft1p'>FitrackMe: A game-changer in fitness tracking! With its user-friendly interface and powerful features, I effortlessly reach my goals. It's like having a personal trainer in my pocket. If you're serious about fitness, FitrackMe is a must-have!"</p>
                      <div className="ratings">
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      <GoStarFill className='starc'/>
                      </div>
                      <CgProfile className='tprofile'/>
                      <p className='ntest'>Sujal Chaudhary</p>
                    </div>
                  </div>
                </div>
                <FooterforLanding />
          </div>
      </div>
  )
}
