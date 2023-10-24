import React from "react";
import mern from "../assets/mern.png";
import maukes from "../assets/new_maukes.png";
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
          data-aos="fade-down"
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
        <div className="col-lg-8 mx-auto" data-aos="fade-up">
          <p className="lead">
            Solution driven 🚀 MERN Stack 💯 Developer 👨‍💻 with over a year of
            work experience building consumer focused online products and
            services. Designed and developed web apps 💻 across multiple APIs
            🔌, third party integrations 🤝, and databases 🗄.
          </p>
        </div>
        <div className="row align-items-md-center py-5 g-4">
          <div className="col-md-4 d-md-block" data-aos="fade-left">
            <img
              src={maukes}
              className="d-block mx-lg-auto img-fluid"
              alt="maukes"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-5 fw-bold lh-1 mb-3" data-aos="fade-right">
              Who is 🤔 <span className="text-danger">Mukesh</span> ? 👨‍🔧
            </h1>
            <p className="big--para">
              Hello, I'm Mukesh Sharma 💻, an aspiring IT professional with a
              background in web development 🌐. Currently, I am gaining hands-on
              experience as a Web Developer Intern at App Avengers Technologies
              🏢. Prior to this, I had the privilege of interning as a Project
              Intern at NullClass for two months in December 2022 to January
              2023 📆. During the period from August 2021 to October 2022, I
              dedicated my time to learning the ins and outs of the MERN Stack
              🛠️, which involved working on various small projects.
              <br />
              <br />
              My journey in the IT industry has been an exciting learning
              experience 🚀. I'm enthusiastic about building web applications 🏗️
              and honing my skills in technologies like MongoDB, Express, React,
              and Node.js ⚙️. I aim to create efficient and user-friendly
              applications, with a focus on RESTful APIs 🤝, database
              integration 💾, and client-side functionality using React ⚛️. I'm
              also familiar with popular tools such as Redux, Sass, and
              Bootstrap 🎨.
              <br />
              <br />
              While my professional journey is just beginning, I have had the
              opportunity to collaborate with a range of clients and industries,
              from startups to established companies 🤝. This diverse exposure
              has allowed me to adapt to varying project requirements and work
              effectively in diverse teams 👥.
              <br />
              <br />
              I'm a self-motivated individual, continually seeking opportunities
              to enhance my skills and explore new technologies 💡.
              Problem-solving is a strength of mine, and I thrive when faced
              with challenges 🧩. I strongly believe in the significance of
              clean, maintainable, and reusable code ♻️.
              <br />
              <br />
              If you're in need of an enthusiastic IT fresher with a passion for
              web development, please feel free to get in touch. I'm always open
              to new opportunities and collaborative ventures 🤝.
            </p>
          </div>
        </div>
      </div>
      <div className="container container-fluid mb-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h1 className="text-center mb-4">Languages</h1>
            <div className="row">
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">English</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Full Professional Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Hindi</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Native or Bilingual Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3" data-aos="zoom-in">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Marathi</h5>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            - Elementary Proficiency
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center mb-4">Interests</h1>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">👨🏾‍💻 Coding</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">🎧 Music</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="c mb-0">♟️ Chess</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">🏏 Cricket</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">⚽ Football</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="c mb-0">🎥 Movies</h5>
              </div>
              <div className="card mb-3 p-2" data-aos="zoom-in">
                <h5 className="card-title mb-0">⭕ Carrom</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
