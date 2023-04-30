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
              Hello, my name is Mukesh Sharma and I am a MERN Stack developer. I
              have extensive experience in building web applications using
              MongoDB, Express, React, and Node.js. I am passionate about
              creating efficient and scalable applications that deliver a great
              user experience. I specialize in developing RESTful APIs, handling
              database integration, and implementing client-side functionality
              with React. I also have experience with other popular technologies
              such as Redux, Sass, and Bootstrap. Throughout my career, I have
              worked with a variety of clients and industries, ranging from
              startups to large corporations. This has given me the ability to
              adapt to different project requirements and work with diverse
              teams. I am a self-motivated individual who is always looking for
              ways to improve my skills and learn new technologies. I am an
              excellent problem solver and I thrive in challenging situations. I
              believe in the importance of clean code and always strive to write
              maintainable and reusable code. If you are looking for a MERN
              Stack developer who can bring your ideas to life, please don't
              hesitate to contact me. I am always open to new opportunities and
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
