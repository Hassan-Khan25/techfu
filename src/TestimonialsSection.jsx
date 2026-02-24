import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = [
  {
    name: "Oliver Smith",
    role: "CEO, TechWave UK",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Techfu delivered a modern, responsive website that exceeded our expectations. Highly professional!",
  },
  {
    name: "Amelia Brown",
    role: "Product Manager, Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Their UI/UX design is exceptional. Our users love the clean and intuitive interface.",
  },
  {
    name: "Harry Wilson",
    role: "Head of Design, BrightIdeas Ltd",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Fast, efficient, and reliable development. The website performs flawlessly across all devices.",
  },
  {
    name: "Isla Taylor",
    role: "Tech Lead, FutureSoft UK",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The team is amazing! They delivered a pixel-perfect website with smooth animations.",
  },
  {
    name: "Jack Davies",
    role: "Founder, WebStart UK",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Our website is now fully responsive, fast, and user-friendly. Techfu made the process seamless.",
  },
  {
    name: "Sophia Johnson",
    role: "Entrepreneur, InnovateHub",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Professional web development from start to finish. Highly functional and visually stunning.",
  },
];

function Testimonials() {
  return (
    <section 
    className="testimonial-section">
      <div className="container">
        
        <h2 className="testimonial-title">
          Our <span>Testimonials</span>
        </h2>

        <p className="testimonial-subtitle">
          See what our clients say about Techfu — delivering top-notch web solutions every time.
        </p>

        <div className="testimonial-grid">
          {TestimonialsSection.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              <p className="testimonial-text">"{item.text}"</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Testimonials;