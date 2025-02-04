import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useRef, useState } from "react";

function Contact() {
  const emailref = useRef(null);
  const nameref = useRef(null);
  const numberref = useRef(null);
  const messageref = useRef(null);
  const submitemail = async () => {
    const email = emailref.current.value;
    console.log(email);

    try {
      const response = await fetch("http://localhost:3000/emailadd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: nameref.current.value,
          number: numberref.current.value,
          message: messageref.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="contact">
      <h2 className="blockl">Get In Touch</h2>
      <h1 className="blockrr">Contact Me</h1>
      <div className="contacter">
        <div className="contactx">
          <div className="contactimg"></div>
          <div className="emailinfo">
            <MdEmail size={30} />: kosulgrg@gmail.com
          </div>
          <div className="emailinfo">
            <IoIosCall size={30} /> :+977 9816143286
          </div>
        </div>
        <div className="contacty">
          <div className="submityouremail">
            <input type="text" placeholder="Your Name" ref={nameref} />
            <input type="email" placeholder="Your Email" ref={emailref} />
            <input type="text" placeholder="Your Number" ref={numberref} />
            <input type="text" placeholder="Your Message" ref={messageref} />
            <button onClick={submitemail}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
