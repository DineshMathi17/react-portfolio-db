import React from "react";
import "./Contact.css";
import { BiLogoGmail, BiSolidPhoneCall } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">Contact</h1>
      <div className="mail-contact mb-5">
       
        <a
          href="mailto:dineshbabum17d@gmail.com"
          rel="noreferrer"
          className="btn btn-sm btn-success"
        >
          Let's Discuss
        </a>
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <BiLogoGmail /> <span>dineshbabum17d@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <BiSolidPhoneCall /> <span>+91 8870597052</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <MdLocationOn /> <span>Salem, TamilNadu</span>
          
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/DineshMathi17"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success "
          >
            < FaGithub />
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/dinesh-babu-mathivanan-264228277/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success "
          >
            <FaLinkedin />
          </a>
          &emsp;
        </span>
        <span>Copyright © 2023. </span>&emsp;{" "}
        <span> All Rights Reserved by Dinesh </span>
      </div>
    </div>
  );
}

export default Contact;