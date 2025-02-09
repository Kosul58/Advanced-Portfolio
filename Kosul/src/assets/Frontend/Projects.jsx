import React from "react";
import { useState, useEffect } from "react";
import "./projects.css";
import ecom from "../img/ecomerce.png";
import fit from "../img/fitness.png";
import jak from "../img/jakarta.jpg";
import nutri from "../img/nutritrack.png";
import chess from "../img/chess.png";
import tower from "../img/tower.png";
import dice from "../img/dice.png";
import home from "../img/18697.jpg";
import js from "../img/JavaScript.png";
import react from "../img/react.png";
import next from "../img/Next.png";
import vue from "../img/vue.png";
import lchar from "../img/Lchat.png";
import rchar from "../img/Rchat.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  const [isSmallScreen2, setIsSmallScreen2] = useState(
    window.innerWidth <= 1000
  );
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
      setIsSmallScreen2(window.innerWidth <= 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parentzoom", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 0px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        scale: 4,
        ease: "power4in",
      });
      gsap.to(".childz1", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        translateX: "-150px",
        translateY: "-150px",
        scale: 1.5,
        ease: "ease",
      });
      gsap.to(".childz2", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        translateY: "-100px",
        scale: 1.1,
        ease: "ease",
      });
      gsap.to(".childz3", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        translateY: "-100px",
        translateX: "100px",
        scale: 1.2,
        ease: "ease",
      });
      gsap.to(".mainprojectimg", {
        scrollTrigger: {
          trigger: ".ptrig2",
          start: "top 600px",
          end: "top 300px",
          // markers: true,
          scrub: 1,
        },
        ease: "ease",
        translateX: "-40px",
      });
      gsap.to(".mainprojectdesc", {
        scrollTrigger: {
          trigger: ".ptrig2",
          start: "top 400px",
          end: "top 250px",
          // markers: true,
          scrub: 1,
        },
        ease: "ease",
        opacity: 1,
        scale: 1,
      });
      gsap.to(".mainprojectdesc", {
        scrollTrigger: {
          trigger: ".ptrig3",
          start: "top 400px",
          end: "top 300px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        ease: "ease",
        translateX: "700px",
      });
      gsap.to(".childz5", {
        scrollTrigger: {
          trigger: ".ptrig3",
          start: "top 400px",
          end: "top 300px",
          // markers: true,
          scrub: 1,
        },
        ease: "ease",
        translateX: "40px",
      });
      gsap.to(".childz4", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 200px",
          // markers: true,
          scrub: 1,
        },
        scale: 0.9,
        translateX: "-150px",
        translateY: "150px",
        ease: "ease",
      });
      gsap.to(".childz6", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 600px",
          // markers: true,
          scrub: 1,
        },
        scale: 0.7,
        ease: "ease",
      });
      gsap.to(".childz7", {
        scrollTrigger: {
          trigger: ".ptrig1",
          start: "top 800px",
          end: "top 600px",
          // markers: true,
          scrub: 1,
        },
        scale: 1.2,
        ease: "ease",
      });
      gsap.to(".chess", {
        scrollTrigger: {
          trigger: ".tower",
          start: "top 400px",
          end: "top 300px",
          // markers: true,
          scrub: 1,
        },
        translateY: "110px",
        ease: "ease",
      });
      gsap.to(".tower", {
        scrollTrigger: {
          trigger: ".dice",
          start: "top 600px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
        },
        translateY: "110px",
        ease: "ease",
      });
      gsap.to(".dice", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 600px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
        },
        translateY: "110px",
        ease: "ease",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="projects">
        <h2 className={`${!isSmallScreen ? "blockl" : "blocksl"}`}>
          Explore My Recent
        </h2>
        <h1 className={`${!isSmallScreen ? "blockrr" : "blocksl"}`}>
          Projects
        </h1>
        <div className="mobileproj">
          <section className="timeline-section">
            <div className="timeline-items">
              <div className="timeline-item">
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-date ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  Tower Game
                </div>
                <div
                  className={`timeline-content ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date timelineright">Dice Game</div>
                <div className="timeline-content timelineright">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item">
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${react})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-date ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  Chess Game
                </div>
                <div
                  className={`timeline-content ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date timelineright">
                  Portfolio Website
                </div>
                <div className="timeline-content timelineright">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-date ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  Nutritrack & Rec{" "}
                </div>
                <div
                  className={`timeline-content ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item">
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${next})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date timelineright">
                  Fitness Web App
                </div>
                <div className="timeline-content timelineright">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-date ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  College Website
                </div>
                <div
                  className={`timeline-content ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item" style={{ opacity: 0 }}>
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${js})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
              </div>
              <div className="timeline-item">
                <div
                  className="timeline-title"
                  style={{ backgroundImage: `URL(${vue})` }}
                ></div>
                <div className="timeline-dot"></div>
                <div className="timeline-date timelineright">
                  Ecommerce Website
                </div>
                <div className="timeline-content timelineright">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-date ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  Task Manager
                </div>
                <div
                  className={`timeline-content ${
                    !isSmallScreen2 ? "timelineleft" : "timelineright"
                  }`}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="projecty">
          <div className="mainprojectdesc">
            <p>
              Built using <br /> ReactJs <br /> For Web application <br /> and{" "}
              <br /> Pytorch for <br /> recomendation <br /> engine
            </p>
          </div>
          <div className="parentzoomout">
            <div className="parentzoom">
              <div
                className="childz1"
                style={{ backgroundImage: `URL(${chess})` }}
              ></div>
              <div
                className="childz2"
                style={{ backgroundImage: `URL(${jak})` }}
              ></div>
              <div
                className="childz3"
                style={{ backgroundImage: `URL(${fit})` }}
              ></div>
              <div
                className="childz4"
                style={{ backgroundImage: `URL(${ecom})` }}
              ></div>
              <div className="childz5">
                <div
                  className="mainprojectimg"
                  style={{ backgroundImage: `URL(${nutri})` }}
                ></div>
              </div>
              <div
                className="childz6"
                style={{ backgroundImage: `URL(${home})` }}
              ></div>
              <div
                className="childz7"
                style={{ backgroundImage: `URL(${tower})` }}
              ></div>
            </div>
          </div>
          <div className="ptrig1"></div>
          <div className="ptrig2"></div>
          <div className="ptrig3"></div>
        </div>
        <div className="projectsx ">
          <div className="kosulp">
            <div className="kprojectdesc blocks">
              <p>
                Ecommerce Website <br />
                Built in NEXT.JS
              </p>
            </div>
            <div
              className="kosulp101 project2 blocksl"
              style={{ backgroundImage: `URL(${ecom})` }}
            ></div>
          </div>
          <div className="kosulp">
            <div
              className="kosulp101 project3 blocksr"
              style={{ backgroundImage: `URL(${fit})` }}
            ></div>
            <div className="kprojectdesc blocks">
              <p>
                Fitness Website <br />
                Built in React.JS
              </p>
            </div>
          </div>
          <div className="kosulp">
            <div className="kprojectdesc blocks">
              <p>
                College Website <br />
                Built in Vue.JS
              </p>
            </div>
            <div
              className="kosulp101 project4 blocksu"
              style={{ backgroundImage: `URL(${jak})` }}
            ></div>
          </div>
          <div className="kosulpgames">
            <div className="topdiv">
              <h1 className="blocku">Java Script</h1>
              <h2 className="blocku">Games</h2>
            </div>
            <div className="middiv">
              <div className="chess">
                <div className="imgxpd">
                  <p>
                    Built using <br /> ReactJs
                  </p>
                </div>
                <div
                  className="imgxp"
                  style={{ backgroundImage: `URL(${chess})` }}
                ></div>
              </div>
              <div className="tower">
                <div
                  className="imgxp"
                  style={{ backgroundImage: `URL(${tower})` }}
                ></div>
                <div className="imgxpd">
                  <p>
                    Built using <br />
                    HTML, CSS <br />
                    and JavaScript
                  </p>
                </div>
              </div>
              <div className="dice">
                <div className="imgxpd">
                  {" "}
                  <p>
                    Built using <br />
                    HTML, CSS <br />
                    and JavaScript
                  </p>
                </div>
                <div
                  className="imgxp"
                  style={{ backgroundImage: `URL(${dice})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
