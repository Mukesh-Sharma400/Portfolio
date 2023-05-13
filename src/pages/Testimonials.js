import React from "react";
import nitin from "../assets/nitin.jpg";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.png";
import Resume from "../components/Resume";

const Testimonials = () => {
  return (
    <div className="pt-5 mt-5 container container-fluid">
      <Resume />
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-sm-1 col-md-4 m-auto text-center">
            <img
              src={nitin}
              className="img-fluid rounded-circle m-auto"
              alt="nitin"
            />
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
                  <i className="bi bi-linkedin"></i>
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
                - Posted on 11 May 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Diksha Dubey{" "}
                <a
                  href="https://www.linkedin.com/in/diksha-dubey-49a938209"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Mukesh is Very friendly in nature. He can work very nicely in a
                team. He helps to understand concept while working in a team. He
                helps others in team to grow with his own growth. He inspires
                other people to work better.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 12 May 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Shweta Jadhav{" "}
                <a
                  href="https://www.linkedin.com/in/shweta-jadhav-b5784b241"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Mukesh is an exceptional web developer who possesses all the
                skills one would want in an excellent software developer.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 12 May 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Rituraj Roj{" "}
                <a
                  href="https://www.linkedin.com/in/rituraj421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Working with Mukesh was so friendly as well as professional at
                the same time. Looking forward to work with you again.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 12 May 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Reshma Yadav{" "}
                <a
                  href="https://www.linkedin.com/in/reshu-yadav-556249252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Having worked with Mukesh for three years, I have to say he is
                an excellent professional. He helped me understand the project
                management process and introduced me to useful tools. I am
                impressed with his work ethic and communication skills.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 13 May 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Anjumaara Ansari{" "}
                <a
                  href="https://www.linkedin.com/in/anjumaara-ansari-8035a9246"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Mukesh is a very hardworking person and can easily tackle web
                problems. We have worked together on several projects, and he is
                a very skilled and dedicated professional. His expertise in the
                web development field has helped us a lot! I highly recommend
                him to anyone.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 13 May 2023
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fs-3">
                <i className="bi bi-person-circle"></i> Aman Sharma{" "}
                <a
                  href="https://www.linkedin.com/in/aman-sharma-1292001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </h5>
              <p className="card-text fs-5">
                Mukesh is best in Front-End design and clean UI.
              </p>
              <p className="card-text text-body-secondary fs-6">
                - Posted on 13 May 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
