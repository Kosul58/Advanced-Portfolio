import React from "react";
import "./Projects.css";
import img1 from "../img/ecomerce.png";
import img2 from "../img/fitness.png";
import img3 from "../img/jakarta.jpg";

function Projects() {
  return (
    <div className="projects">
      <h2>Explore My Recent</h2>
      <h1>Projects</h1>
      <div className="projectsx">
        <div className="project1">
          <div className="projectimg">
            <img src={img1} className="prjimgx" alt="Ecomerce"></img>
          </div>
          <h1>Project1</h1>
          <div className="projectinfo">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="project1">
          <div className="projectimg">
            <img src={img2} className="prjimgx" alt="Fitness"></img>
          </div>
          <h1>Project2</h1>
          <div className="projectinfo">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="project1">
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
  );
}

export default Projects;
