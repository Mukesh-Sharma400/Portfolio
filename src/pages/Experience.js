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
        <div className="row flex-lg-row-reverse align-items-center g-3 my-3 border-bottom pb-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={nullclass}
              className="d-block mx-lg-auto img-fluid"
              alt="nullclass"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Project Intern</h1>
            <h1 className="fw-light">- NullClass</h1>
            <p>
              December 2022 to January 2023{" "}
              <span className="float-end">Online</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead">
              In the internship period I performed several tasks like making a
              MERN Stack application responsive for all devices, integrating a
              chat bot and a community section.
            </p>
          </div>
        </div>
        <div className="row align-items-center g-3 my-3 border-bottom pb-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid"
              alt="hasbasoft"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">MERN Stack Software Trainee</h1>
            <h1 className="fw-light">- Hasbasoft Technology</h1>
            <p>
              August 2021 to October 2022{" "}
              <span className="float-end">Online</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead">
              In the training period I learned about MERN Stack Technology and
              build several projects like E-Commerce Web App and more under
              their guidance.
            </p>
          </div>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-3 my-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={fiver}
              className="d-block mx-lg-auto img-fluid"
              alt="fiver"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Freelancer</h1>
            <h1 className="fw-light">- Fiver</h1>
            <p>
              May 2018 to Present <span className="float-end">Online</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead">
              In the freelancing period I did several tasks / assignments for
              many clients in the Microsoft Visual Basic (VBA).
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
                <a href="m" target="_blank" rel="noopener noreferrer">
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
