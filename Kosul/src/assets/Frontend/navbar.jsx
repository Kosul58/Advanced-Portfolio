import React from "react";
import "./navbar.css";
import { useRef, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import kosul20 from "../img/kosul20.jpg";
import { IoIosCloseCircle } from "react-icons/io";

function Navbar({ scrollToAbout }) {
  const menuref = useRef(null);
  const optionref = useRef(null);
  const navref = useRef(null);
  const openmenu = () => {
    menuref.current.classList.remove("closer");
    optionref.current.classList.add("closer");
  };

  const closemenu = () => {
    menuref.current.classList.add("closer");
    optionref.current.classList.remove("closer");
  };
  return (
    <>
      <div className="nav">
        <div className="navbar" ref={navref}>
          <h1 className="navg" onClick={() => scrollToAbout(4)}>
            <img src={kosul20}></img>
            Kosul Gurung
          </h1>

          <div className="navgx">
            <h2 className="navg" onClick={() => scrollToAbout(0)}>
              About
            </h2>
            <h2 className="navg" onClick={() => scrollToAbout(2)}>
              Experience
            </h2>
            <h2 className="navg" onClick={() => scrollToAbout(1)}>
              Projects
            </h2>
            <h2 className="navg" onClick={() => scrollToAbout(3)}>
              Contact
            </h2>
          </div>
        </div>
        <div className="burgerx">
          <div className="menuopen" onClick={() => openmenu()} ref={optionref}>
            <MdOutlineMenu size={50} />{" "}
          </div>
          <div className="closer" ref={menuref}>
            <div className="hamburger">
              <div className="menuclose" onClick={() => closemenu()}>
                <IoIosCloseCircle size={40} />
              </div>
              <h1 className="navg" onClick={() => scrollToAbout(4)}>
                Home
              </h1>
              <h1 className="navg" onClick={() => scrollToAbout(0)}>
                About
              </h1>
              <h1 className="navg" onClick={() => scrollToAbout(1)}>
                Projects
              </h1>
              <h1 className="navg" onClick={() => scrollToAbout(2)}>
                Experience
              </h1>
              <h1 className="navg" onClick={() => scrollToAbout(3)}>
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
