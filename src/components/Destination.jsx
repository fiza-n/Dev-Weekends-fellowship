import React from 'react'
import hills from "../assets/hill.jpg"
import boats from "../assets/boats.jpg"
import dest21 from "../assets/dest2-1.jpg"
import dest22 from "../assets/dest2-2.jpg"

import DestinationsData from './DestinationsData'

const Destination = () => {
  return (
    <div className="destination-wrapper">
        <div className="destination-header">
            <h1>Popular Destinations</h1>
            <p>Tour gives you the opportunity to see a lot, within a time frame.</p>
        </div>

        <DestinationsData 
        title={"Taal Volcano,Batangas"}
        img1={hills}
        img2={boats}
        destinationNo={"first"}
        />
        <DestinationsData 
        title={"Mt. Daguldul,Batangas"}
        img1={dest21}
        img2={dest22}
        destinationNo={"second"}
        />
    </div>
  )
}

export default Destination