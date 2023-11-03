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
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiDockRight } from 'react-icons/bi'


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
            href="https://drive.google.com/file/d/13iScuSSUq9bJ4fdUzZmxXrWdzFTqQs13/view?usp=sharing"
            rel="noreferrer">
            Rusume < BiDockRight />
          </a>

          
        </span>
      </HomeContent>
    </HomeContainer>

  );
}

export default HeroSection;
