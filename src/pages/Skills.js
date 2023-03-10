import React from "react";
import { Link } from "react-router-dom";
import skills from "../assets/skills.svg";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/expressjs.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import material from "../assets/material.png";
import chakra from "../assets/chakra.png";
import c from "../assets/c.png";
import cplus from "../assets/cplus.png";
import csharp from "../assets/csharp.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import aspnet from "../assets/aspnet.png";
import r from "../assets/r.png";
import laravel from "../assets/laravel.png";
import kotlin from "../assets/kotlin.png";
import excelvba from "../assets/excelvba.png";
import Resume from "../components/Resume";

const Skills = () => {
  return (
    <div>
      <Resume />
      <div className="pt-5 mt-5 container container-fluid">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={skills}
              className="d-block mx-lg-auto img-fluid"
              alt="skills"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4">
              I Create Responsive and Modern Websites
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="pb-2 border-bottom">Tech Stack</h2>
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 flex-lg-row-reverse">
            <div className="col d-flex flex-column align-items-start gap-2">
              <h3 className="fw-bold">What is MERN Stack ?</h3>
              <p className="text-muted">
                MERN stands for MongoDB, Express, React, Node, after the four
                key technologies that make up the stack. MongoDB — document
                database. Express(.js) — Node.js web framework. React(.js) — a
                client-side JavaScript framework.
              </p>
              <Link to="/projects" className="btn btn-primary btn-lg">
                See Projects Now !
              </Link>
            </div>
            <div className="col">
              <div className="row row-cols-2 g-4">
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={mongodb} alt="mongodb" />
                  </div>
                  <h4 className="fw-semibold mb-0">MongoDB</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={expressjs} alt="expressjs" />
                  </div>
                  <h4 className="fw-semibold mb-0">ExpressJS</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={reactjs} alt="reactjs" />
                  </div>
                  <h4 className="fw-semibold mb-0">ReactJS</h4>
                </div>
                <div className="col d-flex flex-column gap-2 align-items-center">
                  <div className="d-inline-flex align-items-center rounded-3">
                    <img src={nodejs} alt="nodejs" />
                  </div>
                  <h4 className="fw-semibold mb-0">NodeJS</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pb-2 border-bottom">Web Languages</h2>
        <div className="d-flex flex-wrap m-auto justify-content-between py-5">
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={html} className="card-img-top" alt="html" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">HTML</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={css} className="card-img-top" alt="css" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">CSS</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={javascript} className="card-img-top" alt="javascript" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">JAVASCRIPT</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={sass} className="card-img-top" alt="sass" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">SASS</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={bootstrap} className="card-img-top" alt="bootstrap" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">
                BOOTSTRAP CSS
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={tailwind} className="card-img-top" alt="tailwind" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">
                TAILWIND CSS
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={material} className="card-img-top" alt="material" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">
                MATERIAL UI
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={chakra} className="card-img-top" alt="chakra" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">CHAKRA UI</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={laravel} className="card-img-top" alt="laravel" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">LARAVEL</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={aspnet} className="card-img-top" alt="aspnet" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">ASP.NET</p>
            </div>
          </div>
        </div>
        <h2 className="pb-2 border-bottom">Programming Languages</h2>
        <div className="d-flex flex-wrap m-auto justify-content-between py-5">
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={c} className="card-img-top" alt="c" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">C</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={cplus} className="card-img-top" alt="cplus" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">C++</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={csharp} className="card-img-top" alt="csharp" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">C#</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={python} className="card-img-top" alt="python" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">PYTHON</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={java} className="card-img-top" alt="java" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">JAVA</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={r} className="card-img-top" alt="r" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">R</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={kotlin} className="card-img-top" alt="kotlin" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">KOTLIN</p>
            </div>
          </div>
          <div
            className="card shadow-sm mb-4 languages"
            style={{ width: "8rem" }}
          >
            <img src={excelvba} className="card-img-top" alt="excelvba" />
            <div className="card-body">
              <p className="card-text text-center text-uppercase">EXCEL VBA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
