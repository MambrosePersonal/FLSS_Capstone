// AboutUs.js

import React from 'react';
import './AboutPage.css';
import { NavBar } from '../components/NavBar';

// Individual team member card component
function TeamMemberCard({ name, role, description, email, imgSrc }) {
  return (
    <div className="column">
      <div className="card">
        <img src={imgSrc} alt={name} style={{ width: '100%' }} />
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
        <TeamMemberCard
          name="Michael Ambrose"
          role="CEO & Founder"
          description="Some text that describes me lorem ipsum ipsum lorem."
          imgSrc="/w3images/team1.jpg"
        />
        
        <TeamMemberCard
          name="Nicky Rathe"
          role="Art Director"
          description="Some text that describes me lorem ipsum ipsum lorem."
          imgSrc="/w3images/team2.jpg"
        />
        
    
      </div>
    </div>
    </>
  );
}



// export function AboutPage() {
//   return (<>
//   <NavBar/>
//     <div className="aboutUsContainer">
//       <h2 className="aboutUsTitle">About Frozen Lakes Incorporated</h2>
//       <p className="aboutUsText">
//         At Frozen Lakes Incorporated, we thrive at the intersection of innovation and reliability. As a leading technology company, we specialize in creating cutting-edge solutions that empower businesses to navigate the digital landscape with confidence and efficiency. With a team of dedicated professionals who are passionate about harnessing the power of technology to drive positive change, we are committed to delivering exceptional results that exceed expectations. From software development to cybersecurity, cloud computing to artificial intelligence, we leverage our expertise to provide tailored solutions that propel our clients towards success. At Frozen Lakes, we embrace challenges as opportunities for growth, and we are proud to be your trusted partner on the journey towards technological excellence.
//       </p>
//     </div>
//     </>
//   );
// };

