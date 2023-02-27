import React from "react";
import bscit from "../assets/bachelors.png";
import school from "../assets/school.png";

const Education = () => {
  return (
    <div className="pt-4 mt-5 container container-fluid col-xxl-8">
      <div className="row flex-lg-row-reverse align-items-center g-3 border-bottom">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={bscit}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Bachelor's in IT</h1>
          <h1 className="fw-light">
            - Sanpada College of Commerce & Technology
          </h1>
          <p>September 2020 to Present</p>
          <p className="mb-0">Achievements/Tasks:</p>
          <p className="lead">
            In the freelancing period I Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga aperiam, rerum cumque dolorum unde architecto
            modi! Facilis, molestiae.
          </p>
        </div>
      </div>
      <div className="row align-items-center g-3 border-bottom">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={bscit}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Higher School Certificates</h1>
          <h1 className="fw-light">- Pace Education Society</h1>
          <p>June 2016 to May 2018</p>
          <p className="mb-0">Achievements/Tasks:</p>
          <p className="lead">
            In the freelancing period I Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fuga aperiam, rerum cumque dolorum unde architecto
            modi! Facilis, molestiae.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-3">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={school}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">Secondary School Certificates</h1>
          <h1 className="fw-light">- Tilak International School</h1>
          <p>June 2008 to March 2016</p>
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

export default Education;
