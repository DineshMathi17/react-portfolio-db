import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import stack from "../../Images/stack.png";
import zenclass from "../../Images/zenclass.png";
import chat from "../../Images/chat.png";
import shop from "../../Images/shop.png";
import { FaGithub, } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

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
                Stack Overflow is a question and answer site for professional and enthusiast programmers.
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





        {/*  */}
        <div className="card" data-aos="zoom-in-up">
          <img src={zenclass} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">Zen class</div>
            <div className="img-description">
              <p>
                This project is to giving a project for student by login as admin and give a instruction to student.
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
                    href="https://github.com/DineshMathi17/zen-class-front"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/zen-class-back"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://zenclass-event-management.netlify.app/"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>




        {/*  */}
        <div className="card" data-aos="zoom-in-up">
          <img src={shop} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">Online Book Shop</div>
            <div className="img-description">
              <p>
                This project is to buy a book in online and online Payment using Stripe 
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
                    href="https://github.com/DineshMathi17/bookshop-app-frontend"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/bookshop-app-backend"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://online-book-shop-17.netlify.app"
                  >
                    Website <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>




        {/*  */}




  <div className="card" data-aos="zoom-in-up">
          <img src={chat} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">Group Chat</div>
            <div className="img-description">
              <p>
                This project is to group chat with your friends
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
                    href="https://github.com/DineshMathi17/group-chat-frontend"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/group-chat-backend"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://group-chat-db.netlify.app/"
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
