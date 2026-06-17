import React from 'react'
import servicesection from '../assets/servicesection.jpg'
import './Services.css'

const Services = () => {
  return (
    <div className="service-section">
      <img src={servicesection} alt="" className="service-image" />
    </div>
  )
}

export default Services