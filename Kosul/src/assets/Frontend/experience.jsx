import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
function Experience() {
  return (
    <div className="experiences">
      <h2>Explore My</h2>
      <h1>Experience</h1>
      <div className="expinfo">
        <div className="expinfox">
          <h2>Frontend Development</h2>
          <div className="exprow">
            <div className="exprow1">
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>HTML</h3>
                  <h4>Experienced</h4>
                </div>
              </div>
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>CSS</h3>
                  <h4>Experienced</h4>
                </div>
              </div>

              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>JavaScript</h3>
                  <h4>Experienced</h4>
                </div>
              </div>
            </div>
            <div className="exprow2">
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>REACT</h3>
                  <h4>Intermediate</h4>
                </div>
              </div>
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>TypeScript</h3>
                  <h4>Basic</h4>
                </div>
              </div>
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>Tailwind</h3>
                  <h4>Basic</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="expinfox">
          <h2>Backend Development</h2>
          <div className="exprow">
            <div className="exprow1">
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>NodeJS</h3>
                  <h4>Experienced</h4>
                </div>
              </div>
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>MongoDB</h3>
                  <h4>Experienced</h4>
                </div>
              </div>

              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>ExpressJS</h3>
                  <h4>Experienced</h4>
                </div>
              </div>
            </div>
            <div className="exprow2">
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>GIT</h3>
                  <h4>Intermediate</h4>
                </div>
              </div>
              <div className="exprowx">
                <h4>
                  <FaCheckCircle size={20} />
                </h4>
                <div>
                  <h3>SQL</h3>
                  <h4>Basic</h4>
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
