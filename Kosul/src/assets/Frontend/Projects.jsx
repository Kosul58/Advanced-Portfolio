import React from "react";
import { useState, useEffect } from "react";
import "./Projects.css";
import img1 from "../img/ecomerce.png";
import img2 from "../img/fitness.png";
import img3 from "../img/jakarta.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
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
        translateX: "-100px",
        translateY: "-100px",
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
        translateX: "400px",
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
        translateX: "35px",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="projects">
      <h2>Explore My Recent</h2>
      <h1>Projects</h1>
      <div className="projecty">
        <div className="mainprojectdesc"></div>
        <div className="parentzoomout">
          <div className="parentzoom">
            <div className="childz1"></div>
            <div className="childz2"></div>
            <div className="childz3"></div>
            <div className="childz4"></div>
            <div className="childz5">
              <div className="mainprojectimg"></div>
            </div>
            <div className="childz6"></div>
            <div className="childz7"></div>
          </div>
        </div>
        <div className="ptrig1"></div>
        <div className="ptrig2"></div>
        <div className="ptrig3"></div>
      </div>

      <div className="projectsx ">
        <div className="aboutl">
          <div className="project1 blockl">
            <div className="projectimg">
              <img src={img1} className="prjimgx" alt="Ecomerce"></img>
            </div>
            <h1>Project1</h1>
            <div className="projectinfo">
              <button>Github</button>
              <button>Live Demo</button>
            </div>
          </div>
        </div>

        <div className="aboutu">
          <div className="project1 blocku">
            <div className="projectimg">
              <img src={img2} className="prjimgx" alt="Fitness"></img>
            </div>
            <h1>Project2</h1>
            <div className="projectinfo">
              <button>Github</button>
              <button>Live Demo</button>
            </div>
          </div>
        </div>

        <div className="aboutr">
          <div className="project1 blockrr">
            <div className="projectimg">
              <img src={img3} className="prjimgx" alt="Jakarta"></img>
            </div>
            <h1>Project3</h1>
            <div className="projectinfo">
              <button>Github</button>
              <button>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
