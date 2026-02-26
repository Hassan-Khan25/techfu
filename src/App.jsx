import React, { useState } from "react";
import "./App.css";
import AboutSection from "./AboutSection";   // 👈 YEH ADD KARO
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import Contact from './Contact';
import Footer from './Footer';




function App() {
  const [active, setActive] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="tech">TECH</span>
          <span className="fu">FU</span>
        </div>

        <ul className="nav-links">
          <li
            className={`nav-item ${active === "Home" ? "active" : ""}`}
            onClick={() => setActive("Home")}
          >
           <b>Home</b>
          </li>

          {/* Services Dropdown */}
          <li
            className={`nav-item dropdown ${active === "Services" ? "active" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span onClick={() => setActive("Services")}><b>Our work ▾</b></span>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => setActive("Website Development")}>
                 Business Websites Portfolio
                </li>
                <li onClick={() => setActive("Ecommerce Development")}>
                  Ecommerce Websites Portfolio
                </li>
              </ul>
            )}
          </li>

          <li
            className={`nav-item ${active === "Clients" ? "active" : ""}`}
            onClick={() => setActive("Clients")}
          >
         <a href="#testimonials">Testimonials</a>
          </li>

          <li
            className={`nav-item ${active === "Contact" ? "active" : ""}`}
            onClick={() => setActive("Contact")}
          >
         <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Where Creativity Meets Code – <br />
            Exceptional Web Development Services.
          </h1>
          <p>
            We are specialized in Website Development, Ecommerce Development, Digital Marketing, Social Media Marketing & Optimization, Graphic Designing,  Along with other services like SSL, RDP, Domain Registration & Web Hosting providing results-driven strategies to expand your business.
          </p>
          <button className="primary-btn">Talk To An Expert</button>
        </div>

        <div className="hero-right">
          <div className="form-box">
            <h2>Get A Free Quote Now</h2>
            <p>Let the experts build your project</p>

            <form className="quote-form">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Project Details" required></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Contact />
      <Footer/>
    
    </div>
  );
}

export default App;