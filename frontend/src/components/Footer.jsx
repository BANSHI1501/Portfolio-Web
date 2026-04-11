import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message Sent! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <footer id="contact" className="footer container fade-in">
      <div className="contact-wrapper glass">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Ready to collaborate or have an exciting project in mind? Reach out to me.</p>
          <div className="info-details">
            <div className="info-item">
              <strong>Name:</strong> Banshi
            </div>
            <div className="info-item">
              <strong>Email:</strong> prasadbanshi2002@gmail.com
            </div>
            <div className="info-item">
              <strong>Phone:</strong> +91 7250152489
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name} 
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required 
              value={formData.message} 
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Banshi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
