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
                Stack Overflow app features questions and answers on certain computer programming topics. It was created to be a more open alternative to earlier question and answer websites such as Experts-Exchange.

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
                    Live <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="card" data-aos="zoom-in-up">
          <img src={chat} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
            <div className="img-title">DB-Chat</div>
            <div className="img-description">
              <p>
              Chatting app allows you to communicate with your customers in web chat rooms. It enables you to send and receive messages. Chatting apps make it easier, simpler, and faster to connect with everyone and it is also easy to use              </p>
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
                    href="https://github.com/DineshMathi17/db-chat-frontend"
                  >
                    Frontend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DineshMathi17/db-chat-backend"
                  >
                    Backend <FaGithub />
                  </a>
                  <a
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                    href="https://db-chat-app.netlify.app/"
                  >
                    Live <CgWebsite />
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
                This project is to giving a project for student and give a instruction to student by a admin. It is used for monitoring student by mentor 
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
                    href="https://github.com/DineshMathi17/zenclass2-front"
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
                    href="https://zenclass-db.netlify.app/"
                  >
                    Live <CgWebsite />
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
                This project is to buy a book in online and online Payment using Stripe, An ecommerce app allows users to shop online, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.
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
                    Live <CgWebsite />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>


    

        {/*  */}





      </div>
    </div>
  );
}

export default Portfolio;
