import React from "react";
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
        <div class="row align-items-md-center py-5 g-4">
          <div class="col-md-4 d-md-block">
            <img
              src={maukes}
              className="d-block mx-lg-auto img-fluid"
              alt="maukes"
              loading="lazy"
            />
          </div>
          <div class="col-md-8 col-sm-12">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Who is <span className="text-danger">Mukesh</span> ?
            </h1>
            <p className="big--para">
              My name is Mukesh Sharma and I'm a MERN Stack developer with a
              passion for building efficient and scalable web applications. With
              expertise in MongoDB, Express, React, and Node.js, I specialize in
              developing RESTful APIs, integrating databases, and implementing
              client-side functionality using React. I have experience with
              Redux, Sass, and Bootstrap, and have worked with clients from
              startups to large corporations, adapting to diverse teams and
              project requirements. As a self-motivated problem solver, I strive
              to write maintainable and reusable code. I'm always looking for
              opportunities to improve my skills and learn new technologies. If
              you're looking for a MERN Stack developer to bring your ideas to
              life, let's collaborate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
