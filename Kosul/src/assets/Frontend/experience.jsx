import React from "react";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
import characterimg from "../img/k12.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const charref = useRef(null);
  const boxref1 = useRef(null);
  const boxref2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig1",
          start: "top 400px",
          end: "top 200px",
          // markers: true,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
        scale: 1.5,
        translateX: "200px",
        ease: "ease",
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig1",
          start: "top 400px",
          end: "top 200px",
          // markers: true,
          scrub: 1,
        },
        translateX: "300px",
        ease: "ease",
      });

      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 800px",
          end: "top 900px",
          scrub: 1,
          // markers: true,
        },
        ease: "ease",
        opacity: 0,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 400px",
          end: "top 200px",
          scrub: 1,
          // markers: true,
        },
        translateX: "-400px",
        ease: "ease",
        opacity: 1,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trig2",
          start: "top 300px",
          end: "top 500px",
          // markers: true,
          onLeaveBack: () => {
            gsap.to(".charactercontainer", {
              x: "300px",
            });
          },
        },
        ease: "ease",
        opacity: 1,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trigx1",
          start: "top 300px",
          end: "top 500px",
          // markers: true,
          toggleActions: "play reverse play reverse",
          onLeaveBack: () => {
            gsap.to(".charactercontainer", {
              x: "300px",
            });
          },
        },
        ease: "ease",
        opacity: 1,
      });

      gsap.to(".charactercontainer", {
        scrollTrigger: {
          trigger: ".trigx2",
          start: "top 400px",
          end: "top 600px",
          // markers: true,
          toggleActions: "play reverse play reverse",
          onLeaveBack: () => {
            gsap.to(".charactercontainer", {
              x: "300px",
            });
          },
        },
        ease: "ease",
        opacity: 1,
      });
      const trigd = function (c) {
        gsap.to(".charactercontainer", {
          scrollTrigger: {
            trigger: c,
            start: "top 400px",
            end: "top 600px",
            // markers: true,
            toggleActions: "play reverse play reverse",
            onLeaveBack: () => {
              gsap.to(".charactercontainer", {
                x: "300px",
              });
            },
          },
          ease: "ease",
          opacity: 1,
        });
      };
      trigd(".trigx3");
      trigd(".trigx4");
      trigd(".trigx5");
      trigd(".trigx6");
      trigd(".trigx7");
      trigd(".trigx8");

      gsap.to(".expinfox2", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 400px",
          end: "top 200px",
          scrub: 1,
          // markers: true,
        },
        scale: 1.5,
        translateX: "-180px",
        ease: "ease",
        opacity: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="experiences">
      <h2>Explore My</h2>
      <h1>Experience</h1>
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
              <div className="expbox101">
                <h2>HTML</h2>
              </div>
              <div className="expbox101">
                <h2>CSS</h2>
              </div>
              <div className="expbox101">
                <h2>JavaScript</h2>
              </div>
              <div className="expbox101">
                <h2>Python</h2>
              </div>
            </div>
            <div className="expbox1">
              <h1>FrameWork</h1>
              <div className="expbox101">
                <h2>React</h2>
              </div>
              <div className="expbox101">
                <h2>Next</h2>
              </div>
              <div className="expbox101">
                <h2>Bootstrap</h2>
              </div>
              <div className="expbox101">
                <h2>Tailwind</h2>
              </div>
              <div className="expbox101">
                <h2>Material UI</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="expinfox2" ref={boxref2}>
          <h1>BackEnd</h1>
          <div className="expinfox11">
            <div className="expbox1">
              <h1>Database</h1>
              <div className="expbox101">
                <h2>MongoDB</h2>
              </div>
              <div className="expbox101">
                <h2>SQL</h2>
              </div>
            </div>
            <div className="expbox1">
              <h1>FrameWork</h1>
              <div className="expbox101">
                <h2>NodeJs</h2>
              </div>
              <div className="expbox101">
                <h2>ExpressJs</h2>
              </div>
              <div className="expbox101">
                <h2>Flask</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
