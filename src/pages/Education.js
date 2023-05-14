import React from "react";
import bscit from "../assets/bachelors.png";
import aptitude from "../assets/Aptitude_Test.png";
import brainstrom from "../assets/Brain_Storm.png";
import highschool from "../assets/highschool.jpg";
import school from "../assets/school.png";
import Resume from "../components/Resume";

const Education = () => {
  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={bscit}
              className="d-block mx-lg-auto img-fluid"
              alt="bscit"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Bachelor's in IT</h1>
            <h1 className="fw-light">
              - Sanpada College of Commerce & Technology
            </h1>
            <p>
              September 2020 to Present{" "}
              <span className="text-secondary">( Sanpada, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I always had a passion for web development and acquired skills in
              various web technologies. I have created many websites, which
              impressed all my colleagues and professors. I became a
              sought-after web developer, proving that hard work and dedication
              can lead to success.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-3 pb-5 border-bottom">
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Certificate of Aptitude Test</h4>
              </div>
              <img src={aptitude} alt="aptitude" />
              <title>Certificate of Aptitude Test</title>
            </div>
          </div>
          <div className="col">
            <div className="card shadow h-100 rounded-3">
              <div className="card-header">
                <h4 className="text-center">Certificate of Brain Storm</h4>
              </div>
              <img src={brainstrom} alt="brainstrom" />
              <title>Certificate of Brain Storm</title>
            </div>
          </div>
        </div>
        <div className="row align-items-center g-3 border-bottom py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={highschool}
              className="d-block mx-lg-auto img-fluid"
              alt="hsc"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Higher School Certificates</h1>
            <h1 className="fw-light">- Pace Education Society</h1>
            <p>
              June 2017 to May 2018{" "}
              <span className="text-secondary">( Nerul, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I was always been fascinated by the mysteries of the universe.
              Despite not being the smartest student in my class, I spends every
              free moment delving into books and videos on cosmology and
              astrophysics.
            </p>
          </div>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={school}
              className="d-block mx-lg-auto img-fluid"
              alt="school"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">Secondary School Certificates</h1>
            <h1 className="fw-light">- Tilak International School</h1>
            <p>
              June 2015 to March 2016{" "}
              <span className="text-secondary">( Ghansoli, Navi Mumbai )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              I always had a keen interest in computers and technology, I used
              to participates in a school computer science competition despite
              my lack of confidence. I studied hard, boosting my confidence and
              setting my on a path towards a successful career in technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
