import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import stack from "../../Images/stack.png";
import url from "../../Images/url.png";
import thiru from "../../Images/thirukkural.png";
import pokimon from "../../Images/pokimon.png";
import { FaGithub,  } from 'react-icons/fa'
import { CgWebsite  } from 'react-icons/cg'

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={stack} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">Stack overflow clone</div>
            <div className="img-description">
              <p>
                Stack Overflow is a question and answer site for professional and enthusiast programmers.{" "}
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiReact className="react" /> &nbsp;
                <SiIcons.SiNodedotjs className="node" /> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/Stack-Overflow-front"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/Stack-overflow-back"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://stack-overflow-17.netlify.app/"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">Url Shortener</div>
            <div className="img-description">
              <p>
                This project is to minimize the web page address into something that's easier to remember and track
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiReact className="react" /> &nbsp;
                <SiIcons.SiNodedotjs className="node" /> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;                <p className="codeLinks text-center pt-3">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/task-day-44-url-shortener-Front"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/task-day-44-url-shortener-back"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://url-shortener-17.netlify.app/"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={thiru} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">THIRUKKURAL API</div>
            <div className="img-description">
              <p>
              The Thirukkural API provides data about each of the 1330 thirukkural, in tamil and english.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiHtml5 className="react" /> &nbsp;
                <SiIcons.SiJavascript className="node" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/thirukkural-api"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://thirukkural-api-17.netlify.app/"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={pokimon} className="card-img-top" alt="..." />

          <div className="card-img-overlay">
            <div className="img-title">Pokemon API</div>
            <div className="img-description">
              <p>
                The Pokedex API provides data about each of the 151 Pokemon, including moves,and type
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiHtml5 className="react" /> &nbsp;
                <SiIcons.SiJavascript className="node" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/pokimon-api"
                  >
                    Frontend <FaGithub />
                  </a>

                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://pokimon-api-db.netlify.app/"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
