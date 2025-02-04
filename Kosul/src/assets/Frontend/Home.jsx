import React from "react";
import "./Home.css";
import kosul22 from "../img/kosul22.jpg";

import BlurText from "./blurtext";

function Home({ scrollToAbout }) {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/KosulGurung2.pdf"; // File relative to the public folder
    link.download = "KosulGurung.pdf"; // The name of the file to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home">
        <div className="landingpage">
          <div className="selfinfo ">
            <div className="myinformation">
              <h2>Hi, My name is</h2>
              <h1>Kosul Gurung</h1>
              <h3>
                <BlurText
                  text="A Full Stack Web Developer residing in Pokhara, Nepal"
                  delay={120}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl mb-8"
                />
              </h3>
            </div>
            <div className="buttoncontrol">
              <button className="button1" onClick={downloadFile}>
                Download CV
              </button>
              <button className="button2" onClick={() => scrollToAbout(3)}>
                Contact Info
              </button>
            </div>
            <div>
              <a
                href="https://github.com/Kosul58"
                target="_blank"
                className="social"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Github"
                  className="social"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/kosul-gurung-6b002a17a/"
                target="_blank"
                className="social"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="Linkedin"
                  className="social"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
