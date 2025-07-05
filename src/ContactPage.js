import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us 📞</h1>
        <p>If you have any questions or need further assistance, feel free to reach out! We’d love to hear from you. 💬</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:siingh.anupp@gmail.com">siingh.anupp@gmail.com</a></p>
          <p>Follow us on social media:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/connectanupsingh/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://www.instagram.com/anup.singhhhh?igsh=MXQ0cWFobHVxZGc5bQ==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
