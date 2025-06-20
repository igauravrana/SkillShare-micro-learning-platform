import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>SkillShare</h3>
          <p>Online learning platform to grow your skills.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Categories</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Help</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SkillShare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;