import React from "react";
import nullclass from "../assets/nullclass.png";
import hasbasoft from "../assets/hasbasoft.png";
import fiver from "../assets/fiver.png";
import netflix from "../assets/Netflix_Clone.png";
import dice from "../assets/Dice_Game_with_JS.png";
import music from "../assets/Music_with_JS.png";
import ecommerce from "../assets/E-Commerce_Web_App.png";
import training from "../assets/Certificate_of_Training-NullClass.png";
import internship from "../assets/Internship Certificate - NullClass.png";
import Resume from "../components/Resume";

const Experience = () => {
  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={nullclass}
              className="d-block mx-lg-auto img-fluid"
              alt="nullclass"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">Project Intern</h1>
            <h1 className="fw-light">- NullClass</h1>
            <p>
              December 2022 to January 2023{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a NullClass Project Intern, I created a responsive MERN Stack
              app (Stack Overflow Clone) and added features like a chat bot and
              community section. I gained valuable experience in React, Node.js,
              Express.js, and MongoDB, improving my skills in building scalable
              and user-centric web applications.
            </p>
          </div>
        </div>
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid"
              alt="hasbasoft"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">MERN Stack Software Trainee</h1>
            <h1 className="fw-light">- Hasbasoft Technology Pvt Ltd</h1>
            <p>
              August 2021 to October 2022{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built
              several MERN Stack applications, including an Ecommerce platform.
              Through hands-on experience, I gained expertise in React, Node.js,
              Express.js, and MongoDB, developing dynamic and user-friendly web
              solutions in a professional software development environment.
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={fiver}
              className="d-block mx-lg-auto img-fluid"
              alt="fiver"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">Freelancer</h1>
            <h1 className="fw-light">- Fiver</h1>
            <p>
              May 2018 to September 2020{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Fiverr freelancer, I excelled in Excel VBA, completing
              diverse tasks for multiple clients. With expertise in automation
              and data manipulation, I delivered efficient and tailored
              solutions, consistently exceeding expectations. Positive feedback
              attests to my strong Excel VBA skills and professionalism.
            </p>
          </div>
        </div>
        <h1 className="mt-5 pb-2 text-center text-uppercase display-4 fw-bold">
          Certificates
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Certificate of Internship</h4>
              </div>
              <img src={internship} alt="netflix" />
              <title>Certificate of Internship</title>
              <div className="card-body">
                <p>
                  During the intern period I got to learn how should one
                  approach a complex problem and what all steps are required for
                  a MERN Stack application building. In the internship period I
                  performed several tasks like making a MERN Stack application
                  responsive for all devices, integrating a chat bot and a
                  community section.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_certificate-of-internship-nullclass-activity-7017920222397370368-2D-V?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Certificate of Training</h4>
              </div>
              <img src={training} alt="netflix" />
              <title>Certificate of Training</title>
              <div className="card-body">
                <p>
                  Certificate of Completion, A Stack Overflow Clone Web
                  Application using MERN Stack under the guidance of
                  Yougetplaced via NullClass.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_stack-overflow-clone-certificate-activity-7013058153118363648-9Ih3?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">E-Commerce Web App</h4>
              </div>
              <img src={ecommerce} alt="netflix" />
              <title>E-Commerce Web App</title>
              <div className="card-body">
                <p>
                  Certificate of Completion, An E-commerce Web Application using
                  ReactJS (MERN).
                </p>
                <h6>Build using -</h6>
                <p className="card-text">
                  ReactJS, Firebase, Firestore, Context API, AJAX, React Hooks,
                  Express, CORS, NodeJS, REST full API.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_e-commerce-web-app-certificate-activity-6925358509735706624-owJ5?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary ">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5 pb-4">
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Dice Game</h4>
              </div>
              <img src={dice} alt="netflix" />
              <title>Dice Game</title>
              <div className="card-body">
                <p>
                  Certificate of Completion, A Frontend project using #html5,
                  #css3 and #javascripts.
                </p>
                <h6>Build using -</h6>
                <p className="card-text">HTML, CSS, Javascript.</p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_javascript-certificate-2-activity-6924316331756388352-g4RC?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Music in JavaScript</h4>
              </div>
              <img src={music} alt="netflix" />
              <title>Music in JavaScript</title>
              <div className="card-body">
                <p>
                  Certificate of Completion, A Frontend project using #html5,
                  #css3 and #javascripts.
                </p>
                <h6>Build using -</h6>
                <p className="card-text">HTML, CSS, Javascript.</p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_javascript-certificate-1-activity-6924316178202918912-EBDg?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Netflix Like Frontend</h4>
              </div>
              <img src={netflix} alt="netflix" />
              <title>Netflix Like Frontend</title>
              <div className="card-body">
                <p>
                  Certificate of Completion, A Frontend project(Netflix Clone)
                  using #html5 and #css3. Note- I also used #javascripts in the
                  later version(Mark 2).
                </p>
                <h6>Build using -</h6>
                <p className="card-text">HTML, CSS, Javascript.</p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_frontend-certificate-activity-6924314403915857920-XaND?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-outline-primary ">
                    View on LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
