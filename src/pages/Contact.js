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
            alt=""
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
              {/* <label htmlFor="inputName" className="form-label">
                Your Name:
              </label> */}
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
              {/* <label htmlFor="inputEmail" className="form-label">
                Your Email:
              </label> */}
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
              {/* <label htmlFor="inputMessage" className="form-label">
                Your Message:
              </label> */}
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
    </div>
  );
};

export default Contact;
