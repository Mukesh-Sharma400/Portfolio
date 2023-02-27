import React from "react";
import ecommerce from "../assets/E-Commerce Web App - Thumbnail.jpg";
import primevideo from "../assets/Prime Video Clone - Mark 2 -  Tumbnail.jpg";
import netflix from "../assets/Netflix Clone - Mark 2 - Thumbnail.jpg";

const Projects = () => {
  return (
    <div className="pt-5 mt-5 container container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">E-Commerce Web App</h4>
            </div>
            <video
              src="https://res.cloudinary.com/mksh400/video/upload/v1677433153/Portfolio/E-Commerce_Web_App_vks4xk.mp4"
              poster={ecommerce}
              width="100%"
              controls
            ></video>
            <title>E-Commerce Web App</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">
                ReactJS, Firebase, Firestore, Context API, AJAX, React Hooks,
                Express, CORS, NodeJS, REST full API.
              </p>
            </div>
            <div className="card-footer">
              <a
                href="https://www.linkedin.com/posts/mukesh-sharma400_an-e-commerce-web-application-using-reactjs-activity-6924995740872122368-4EkK?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-outline-primary">
                  View on LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">Prime Video Clone</h4>
            </div>
            <video
              src="https://res.cloudinary.com/mksh400/video/upload/v1677433139/Portfolio/Prime_Video_Clone_-_Mark_2_rvaaxv.mp4"
              poster={primevideo}
              width="100%"
              controls
            ></video>
            <title>Prime Video Clone</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">HTML, CSS, Javascript.</p>
            </div>
            <div className="card-footer">
              <a
                href="https://www.linkedin.com/posts/mukesh-sharma400_html5-css3-javascripts-activity-6878371132295176192-yOfl?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-outline-primary">
                  View on LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">Netflix Clone</h4>
            </div>
            <video
              src="https://res.cloudinary.com/mksh400/video/upload/v1677432866/Portfolio/Netflix_Clone_-_Mark_2_v26jzf.mp4"
              poster={netflix}
              width="100%"
              controls
            ></video>
            <title>Netflix Clone</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">HTML, CSS, Javascript.</p>
            </div>
            <div className="card-footer">
              <a
                href="https://www.linkedin.com/posts/mukesh-sharma400_html5-css3-javascripts-activity-6878369584336965633-EICB?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-outline-primary ">
                  View on LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
