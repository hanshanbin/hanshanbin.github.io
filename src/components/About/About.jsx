import React from "react";
import "./About.scss";
import Header from "../Header/Header";
import AboutImage from "../../images/about_image.png";
import AboutImageBg from "../../images/about_image_bg.png";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-wrapper">
          <div className="about-image-wrapper">
            <img src={AboutImage} alt="profileimage" />
            <img src={AboutImageBg} alt="background" />
          </div>
          <div className="about-introduce">
            I'm a product designer based in Busan, Korea, and I wish to work
            somewhere in the world where a remote job is widely open.
            <br />
            <br /> I majored in Multimedia Design at Inje University.
            <br />
            And through Its curriculum, I've been studying UX Design, Service
            Design, and Interaction Design.
            <br />
            <br /> While studying UX Design in school, I enjoy solving problems
            with empathy and logic. And I'm interested in making fascinating
            interactions because it is not just visible effects but also
            communication with the users. <br />
            <br />
            And to work closely with developers, I've been studying Front-end
            skills such as HTML5, CSS3 (SCSS), and JavaScript (React). So that I
            can speak with developers ;) <br />
            <br />
            Throughout the school curriculum, I did some projects based on
            future scenarios to higher my limits of thinking and design. <br />
            <br />I wish you to enjoy my projects, and thanks again for visiting
            my portfolio website. <br />
            <br />
            Have a Good Day :)
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
