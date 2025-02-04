import React from "react";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

import "./experience.css";
// import { FaCheckCircle } from "react-icons/fa";
import characterimg from "../img/k12.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import html from "../img/HTML5.png";
import css from "../img/CSS3.png";
import js from "../img/JavaScript.png";
import ts from "../img/TypeScript.png";
import py from "../img/Python.png";
import react from "../img/react.png";
import next from "../img/Next.png";
import vue from "../img/vue.png";
import boot from "../img/Bootstrap.png";
import tailwind from "../img/Tailwind.png";
import mongo from "../img/MongoDB.png";
import mysq from "../img/MySQL.png";
import post from "../img/PostgresSQl.png";
import node from "../img/Node.js.png";
import exp from "../img/Express.png";
import flask from "../img/Flask.png";
import lara from "../img/Laravel.png";
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
        translateX: "70%",
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
              className: "charactercontainer",
              translateX: "70%",
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
              x: "-70%",
            });
          },
          onEnter: () => {
            gsap.to(".charactercontainer", {
              x: "-70%",
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
        translateX: "70%",
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
              x: "70%",
            });
          },
          onEnter: () => {
            gsap.to(".charactercontainer", {
              x: "-70%",
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
                    <div
                      className="eimg eimg1"
                      style={{ backgroundImage: `URL(${html})` }}
                    ></div>
                    <p>HTML</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg2"
                      style={{ backgroundImage: `URL(${css})` }}
                    ></div>
                    <p>CSS</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg3"
                      style={{ backgroundImage: `URL(${js})` }}
                    ></div>
                    <p>JavaScript</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div
                      className="eimg eimg4"
                      style={{ backgroundImage: `URL(${ts})` }}
                    ></div>
                    <p>TypeScript</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg5"
                      style={{ backgroundImage: `URL(${py})` }}
                    ></div>
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
                    <div
                      className="eimg eimg6"
                      style={{ backgroundImage: `URL(${react})` }}
                    ></div>
                    <p>ReactJS</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg7"
                      style={{ backgroundImage: `URL(${next})` }}
                    ></div>
                    <p>Next.JS</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg8"
                      style={{ backgroundImage: `URL(${vue})` }}
                    ></div>
                    <p>Vue.JS</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div
                      className="eimg eimg9"
                      style={{ backgroundImage: `URL(${boot})` }}
                    ></div>
                    <p>Bootstrap</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg10"
                      style={{ backgroundImage: `URL(${tailwind})` }}
                    ></div>
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
                    <div
                      className="eimg eimg11"
                      style={{ backgroundImage: `URL(${mongo})` }}
                    ></div>
                    <p>MongoDB</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg12"
                      style={{ backgroundImage: `URL(${mysq})` }}
                    ></div>
                    <p>MySQL</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div
                      className="eimg eimg13"
                      style={{ backgroundImage: `URL(${post})` }}
                    ></div>
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
                    <div
                      className="eimg eimg14"
                      style={{ backgroundImage: `URL(${node})` }}
                    ></div>
                    <p>NodeJs</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg15"
                      style={{ backgroundImage: `URL(${exp})` }}
                    ></div>
                    <p>ExpressJs</p>
                  </div>
                </div>
                <div className="expbox10">
                  <div className="expbox101">
                    <div
                      className="eimg eimg16"
                      style={{ backgroundImage: `URL(${flask})` }}
                    ></div>
                    <p>Flask</p>
                  </div>
                  <div className="expbox101">
                    <div
                      className="eimg eimg17"
                      style={{ backgroundImage: `URL(${lara})` }}
                    ></div>
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
