// AboutUs.js

import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h2 className={styles.aboutUsTitle}>About Frozen Lakes Incorporated</h2>
      <p className={styles.aboutUsText}>
        At Frozen Lakes Incorporated, we thrive at the intersection of innovation and reliability. As a leading technology company, we specialize in creating cutting-edge solutions that empower businesses to navigate the digital landscape with confidence and efficiency. With a team of dedicated professionals who are passionate about harnessing the power of technology to drive positive change, we are committed to delivering exceptional results that exceed expectations. From software development to cybersecurity, cloud computing to artificial intelligence, we leverage our expertise to provide tailored solutions that propel our clients towards success. At Frozen Lakes, we embrace challenges as opportunities for growth, and we are proud to be your trusted partner on the journey towards technological excellence.
      </p>
    </div>
  );
};

export default AboutUs;
