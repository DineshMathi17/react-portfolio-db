import React from "react";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from "./HomeElements";
import Video from "../../Images/Video.mp4";
import resume from "../../Images/Resume.pdf";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

function HeroSection() {
  return (

    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Dinesh Babu M</HomeH1>
        <HomeP>
          I'm a passionate{" "}
          <span style={{ borderBottom: "3px solid green" }}>Web Developer</span>{" "}
          from India
        </HomeP>
        <span className="float-left">
          <a
            href="https://github.com/DineshMathi17"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <FaGithub />
            

          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/dinesh-babu-mathivanan-264228277/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <FaLinkedin />
          </a>
          &emsp;
        </span>

        <span>
          <a
            className="btn btn-sm btn-success mt-3"
            target="_blank"
            href={resume}
            rel="noreferrer"
            download={resume} >
            Rusume < FaDownload />
          </a>
        </span>
      </HomeContent>
    </HomeContainer>

  );
}

export default HeroSection;
