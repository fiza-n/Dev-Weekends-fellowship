import React from 'react'
import RecentTripsData from './RecentTripsData'
import paris from "../assets/paris.jpg"
import italy from "../assets/italy.jpg"
import malaysia from "../assets/malaysia.jpg"
import './RecentTrips.css'

const RecentTrips = () => {
  return (
    <div className="recent-trips-wrapper">
       <div className="recent-trips-header">
            <h1>Recent Trips</h1>
            <p>Tour gives you the opportunity to see a lot, within a time frame.</p>
        </div>
        <div className="recent-trips-grid">
        <RecentTripsData 
        img={paris}
        title={"Trip in Paris"}
        
        />
         <RecentTripsData 
        img={italy}
        title={"Trip in Italy"}
        
        />
         <RecentTripsData 
        img={malaysia}
        title={"Trip in Malaysia"}
        
        />
        </div>
    </div>
  )
}

export default RecentTrips