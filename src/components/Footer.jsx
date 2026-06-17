import React from 'react'
import './Footer.css'
import instaIcon from "../assets/insta.avif"
import fbIcon from "../assets/fb.png"
import xIcon from "../assets/x.avif"
import linkedinIcon from "../assets/linkedin.avif"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Trippy</h2>
          <p>Choose your favourite destination.</p>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon" title="Facebook">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon" title="Instagram">
             <img src={instaIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
             <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <img src={xIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Footer Links Columns */}
        <div className="footer-links">
          {/* Project Column */}
          <div className="footer-column">
            <h3>Project</h3>
            <ul>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">License</a></li>
              <li><a href="#">All Versions</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>

          {/* Others Column */}
          <div className="footer-column">
            <h3>Others</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2026 Trippy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
