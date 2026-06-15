import React from 'react'
import about from '../assets/aboutsection.jpg'
import './About.css'

const About = () => {
  return (
    <>
    <div className="about-section">
      <img src={about} alt="About"  className="about-image" loading="lazy" />
      <div className="about-content">
        <h1>About Trippy</h1>
        <p>Discover amazing destinations with us</p>
        <div className="about-description">
          <p>We are passionate about creating unforgettable travel experiences for adventurers, explorers, and wanderers from around the world.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About