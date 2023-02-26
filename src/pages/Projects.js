import React from "react";
import netflix from "../assets/Netflix Clone - Mark 2 - Thumbnail.png";
import prime from "../assets/Prime Video Clone - Mark 2 -  Tumbnail.png";
import ecommerce from "../assets/E-Commerce Web App - Thumbnail.jpg";
// import socialnetwork from "../assets/SocialNetwork - Functionalities Mark 2 - Thumbnail.jpg";
// import stack from "../assets/Stack-Overflow-Clone-Thumbnail.jpg";
// import memorise from "../assets/Memories - Thumbnail.jpg";

const Projects = () => {
  return (
    <div className="pt-5 mt-5 container container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
        {/* <div className="col">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>
            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div> */}

        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">E-Commerce Web App</h4>
            </div>
            <img
              className="bd-placeholder-img"
              width="100%"
              height="225"
              src={ecommerce}
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>E-Commerce Web App</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">
                ReactJS, Firebase, Firestore, Context API, AJAX, React Hooks,
                Express, CORS, NodeJS, REST full API.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary">
                View on LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">Prime Video Clone</h4>
            </div>
            <img
              className="bd-placeholder-img"
              width="100%"
              height="225"
              src={prime}
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Prime Video Clone</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">HTML, CSS, Javascript.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary">
                View on LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100 rounded-3">
            <div className="card-header">
              <h4 className="text-center">Netflix Clone</h4>
            </div>
            <img
              className="bd-placeholder-img"
              width="100%"
              height="225"
              src={netflix}
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
            <title>Netflix Clone</title>
            <div className="card-body">
              <h6>Build using -</h6>
              <p className="card-text">HTML, CSS, Javascript.</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary ">
                View on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
