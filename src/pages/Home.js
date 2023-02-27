import React from "react";
import mern from "../assets/mern.png";

const Home = () => {
  return (
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
      <div className="col-lg-7 mx-auto">
        <p className="lead">
          Solution-driven MERN-Stack Developer with over a year of work
          experience building consumer-focused online products and services.
          Designed and developed web apps across multiple APIs, thirdparty
          integrations, and databases.
        </p>
      </div>
    </div>
  );
};

export default Home;
