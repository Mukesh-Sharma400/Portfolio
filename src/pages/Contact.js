import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import contact from "../assets/contact.svg";

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
          toast.success("Message Sent Successfully");
          setTimeout(() => {
            navigate("/");
          }, 3000);
          console.log("Message Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
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
      <div class="py-5">
        <div class="row g-4">
          <div class="col-md">
            <h1 class="text-center mb-4">Social Info</h1>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="tel:+917021739604"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-telephone-fill text-dark mx-1"></i>
                  <span class="fw-bold">Phone:</span> (+91) 70217-39604
                </a>
              </li>
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="mailto:mksh400@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-envelope-fill text-dark mx-1"></i>
                  <span class="fw-bold">Gmail:</span> mksh400@gmail.com
                </a>
              </li>
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://www.linkedin.com/in/mukesh-sharma400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-linkedin text-dark mx-1"></i>
                  <span class="fw-bold">LinkedIn:</span> mukesh-sharma400
                </a>
              </li>

              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://github.com/Mukesh-Sharma400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-github text-dark mx-1"></i>
                  <span class="fw-bold">GitHub:</span> Mukesh-Sharma400
                </a>
              </li>

              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://www.facebook.com/Mukesh400f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-facebook text-dark mx-1"></i>
                  <span class="fw-bold">Facebook:</span> Mukesh400f
                </a>
              </li>
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://www.instagram.com/mukesh_sharma400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-instagram text-dark mx-1"></i>
                  <span class="fw-bold">Instagram:</span> mukesh_sharma400
                </a>
              </li>
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://twitter.com/mukesh_sharma36"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-twitter text-dark mx-1"></i>
                  <span class="fw-bold">Twitter:</span> mukesh_sharma36
                </a>
              </li>
              <li class="list-group-item">
                <a
                  className="text-decoration-none text-black"
                  href="https://www.google.com/maps/place/Ghansoli,+Navi+Mumbai,+Maharashtra/@19.1265698,72.9837973,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7c0ae08fd4fcb:0xeb29360c730e957f!8m2!3d19.1253629!4d72.9992013!16zL20vMDkxeHNy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-geo-alt-fill text-dark mx-1"></i>
                  <span class="fw-bold">Address:</span> Ghansoli, Navi Mumbai
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md img-fluid img-card w-50 d-none d-lg-block">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
