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
  const [Box, setBox] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig1",
          start: "top 400px",
          end: "top 200px",
          // markers: true,
          scrub: 1,
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
        opacity: 1,
      });

      gsap.to(".expinfox1", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 600px",
          end: "top 700px",
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
          end: "top 10px",
          scrub: 1,
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
          trigger: ".trigx1",
          start: "top 300px",
          end: "top 500px",
          markers: true,
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
          markers: true,
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
          trigger: ".trigx3",
          start: "top 400px",
          end: "top 600px",
          markers: true,
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

      gsap.to(".expinfox2", {
        scrollTrigger: {
          trigger: ".trig3",
          start: "top 400px",
          end: "top 10px",
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
        <div className="trig3"></div>
        <div className="trig4"></div>
      </div>
      <div className="expinfo">
        <div className="expinfox1" ref={boxref1}></div>
        <div className="expinfox2" ref={boxref2}></div>
      </div>
    </div>
  );
}

export default Experience;
