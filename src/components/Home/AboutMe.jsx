import React from "react";
import "./AboutMe.scss";
import linkedin from "../../images/home_aboutme_linkedin.png";
import behance from "../../images/home_aboutme_behance.png";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <div className="about-me-wrapper">
          <div className="about-me-title">About Me 🧑‍💻</div>
          <div className="about-me-description">
            I’m or I...
            <br />
            <br /> Based in Busan, Korea. <br />
            Studied UX Design, Service Design Process, Interaction Design, etc.
            in University. <br />
            Enjoy solving and designing things with sympathy and logic.
            <br /> And Ready to work remotely.
            <br /> Hope to see u soon. :)
          </div>
          <div className="about-me-btn">
            <Link to="/about">GO TO ABOUT</Link>
          </div>
          <div className="about-me-links">
            <div className="about-me-link">
              <img src={linkedin} alt="linkedin-link" />
              <div className="about-me-link-text">LinkedIn</div>
            </div>
            <div className="about-me-link">
              <img src={behance} alt="behance-link" />
              <div className="about-me-link-text">Behance</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
