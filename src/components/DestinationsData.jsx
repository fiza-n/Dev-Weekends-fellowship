import React from 'react'
import './Destination.css'

const DestinationsData = ({title, img1, img2, destinationNo}) => {
  return (
    <div>    <div className={destinationNo}>
                <div className="left-side">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae alias facere minima modi corrupti, recusandae at quis ex obcaecati excepturi iusto quisquam laborum, cumque molestiae dolorem eius blanditiis magnam soluta accusantium eaque nisi in ut voluptatibus esse. Et, voluptas voluptate optio, explicabo reiciendis maxime beatae error eum fugiat maiores temporibus?</p>
                </div>
                <div className="right-side">
                    <div className="image-container">
                        <img src={img1} alt="Taal Volcano" className="image-1" loading="lazy" decoding="async" />
                        <img src={img2} alt="Boats" className="image-2" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div></div>
  )
}

export default DestinationsData