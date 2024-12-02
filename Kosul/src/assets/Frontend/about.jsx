import React from "react";
import "./about.css";
import kosul22 from "../img/kosul22.jpg";
import kosul20 from "../img/kosul20.jpg";
import { PiMedalDuotone } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="about">
      <h2>Get to know more</h2>
      <h1>About Me</h1>
      <div className="aboutx">
<<<<<<< HEAD
        <div className="aboutimg block">
=======
        <div className="aboutimg">
>>>>>>> 48c1d570945ee37cb5448134f2e8df252992b684
          <img src={kosul22} alt="Kosul Gurung" className="aboutimg2"></img>
        </div>
        <div className="aboutinfo">
          <div className="aboutinfox">
<<<<<<< HEAD
            <div className="experience block2">
=======
            <div className="experience">
>>>>>>> 48c1d570945ee37cb5448134f2e8df252992b684
              <h4>
                <PiMedalDuotone size={30} />
              </h4>
              <h3>Experience</h3>
              <p>
                2+ Years <br></br>Full Stack Developer
              </p>
            </div>
<<<<<<< HEAD
            <div className="education block2">
=======
            <div className="education">
>>>>>>> 48c1d570945ee37cb5448134f2e8df252992b684
              <h4>
                <PiStudentFill size={30} />
              </h4>
              <h3>Education</h3>
              <p>
                Bachelors in <br></br>Computer Engineering
              </p>
            </div>
          </div>
          <div className="aboutinfox2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
