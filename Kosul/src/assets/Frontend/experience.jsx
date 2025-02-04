import React from "react";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

import "./experience.css";
// import { FaCheckCircle } from "react-icons/fa";
import characterimg from "../img/k12.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { TiHtml5 } from "react-icons/ti";
// import { FaPython } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";
// import { BsFiletypeSql } from "react-icons/bs";
// import { FaNodeJs } from "react-icons/fa";
// import { SiFlask } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaLaravel } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const charref = useRef(null);
  const boxref1 = useRef(null);
  const boxref2 = useRef(null);
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
      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig1",
          start: "top 300px",
          end: "top 100px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        scale: 1.5,
        translateX: "200px",
        ease: "ease",
        opacity: 1,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig1",
          start: "top 400px",
          end: "top 100px",
          // markers: true,
          scrub: 1,
        },
        translateX: "300px",
        ease: "ease",
      });

      gsap.to(".expbox1", {
        scrollTrigger: {
          trigger: ".trig2",
          start: "top 800px",
          end: "top 800px",
          scrub: 1,
          // markers: true,
        },
        className: "displaynone",
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig2",
          start: "top 800px",
          end: "top 800px",
          scrub: 1,
          // markers: true,
        },
        left: "300px",
        className: "charactercontainer leftshift",
      });

      gsap.to(".expbox2", {
        scrollTrigger: {
          trigger: ".trig2",
          start: "top 800px",
          end: "top 800px",
          scrub: 1,
        },
        className: "expbox2",
      });

      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 750px",
          end: "top 800px",
          scrub: 1,
          toggleActions: "play reverse play reverse",
          onLeaveBack: () => {
            document.querySelector(".expinfox1").style.display = "flex";
          },
          onLeave: () => {
            document.querySelector(".expinfox1").style.display = "none";
          },
        },
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 750px",
          end: "top 800px",
          scrub: 1,
          onEnterBack: () => {
            gsap.to(".charactercontainer", {
              className: "charactercontainer leftshift",
            });
          },
        },
        position: "300px",
        ease: "ease",
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig4",
          start: "top 400px",
          end: "top 600px",
          toggleActions: "play reverse play reverse",
          onLeaveBack: () => {
            gsap.to(".charactercontainer", {
              x: "-325px",
            });
          },
          onEnter: () => {
            gsap.to(".charactercontainer", {
              x: "-325px",
            });
          },
        },
        ease: "ease",
        opacity: 1,
      });

      gsap.to(".expinfox2", {
        scrollTrigger: {
          trigger: ".trig4",
          start: "top 400px",
          end: "top 200px",
          // markers: true,
          toggleActions: "play none play reverse",
        },
        ease: "ease",
        scale: 1.5,
        translateX: "250px",
        opacity: 1,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trigx1",
          start: "top 700px",
          end: "top 500px",
          // markers: true,
          scrub: 1,
          onEnterBack: () => {
            gsap.to(".charactercontainer", {
              x: "325px",
            });
          },
          onEnter: () => {
            gsap.to(".charactercontainer", {
              x: "-325px",
            });
          },
        },
        ease: "ease",
      });

      gsap.to(".expbox3", {
        scrollTrigger: {
          trigger: ".trigx2",
          start: "top 400px",
          end: "top 400px",
          // markers: true,
          scrub: 1,
          toggleActions: "play none play reverse",

          onEnter: () => {
            document.querySelector(".expbox3").style.display = "none";
          },
          onEnterBack: () => {
            document.querySelector(".expbox3").style.display = "flex";
          },
        },
        ease: "ease",
      });

      gsap.to(".expbox4", {
        scrollTrigger: {
          trigger: ".trigx4",
          start: "top 700px",
          end: "top 700px",
          // markers: true,
          scrub: 1,
          onEnter: () => {
            document.querySelector(".expbox4").style.display = "flex";
          },
          onEnterBack: () => {
            document.querySelector(".expbox4").style.display = "none";
          },
        },
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trigx4",
          start: "top 300px",
          end: "top 200px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play none",
          onEnterBack: () => {
            gsap.to(".charactercontainer", {
              className: "charactercontainer leftshift",
            });
          },
        },
        className: "charactercontainer leftside",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="experiences">
      <h2 className={`${!isSmallScreen ? "blockl" : "blocksl"}`}>Explore My</h2>
      <h1 className={`${!isSmallScreen ? "blockrr" : "blocksl"}`}>
        Experience
      </h1>
      <div className="charactercontainer" ref={charref}>
        <img src={characterimg} className="characterimg" />
      </div>
      <div className="triggers">
        <div className="trig1"></div>
        <div className="trig2"></div>
        <div className="trigx1"></div>
        <div className="trigx2"></div>
        <div className="trigx3"></div>
        <div className="trigx4"></div>
        <div className="trigx5"></div>
        <div className="trigx6"></div>
        <div className="trigx7"></div>
        <div className="trigx8"></div>
        <div className="trigx9"></div>
        <div className="trigx10"></div>
        <div className="trig3"></div>
        <div className="trig4"></div>
      </div>
      <div className="expinfo">
        <div className="expinfox1" ref={boxref1}>
          <h1>FrontEnd</h1>
          <div className="expinfox11">
            <div className="expbox1">
              <h1>Basics</h1>
              <div className="expboxer">
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg1"></div>
                    <p>HTML</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg2"></div>
                    <p>CSS</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg3"></div>
                    <p>JavaScript</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg4"></div>
                    <p>TypeScript</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg5"></div>
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expbox2 displaynone">
              <h1>FrameWorks</h1>
              <div className="expboxer">
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg6"></div>
                    <p>ReactJS</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg7"></div>
                    <p>Next.JS</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg8"></div>
                    <p>Vue.JS</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg9"></div>
                    <p>Bootstrap</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg10"></div>
                    <p>Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="expinfox2" ref={boxref2}>
          <h1>BackEnd</h1>
          <div className="expinfox11">
            <div className="expbox3">
              <h1>Databases</h1>
              <div className="expboxer">
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg11"></div>
                    <p>MongoDB</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg12"></div>
                    <p>MySQL</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg13"></div>
                    <p>PostgreSQl</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="expbox4">
              <h1>FrameWorks</h1>
              <div className="expboxer">
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg14"></div>
                    <p>NodeJs</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg15"></div>
                    <p>ExpressJs</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div className="eimg eimg16"></div>
                    <p>Flask</p>
                  </div>
                  <div className="expbox101">
                    <div className="eimg eimg17"></div>
                    <p>Laravel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
