import React from "react";
import ecommerce from "../assets/E-Commerce Web App - Thumbnail.jpg";
import primevideo from "../assets/Prime Video Clone - Mark 2 -  Tumbnail.jpg";
import netflix from "../assets/Netflix Clone - Mark 2 - Thumbnail.jpg";
import memories from "../assets/Memories - Thumbnail.jpg";
import stack from "../assets/Stack-Overflow-Clone-Thumbnail.jpg";
import social from "../assets/SocialNetwork - Functionalities Mark 2 - Thumbnail.jpg";
import Resume from "../components/Resume";

const Projects = () => {
  const topProjects = [
    {
      id: "01",
      title: "Memories",
      thumbnail: memories,
      video:
        "https://res.cloudinary.com/mksh400/video/upload/v1677522816/Portfolio/Memories_jucigw.mp4",
      description:
        "MongoDB, ExpressJS, ReactJS, NodeJS, Google OAuth, Redux, Redux- Thunk, React Hooks, CORS, Context / REST full API and much more.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_mongodb-expressjs-reactjs-activity-7014580015912620032-If1s?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "02",
      title: "Stack Overflow Clone",
      thumbnail: stack,
      video:
        "https://res.cloudinary.com/mksh400/video/upload/v1677522473/Portfolio/Stack-Overflow-Clone_i8ggps.mp4",
      description:
        "MongoDB, ExpressJS, ReactJS, NodeJS, Axios, Redux, Redux-Thunk, React Hooks, CORS, Context / REST full API and much more.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_stack-overflow-clone-web-application-build-activity-7008798443951271936-2tgO?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const olderProjects = [
    {
      id: "01",
      title: "E-Commerce",
      thumbnail: ecommerce,
      video:
        "https://res.cloudinary.com/mksh400/video/upload/v1677433153/Portfolio/E-Commerce_Web_App_vks4xk.mp4",
      description:
        "ReactJS, Firebase, Firestore, Context API, AJAX, React Hooks, Express, CORS, NodeJS, REST full API.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_an-e-commerce-web-application-using-reactjs-activity-6924995740872122368-4EkK?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "02",
      title: "Prime Video Clone",
      thumbnail: primevideo,
      video:
        "https://res.cloudinary.com/mksh400/video/upload/v1677433139/Portfolio/Prime_Video_Clone_-_Mark_2_rvaaxv.mp4",
      description: "HTML, CSS, Javascript.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_html5-css3-javascripts-activity-6878371132295176192-yOfl?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "03",
      title: "Netflix Clone",
      thumbnail: netflix,
      video:
        "https://res.cloudinary.com/mksh400/video/upload/v1677432866/Portfolio/Netflix_Clone_-_Mark_2_v26jzf.mp4",
      description: "HTML, CSS, Javascript.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_html5-css3-javascripts-activity-6878369584336965633-EICB?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 container container-fluid">
        <h2 className="pb-2 border-bottom">Top Applications</h2>
        <div className="row row-cols-1 mb-5">
          <div className="col">
            <div className="card shadow h-100 rounded-3 top--project mx-auto">
              <div className="card-header">
                <h4 className="text-center">SocialNetwork</h4>
              </div>
              <video
                src="https://res.cloudinary.com/mksh400/video/upload/v1677522935/Portfolio/SocialNetwork_-_Functionalities_-_Mark_2_ilzcad.mp4"
                poster={social}
                width="100%"
                controls
              ></video>
              <title>SocialNetwork</title>
              <div className="card-body">
                <h6>Build using -</h6>
                <p className="card-text">
                  MongoDB, ExpressJS, ReactJS, NodeJS, Cloudinary, SendGrid
                  Email API, React Hooks, CORS, Context / REST full API and much
                  more.
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="https://www.linkedin.com/posts/mukesh-sharma400_socialnetwork-web-application-functionalities-activity-6992151675167756288-bqsQ?utm_source=share&utm_medium=member_desktop"
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
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
          {topProjects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card shadow h-100 rounded-3">
                <div className="card-header">
                  <h4 className="text-center">{project.title}</h4>
                </div>
                <video
                  src={project.video}
                  poster={project.thumbnail}
                  width="100%"
                  controls
                ></video>
                <title>{project.title}</title>
                <div className="card-body">
                  <h6>Build using -</h6>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={project.link}
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
          ))}
        </div>
        <h2 className="pb-2 border-bottom">Older Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5 pb-4">
          {olderProjects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card shadow h-100 rounded-3">
                <div className="card-header">
                  <h4 className="text-center">{project.title}</h4>
                </div>
                <video
                  src={project.video}
                  poster={project.thumbnail}
                  width="100%"
                  controls
                ></video>
                <title>{project.title}</title>
                <div className="card-body">
                  <h6>Build using -</h6>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={project.link}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
