import React from "react";
import nullclass from "../assets/nullclass.png";
import hasbasoft from "../assets/hasbasoft.jfif";
import fiver from "../assets/fiver.png";

const Experience = () => {
  return (
    <div className="pt-4 mt-5 container container-fluid col-xxl-8">
      <div className="row flex-lg-row-reverse align-items-center g-3 my-3 border-bottom">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={nullclass}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Project Intern</h1>
          <h1 className="fw-light">- NullClass</h1>
          <p>December 2022 to January 2023</p>
          <p className="mb-0">Achievements/Tasks:</p>
          <p className="lead">
            In the internship period I performed several tasks like making a
            MERN Stack application responsive for all devices, integrating a
            chat bot and a community section.
          </p>
        </div>
      </div>
      <div className="row align-items-center g-3 my-3 border-bottom">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={hasbasoft}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">MERN Stack Software Trainee</h1>
          <h1 className="fw-light">- Hasbasoft Technology</h1>
          <p>August 2021 to October 2022</p>
          <p className="mb-0">Achievements/Tasks:</p>
          <p className="lead">
            In the training period I learned about MERN Stack Technology and
            build several projects under their guidance.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-3 my-3">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={fiver}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Freelancer</h1>
          <h1 className="fw-light">- Fiver</h1>
          <p>May 2018 to Present</p>
          <p className="mb-0">Achievements/Tasks:</p>
          <p className="lead">
            In the freelancing period I Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga aperiam, rerum cumque dolorum unde architecto
            modi! Facilis, molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
