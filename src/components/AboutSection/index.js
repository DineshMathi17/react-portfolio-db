import React from "react";
import "./About.css";
import Me from "../../Images/resumeProfile.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
          <p>
            Hello! My name is Dinesh, and I'm a passionate full-stack
            developer. I graduated with a diploma in Electronics and
            Communication Engineering and have been sharpen my skills in web
            development ever since.
          </p>
          <hr />
          <p>
            I'm comfortable working with a range of technologies, including
            HTML, CSS, JavaScript, and various frameworks such as Bootstrap
            and React.
          </p>
          <hr />
          <p>
            If you're interested in working together, feel free to reach out!
          </p>
          </div>
        </div>

      </InfoContainer>
    </>
  );
}

export default About;
