import React from 'react'
import contact from '../assets/contactsection.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-section">
      <img src={contact} alt="Contact Background" className="contact-image" loading="lazy" />
      <div className="contact-content">
        <h1>Contact</h1>
       
      </div>
    </div>
  )
}

export default Contact