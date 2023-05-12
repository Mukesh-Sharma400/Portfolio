import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import contact from "../assets/contact.svg";
import map from "../assets/map.png";
import Resume from "../components/Resume";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e4fjwoz",
        "template_1d6gvu8",
        form.current,
        "a185DCLwfO5fjx4m0"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully. Thank You for Contacting!");
          setTimeout(() => {
            navigate("/");
          }, 3000);
          console.log("Message Sent Successfully. Thank You for Contacting!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 container container-fluid col-xxl-8">
        <div className="row align-items-center justify-content-center g-3 mt-3">
          <div className="col-10 col-sm-8 col-lg-6 mb-4">
            <h1 className="text-center mb-5 pb-4">Contact Me</h1>
            <img
              src={contact}
              className="d-block mx-lg-auto img-fluid"
              alt="contact"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 m-auto mb-4">
            <Toaster />
            <form
              className="border border-primary border-5 bg-light shadow-lg rounded-5 p-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="col-12 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter your Name here..."
                  name="from_name"
                  required
                />
              </div>
              <div className="col-12 mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your Email here..."
                  name="from_email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  id="inputMessage"
                  placeholder="Enter your Message here..."
                  rows="4"
                  name="message"
                  required
                ></textarea>
              </div>
              <div>
                <button className="btn btn-primary w-100" type="submit">
                  Contact Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-5">
          <div className="row g-4">
            <div className="col-md">
              <img className="img-fluid rounded-5 shadow" src={map} alt="map" />
            </div>
            <div className="col-md">
              <h1 className="text-center mb-4">Social Info</h1>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="tel:+917021739604"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telephone-fill text-dark me-2"></i>
                    <span className="fw-bold">Phone:</span> (+91) 70217-39604{" "}
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="mailto:mksh400@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-envelope-fill text-dark me-2"></i>
                    <span className="fw-bold">Gmail:</span> mksh400@gmail.com
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://www.linkedin.com/in/mukesh-sharma400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin text-dark me-2"></i>
                    <span className="fw-bold">LinkedIn:</span> mukesh-sharma400
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://github.com/Mukesh-Sharma400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github text-dark me-2"></i>
                    <span className="fw-bold">GitHub:</span> Mukesh-Sharma400
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://www.facebook.com/Mukesh400f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook text-dark me-2"></i>
                    <span className="fw-bold">Facebook:</span> Mukesh400f
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://www.instagram.com/mukesh_sharma400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram text-dark me-2"></i>
                    <span className="fw-bold">Instagram:</span> mukesh_sharma400
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://twitter.com/mukesh_sharma36"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter text-dark me-2"></i>
                    <span className="fw-bold">Twitter:</span> mukesh_sharma36
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    className="text-decoration-none text-black"
                    href="https://www.google.com/maps/place/Ghansoli,+Navi+Mumbai,+Maharashtra/@19.1265698,72.9837973,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7c0ae08fd4fcb:0xeb29360c730e957f!8m2!3d19.1253629!4d72.9992013!16zL20vMDkxeHNy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-geo-alt-fill text-dark me-2"></i>
                    <span className="fw-bold">Address:</span> Ghansoli, Navi
                    Mumbai{" "}
                    <span className="float-end">
                      <i class="bi bi-box-arrow-up-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
