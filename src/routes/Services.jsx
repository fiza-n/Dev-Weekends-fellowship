import React from 'react'
import servicesection from '../assets/servicesection.jpg'
import './Services.css'
import RecentTrips from '../components/RecentTrips'

const Services = () => {
  return (
   <>
    <div className="service-section">
      <img src={servicesection} alt="" className="service-image" />
      <div className="service-content">
        <h1>Services</h1>
       
      </div>
      
      
    </div>
    <RecentTrips />
   </>

  )
}

export default Services