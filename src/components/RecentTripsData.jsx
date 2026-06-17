import React from 'react'

const RecentTripsData = ({img, title}) => {
  return (
    <div className='card-component'>
        <div className='card-image-wrapper'>
            <img src={img} alt={title} className='card-image' loading="lazy" decoding="async" />
        </div>
        <div className='card-content'>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nesciunt dolorum atque facere error, blanditiis delectus, aut fuga debitis exercitationem perspiciatis facilis maiores dignissimos quas, similique tempore enim veritatis commodi.</p>
            <a href="#" className="card-link">Explore →</a>
        </div>

    </div>
  )
}

export default RecentTripsData