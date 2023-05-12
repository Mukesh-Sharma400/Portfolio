import React from "react";
import nitin from "../assets/nitin.jpg";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.png";

const Testimonials = () => {
  return (
    <div className="pt-5 mt-5 container container-fluid">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={nitin} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">
                Nitin Prajapati{" "}
                <a
                  href="https://www.linkedin.com/in/nitin-prajapati1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </h5>
              <p className="card-text fs-4">
                I highly recommend Mukesh as a MERN Stack Developer and would
                love to work together. Mukesh is amazing at his job! He knows
                his way around people, he is good with the clients, does
                whatever it takes to help colleagues and gets things done. He
                makes sure that everyone is on the same page and focused on the
                main goal.
              </p>
              <p className="card-text text-body-secondary fs-5">
                Posted on 11 May 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 ">
                <img
                  src={girl1}
                  className="img-fluid rounded-start"
                  alt="diksha_dubey"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Diksha Dubey{" "}
                    <a
                      href="https://www.linkedin.com/in/diksha-dubey-49a938209"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </h5>
                  <p className="card-text">
                    Very friendly in nature. Can work very nicely in team. Help
                    to understand concept while working in team. Help others in
                    team to grow with his own growth. Inspire other people to
                    work better.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Posted on 12 May 2023
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={girl2}
                  className="img-fluid rounded-start"
                  alt="shweta_jadhav"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Shweta Jadhav{" "}
                    <a
                      href="https://www.linkedin.com/in/shweta-jadhav-b5784b241"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </h5>
                  <p className="card-text">
                    Mukesh is an exceptional web developer who possesses all the
                    skills one would want in an excellent software developer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Posted on 12 May 2023
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
