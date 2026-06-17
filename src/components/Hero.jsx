import React from 'react'
import hero from '../assets/herosection.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-section">
        <img src={hero} alt="Hero Background" decoding='async' className="hero-image" loading="lazy" />
        <div className="hero-content">
          <h1>Your Journey Your Story</h1>
          <p>Choose your Favorite Destination. </p>
          <a href="/" className="hero-btn">Travel Plan</a>
        </div>
    </div>
  )
}

export default Hero