import React from "react";

const Resume = () => {
  return (
    <div className="download--resume">
      <a
        href="https://drive.google.com/file/d/1c0wQxxorYhVm7NzCapEUuIgs4NhrEFHS/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill button"
        >
          <span>
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
          </span>
        </button>
      </a>
    </div>
  );
};

export default Resume;
