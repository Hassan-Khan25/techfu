import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Tecfu team will be in touch.");
  };

  return (
    <section className="tecfu-main-bg">
      <div className="tecfu-blue-card">
        
        {/* Left Side: Info */}
        <div className="tecfu-info-pane">
          <div>
            <span className="premium-badge">Contact Tecfu</span>
            <h1>Let's build <br/><span className="grey-text">Something Great.</span></h1>
            <p>Ready to start your next digital venture? Reach out and let's talk details.</p>
          </div>
          
          <a href="mailto:hello@tecfu.com" className="email-action-link">
            <div className="icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B2A4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="email-meta">
              <small>Email us at</small>
              <p>hello@tecfu.com</p>
            </div>
          </a>
        </div>

        {/* Right Side: Form */}
        <div className="tecfu-form-pane">
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              </div>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea name="message" rows="4" placeholder="How can we help you?" onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="tecfu-white-btn">
              Send Message <span>↗</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;