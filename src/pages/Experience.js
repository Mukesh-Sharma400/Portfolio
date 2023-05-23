import React from "react";
import nullclass from "../assets/nullclass.png";
import hasbasoft from "../assets/hasbasoft.png";
import fiver from "../assets/fiver.png";
import netflix from "../assets/Netflix_Clone.png";
import dice from "../assets/Dice_Game_with_JS.png";
import music from "../assets/Music_with_JS.png";
import ecommerce from "../assets/E-Commerce_Web_App.png";
import training from "../assets/Certificate_of_Training-NullClass.png";
import internship from "../assets/Internship Certificate - NullClass.png";
import Resume from "../components/Resume";

const Experience = () => {
  const certificates = [
    {
      id: "01",
      title: "Certificate of Internship",
      image: internship,
      alt: "certificate_of_internship",
      description:
        "I successfully completed a MERN stack web development internship, earning a certification that demonstrates my proficiency in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_certificate-of-internship-nullclass-activity-7017920222397370368-2D-V?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "02",
      title: "Certificate of Training",
      image: training,
      alt: "certificate_of_training",
      description:
        "I have successfully completed a comprehensive MERN stack web development training program, acquiring in-depth knowledge and skills in MongoDB, Express.js, React, and Node.js.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_stack-overflow-clone-certificate-activity-7013058153118363648-9Ih3?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "03",
      title: "E-Commerce Portal",
      image: ecommerce,
      alt: "certificate_of_ecommerce",
      description:
        "I have received a certification in MERN stack web development, specializing in creating and maintaining e-commerce portal web applications with expertise in MongoDB, Express.js, React.js, and Node.js.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_e-commerce-web-app-certificate-activity-6925358509735706624-owJ5?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "04",
      title: "Dice Game",
      image: dice,
      alt: "certificate_of_dice_game",
      description:
        "Certification obtained for advanced JavaScript-based dice game web application. Demonstrating proficiency in developing interactive and engaging gaming experiences using JavaScript and related technologies.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_javascript-certificate-2-activity-6924316331756388352-g4RC?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "05",
      title: "Music in JavaScript",
      image: music,
      alt: "certificate_of_music_in_javascript",
      description:
        "Certification of music player web application in advance JavaScript. Verified proficiency in developing interactive and seamless music players, utilizing advanced JavaScript techniques for enhanced user experience.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_javascript-certificate-1-activity-6924316178202918912-EBDg?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "06",
      title: "Netflix Like Frontend",
      image: netflix,
      alt: "certificate_of_netflix",
      description:
        "Certification received for creating a Netflix clone web application using HTML and CSS, demonstrating proficiency in frontend development and UI design.",
      link: "https://www.linkedin.com/posts/mukesh-sharma400_frontend-certificate-activity-6924314403915857920-XaND?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <div>
      <Resume />
      <div className="pt-4 mt-5 container container-fluid col-xxl-8">
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={nullclass}
              className="d-block mx-lg-auto img-fluid"
              alt="nullclass"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">Project Intern</h1>
            <h1 className="fw-light">- NullClass</h1>
            <p>
              December 2022 to January 2023{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a NullClass Project Intern, I created a responsive MERN Stack
              app (Stack Overflow Clone) and added features like a chat bot and
              community section. I gained valuable experience in React, Node.js,
              Express.js, and MongoDB, improving my skills in building scalable
              and user-centric web applications.
            </p>
          </div>
        </div>
        <div className="row align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={hasbasoft}
              className="d-block mx-lg-auto img-fluid"
              alt="hasbasoft"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">MERN Stack Software Trainee</h1>
            <h1 className="fw-light">- Hasbasoft Technology Pvt Ltd</h1>
            <p>
              August 2021 to October 2022{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built
              several MERN Stack applications, including an Ecommerce platform.
              Through hands-on experience, I gained expertise in React, Node.js,
              Express.js, and MongoDB, developing dynamic and user-friendly web
              solutions in a professional software development environment.
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse align-items-md-center py-5 g-4 border-bottom">
          <div className="col-md-4 d-md-block mt-0">
            <img
              src={fiver}
              className="d-block mx-lg-auto img-fluid"
              alt="fiver"
              loading="lazy"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1 className="display-4 fw-bold">Freelancer</h1>
            <h1 className="fw-light">- Fiver</h1>
            <p>
              May 2018 to September 2020{" "}
              <span className="text-secondary">( Online )</span>
            </p>
            <p className="mb-0">Achievements/Tasks:</p>
            <p className="lead big--para">
              As a Fiverr freelancer, I excelled in Excel VBA, completing
              diverse tasks for multiple clients. With expertise in automation
              and data manipulation, I delivered efficient and tailored
              solutions, consistently exceeding expectations. Positive feedback
              attests to my strong Excel VBA skills and professionalism.
            </p>
          </div>
        </div>
        <h1 className="mt-5 pb-2 text-center text-uppercase display-4 fw-bold">
          Certificates
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
          {certificates.map((certificate) => (
            <div className="col" key={certificate.id}>
              <div className="card shadow h-100 rounded-3">
                <div className="card-header">
                  <h4 className="text-center">{certificate.title}</h4>
                </div>
                <img src={certificate.image} alt={certificate.alt} />
                <title>{certificate.title}</title>
                <div className="card-body">
                  <p>{certificate.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={certificate.link}
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

export default Experience;
