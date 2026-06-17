import React from 'react'

const RecentTripsData = ({img, title, para}) => {
  return (
    <div className='card-component'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <p>{para}</p>
        </div>

    </div>
  )
}

export default RecentTripsData