// AboutUs.js

import React from 'react';
import './AboutPage.css';
import { NavBar } from '../components/NavBar';

// Individual team member card component
function TeamMemberCard({ name, role, description, email, img }) {
  return (
    <div className="column">
      <div className="card">
        <img className="person-avi" src={img} alt={name} />
        <div className="container">
          <h2>{name}</h2>
          <p className="title">{role}</p>
          <p>{description}</p>
          <p>{email}</p>
          <button className="button">Contact</button>
        </div>
      </div>
    </div>
  );
}

// Main About component
export function AboutPage() {
  return (
   <> <NavBar/>
    <div className="about-section">
      <h1>About Us</h1>
      <p> At Frozen Lakes Incorporated, we thrive at the intersection of innovation and reliability. As a leading technology company, we specialize in creating cutting-edge solutions that empower businesses to navigate the digital landscape with confidence and efficiency. With a team of dedicated professionals who are passionate about harnessing the power of technology to drive positive change, we are committed to delivering exceptional results that exceed expectations. From software development to cybersecurity, cloud computing to artificial intelligence, we leverage our expertise to provide tailored solutions that propel our clients towards success. At Frozen Lakes, we embrace challenges as opportunities for growth, and we are proud to be your trusted partner on the journey towards technological excellence.</p>
      <p></p>
      <div>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      </div>
      <div className="row">
        <TeamMemberCard className='image'
          name="Michael Ambrose"
          role="CTO and Co-founder"
          description=""
          img="/public/images/MichaelAmbrose.jpg"
        />
        
        <TeamMemberCard  className='image'
          name="Nicky Rathe"
          role="CEO and Co-founder"
          description=""
          img="/public/images/DSC_092421.jpg"
        />
        
    
      </div>
    </div>
    </>
  );
}

