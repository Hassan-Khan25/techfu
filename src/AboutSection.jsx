import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Side */}
        <div className="about-left">
          <div className="experience-box">
            <span>7+ Years Experience</span>
          </div>

          <div className="image-box">
            <img
  src="https://genxe.com.pk/wp-content/uploads/2024/04/genxe-home-p1.webp"
  alt="Genxe Office"
/>
          </div>

          <div className="contact-box">
            <h4>Phone Number</h4>
            <p>+92 334-0637719</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h2>
            Professional Website Development <br />
            <span>Company in Lahore</span>
          </h2>

          <p>
            We provide high quality website development services for businesses
            of all sizes. Our team builds responsive, modern and scalable web
            solutions tailored to your needs.
          </p>

          <p>
            With years of experience in development and digital strategy,
            we help businesses grow online with powerful and effective
            web solutions.
          </p>

          {/* Stats */}
          <div className="stats">
            <div className="stat-box primary">
              <h3>1,500+</h3>
              <p>Projects Done</p>
            </div>

            <div className="stat-box">
              <h3>15+</h3>
              <p>Best Team</p>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;