import React from "react";
import "./Home.css";
import kosul22 from "../img/kosul22.jpg";
import kosul20 from "../img/kosul20.jpg";
import SplitText from "./splittext";

function Home({ scrollToAbout }) {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/kosul.pdf"; // File relative to the public folder
    link.download = "kosul.pdf"; // The name of the file to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div className="home">
        <div className="landingpage">
          <div className="selfimg">
            <img
              src={kosul20}
              alt="Kosul Gurung"
              className="selfimg2 slidein"
            ></img>
          </div>
          <div className="selfinfo ">
            <h1 style={{ fontSize: "4rem" }}>
              <SplitText
                text="Hello, I am"
                className="text-2xl font-semibold text-center"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <h1 style={{ fontSize: "3rem", marginTop: "-1rem" }}>
              <SplitText
                text="Kosul Gurung"
                className="text-2xl font-semibold text-center"
                delay={60}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <h1 style={{ fontSize: "3rem", marginTop: "-5px" }}>
              <SplitText
                text="Full Stack Developer"
                className="text-2xl font-semibold text-center"
                delay={70}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>

            {/* <h1 className="animate-pop-in">Kosul Gurung</h1>
            <h1 className="animate-pop-in">Full Stack Developer</h1> */}
            <div>
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
