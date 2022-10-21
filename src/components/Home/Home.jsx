import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard";
import AboutMe from "./AboutMe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import wave from "../../images/home_intro_wave.png";

function Home() {
  return (
    <>
      <Header />
      <section className="home sections">
        <section className="home-intro section">
          <div className="home-intro__top intro-text">Hello World!</div>
          <div className="home-intro__mid intro-text">
            I am <span>Hans</span>,
            <br />a Product Designer
            <br />
            in Busan, Korea.
          </div>
          <div className="home-intro__bottom intro-text">
            It’s great to see you on my website! 👋
          </div>

          <div className="home-intro__scrollDown">
            Scroll down
            <br />
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <img src={wave} alt="home-wave" className="wave1" />
          {/* <img src={wave1} alt="home-wave" className="wave1" />
          <img src={wave2} alt="home-wave" className="wave2" /> */}
        </section>

        <section className="home-works section">
          <ProjectCard />
        </section>

        <section className="home-about section">
          <AboutMe />
        </section>
      </section>
    </>
  );
}

export default Home;
