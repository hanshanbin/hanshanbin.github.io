import React from "react";
import "./ProjectCard.scss";
import SD from "../../images/works-sd-image.png";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <>
      <section className="project-card">
        <div className="project-card-wrapper">
          {/*---------------------- NEX wrapper ----------------------*/}
          <div className="card-wrapper card-wrapper card-wrapper">
            <div className="card__left card__left">
              <div className="card__left-text">
                <div className="left-text-title">NEXITY</div>
                <div className="left-text-description">
                  An Infotainment System of Space Colonization Ship.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ <br />
                  #UX/UI Design <br />
                  #User Research <br />
                  #Prototype <br />
                  #Future Scenario
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
            <img src={SD} alt="work-sd" className="card__right" />

            <div className="card__left__mobile">
              <div className="card__left-text">
                <div className="left-text-title">NEXITY</div>
                <div className="left-text-description">
                  An infotainment System of Space Colonization Ship.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ #UX/UI Design #User Research #
                  Prototype
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
          </div>

          {/*---------------------- SD wrapper ----------------------*/}
          <div className="card-wrapper card-wrapper">
            <div className="card__left">
              <div className="card__left-text">
                <div className="left-text-title">Sercvice Design</div>
                <div className="left-text-description">
                  How can we get the Younger Generation interested in Politics.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ <br />
                  #UX/UI Design <br />
                  #User Research <br /> #Role Playing
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
            <img src={SD} alt="work-sd" className="card__right" />
            <div className="card__left__mobile">
              <div className="card__left-text">
                <div className="left-text-title">Sercvice Design</div>
                <div className="left-text-description">
                  How can we get the Younger Generation interested in Politics.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ #Service Design #User Research <br />
                  #Role Playing
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
          </div>

          {/*---------------------- MISH wrapper ----------------------*/}
          <div className="card-wrapper card-wrapper">
            <div className="card__left">
              <div className="card__left-text">
                <div className="left-text-title">MISH</div>
                <div className="left-text-description">
                  A Team Crew-Based Self-Improvement App.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ <br />
                  #UX/UI Design <br />
                  #User Research <br />
                  #Prototype
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
            <img src={SD} alt="work-sd" className="card__right" />
            <div className="card__left__mobile">
              <div className="card__left-text">
                <div className="left-text-title">MISH</div>
                <div className="left-text-description">
                  A Team Crew-Based Self-Improvement App.
                </div>
                <div className="left-text-hashs">
                  #Student Project at Univ #UX/UI Design #User Research #
                  Prototype
                </div>
              </div>
              <div className="card__left-btn">
                <Link>View Project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
