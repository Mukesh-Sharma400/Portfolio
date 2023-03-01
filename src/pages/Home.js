import React from "react";
import { Link } from "react-router-dom";
import mern from "../assets/mern.png";
import maukes from "../assets/maukes.png";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 text-center container container-fluid">
        <img
          className="d-block mx-auto mb-4"
          src={mern}
          alt="mern"
          width="150"
          height="150"
        />
        <h1 className="display-4 fw-bold text-uppercase text-secondary code">
          {"< "}
          <span className="mongo">M</span>
          <span className="express">E</span>
          <span className="react">R</span>
          <span className="node">N</span>
          <span> STACK DEVELOPER</span>
          {" />"}
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead">
            Solution-driven MERN-Stack Developer with over a year of work
            experience building consumer-focused online products and services.
            Designed and developed web apps across multiple APIs, thirdparty
            integrations, and databases.
          </p>
        </div>
        <div className="col-xxl-8 px-4 py-5 mx-auto">
          <div className="row align-items-center justify-content-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={maukes}
                className="d-block mx-lg-auto img-fluid"
                alt="maukes"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Who is <span className="text-primary">Mukesh</span> ?
              </h1>
              <p className="lead">
                I started coding in 2020 at the age of 19. I learned the MERN
                Stack in 2022. I show people that they don't have to be a
                straight A student or a genius to learn to code.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <Link
                  to="/projects"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  See Projects Now !
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-warning btn-lg px-4 me-md-2"
                >
                  Contact Me ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
