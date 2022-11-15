import React from 'react';
import { FaCode, FaEye, FaGithub } from 'react-icons/fa';
import './projects.css';

function Projects() {
  return (
    <section className="section" id="Projects">
      <div className="container-info">
        <h2>Projects</h2>
      </div>

      <div className="container-card">
        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458284/Todo_vxum70.png" />
          </div>
          <div className="card-title">
            <h3>Todo Machine</h3>
          </div>
          <div className="card-description">
            <p>
              Todo Machine is a web app made in React.js. A task list with the
              functions to add, delete and remove our tasks.
            </p>
          </div>
          <div className="contact">
            <a href="https://react-fy4yfv.stackblitz.io/">
              <FaEye />
            </a>
            <a href="https://github.com/Candelo30/Todo-Machine">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458287/birds_nq1o71.png" />
          </div>
          <div className="card-title">
            <h3>Aves</h3>
          </div>
          <div className="contact"></div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458287/Articlehtml_emisul.png" />
          </div>
          <div className="card-title"></div>
          <div className="contact"></div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458285/Colo-colo_h83mgk.png" />
          </div>
          <div className="card-title"></div>
          <div className="contact"></div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458284/computer-2_xobt80.png" />
          </div>
          <div className="card-title"></div>
          <div className="contact"></div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668458284/computer_bb2eey.png" />
          </div>
          <div className="card-title"></div>
          <div className="contact"></div>
        </div>
      </div>
    </section>
  );
}

export { Projects };
