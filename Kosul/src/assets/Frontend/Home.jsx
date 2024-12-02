import React from "react";
import "./Home.css";
import kosul22 from "../img/kosul22.jpg";
import kosul20 from "../img/kosul20.jpg";

function Home({ scrollToAbout }) {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/kosul.pdf"; // File relative to the public folder
    link.download = "kosul.pdf"; // The name of the file to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="home">
        <div className="landingpage">
          <div className="selfimg">
<<<<<<< HEAD
            <img
              src={kosul20}
              alt="Kosul Gurung"
              className="selfimg2 slidein"
            ></img>
          </div>
          <div className="selfinfo ">
            <h1 className="animate-pop-in">Hello, I'm</h1>
            <h1 className="animate-pop-in">Kosul Gurung</h1>
            <h1 className="animate-pop-in">Full Stack Developer</h1>
=======
            <img src={kosul20} alt="Kosul Gurung" className="selfimg2"></img>
          </div>
          <div className="selfinfo">
            <h1>Hello, I'm</h1>
            <h1>Kosul Gurung</h1>
            <h1>Full Stack Developer</h1>
>>>>>>> 48c1d570945ee37cb5448134f2e8df252992b684
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
