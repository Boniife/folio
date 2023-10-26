import React from "react";
import "./about.css";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section name="about" className="about-section">
      <div className="about-main">
        <div className="about-head-text">
          <h3 className="about-head">About Me</h3>
        </div>
        <div className="about-me">
          <div className="about-image">
            <img src={about} alt="Ifeanyi" className="about-img" />
          </div>
          <div className="about-content">
            <h4> I'm A Software Development Fan</h4>
            <p>
              I focused almost all my professional career developing software
              and managing teams and projects on the software industry.
            </p>
            <p>
              I started my career as a data analyst and content manager,
              followed by software developpment and project management.
            </p>
            <p>
              I'm driven by innovation, continuous improvement and perfectionism
              being at the forefront of technologies, systems and tools. I ally
              to this some personal soft skills, as high sense of organisation
              and responsibility and technical skills as good developer and nice
              troubleshooter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
