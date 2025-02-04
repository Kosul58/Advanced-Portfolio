import React from "react";
import "./about.css";
import { useState, useEffect } from "react";
import kosul22 from "../img/kosul22.jpg";
import { PiMedalDuotone } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {" "}
      <div className="about">
        <h2 className={`${!isSmallScreen ? "blockl" : "blocksl"}`}>
          Get to know more
        </h2>
        <h1 className={`${!isSmallScreen ? "blockrr" : "blocksl"}`}>
          About Me
        </h1>
        <div className="aboutx">
          <div className={`aboutimgx1 ${!isSmallScreen ? "block" : ""}`}></div>
          <div className="aboutinfo">
            <div className={`aboutimg ${!isSmallScreen ? "block2" : "blocks"}`}>
              <img src={kosul22} alt="Kosul Gurung" className="aboutimg2"></img>
            </div>
            <div className="aboutinfox">
              <div
                className={`experience ${!isSmallScreen ? "block2" : "blocks"}`}
              >
                <h4>
                  <PiMedalDuotone size={30} color="white" />
                </h4>
                <h3>Experience</h3>
                <p>
                  2+ Years <br></br>Full Stack Developer
                </p>
              </div>
              <div
                className={`education ${!isSmallScreen ? "block2" : "blocks"}`}
              >
                <h4>
                  <PiStudentFill size={30} color="white" />
                </h4>
                <h3>Education</h3>
                <p>
                  Bachelors in <br></br>Computer Engineering
                </p>
              </div>
            </div>
            {/* <div className="aboutinfox2">
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
