import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-header">
                <p className="small-title">WHAT WE DO</p>
                <h2>
                    Our <span>Services</span>
                </h2>
                <div className="underline"></div>
            </div>

            <div className="services-cards">

                <div className="service-card">
                    <img
                        src="https://genxe.com.pk/wp-content/uploads/elementor/thumbs/web-development-scaled-rgrghb5wla0w56b6yj94pju0hn2r0r8ij6fm3l2lqg.jpg"
                        alt="Website Development"
                    />
                    <h3>Website Development</h3>
                    <p>
                        TECHFU is a Leading Website Development Company in Lahore, working on various latest technologies .
                    </p>
                    <button className="learn-btn">Learn More →</button>
                </div>

                <div className="service-card">
                    <img
                        src="https://genxe.com.pk/wp-content/uploads/elementor/thumbs/1-rgrf74dercsnmzeho2i3opfln0qfs6vcikdo53k1hk.jpg"
                        alt="Ecommerce Development"
                    />
                    <h3>Ecommerce Development</h3>
                    <p>
                        Our Ecommerce developers have been serving the best Ecommerce development services to small & big businesses.
                    </p>
                    <button className="learn-btn">Learn More →</button>
                </div>

                <div className="service-card">
                    <img
                        src="https://genxe.com.pk/wp-content/uploads/elementor/thumbs/ee56a858c44857e11ae6c640ccd16d8f-rgrfq3q2rws43htvtrvvjezpi56a8587gino19etu0.jpg"
                        alt="Digital Marketing"
                    />
                    <h3>Digital Marketing</h3>
                    <p>
                        We, TECHFU, a digital marketing company offers you the ultimate solution to all of your digital problems.
                    </p>
                    <button className="learn-btn">Learn More →</button>
                </div>

            </div>

            <div className="bottom-link">
  <h2>Lets Discover More</h2>
  <button className="see-btn">See All Services →</button>
</div>
        </section>
    );
};

export default ServicesSection;