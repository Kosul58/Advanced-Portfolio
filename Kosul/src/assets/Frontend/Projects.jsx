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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
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
          <div className="kosulp">
            <div className="kprojectdesc blocks"></div>
            <div className="kosulp101 project2 blocksl"></div>
          </div>
          <div className="kosulp">
            <div className="kosulp101 project3 blocksr"></div>
            <div className="kprojectdesc blocks"></div>
          </div>
          <div className="kosulp">
            <div className="kprojectdesc blocks"></div>
            <div className="kosulp101 project4 blocksu"></div>
          </div>
          <div className="kosulpgames">
            <div className="topdiv">
              <h1 className="blocku">Java Script</h1>
              <h2 className="blocku">Games</h2>
            </div>
            <div className="middiv">
              <div className="chess">
                <div className="imgxpd"></div>
                <div className="imgxp"></div>
              </div>
              <div className="tower">
                <div className="imgxp"></div>
                <div className="imgxpd"></div>
              </div>
              <div className="dice">
                <div className="imgxpd"></div>
                <div className="imgxp"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
