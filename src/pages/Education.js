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
              During my Bachelor's degree in Information Technology I learned a
              lot of things and acquired many skills. I also achieved a
              certificate for the Brain Storm Event and got good score in the
              Aptitude Test.
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
              During my High School days, I opted for Physics, Chemistry and
              Maths which increased my interest in Cosmology - The Study of
              Physics of Outer Space. But I was not able to perform well in my
              exams and I only scored 50 percent in total.
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
              During my School days, I was not that of a smart kid but I always
              wanted had interest in getting to know more about the computer
              programming. I managed to score 60 percent in the exams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
