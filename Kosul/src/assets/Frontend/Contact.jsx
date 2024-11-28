import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { useRef, useState } from "react";

function Contact() {
  const emailref = useRef(null);
  const submitemail = async () => {
    const email = emailref.current.value;
    console.log(email);

    try {
      const response = await fetch("http://localhost:3000/emailadd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <h1>Contact Me</h1>
      <div className="contactx">
        <div className="emailinfo">
          <MdEmail size={100} />
          Email: kosulgrg@gmail.com
        </div>
        <div className="emailinfo">
          <IoIosCall size={100} />
          Phone: +977 9816143286
        </div>
      </div>
      <h3>Submit Your Email</h3>
      <div className="submityouremail">
        <input type="email" placeholder="Your Email" ref={emailref} />
        <button onClick={submitemail}>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
