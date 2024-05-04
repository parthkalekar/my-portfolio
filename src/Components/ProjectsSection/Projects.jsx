import React from "react";
import "./Projects.css";
// import ProjectCard from "./ProjectCard";
import { FaMeteor } from "react-icons/fa";
import Proj01 from '../../Assets/Project01.jpg'



const Projects = () => {

  return (
    <section className="container" id="projects">
      <h1 className="w4 xxl sec-head">
        My <strong className="w8">Projects</strong>
      </h1>

      <div className="project-parent">
        <div className="project-img">
          <img
            src={Proj01}
            className="proj-img"
            alt=""
          />
        </div>
        <div className="project-text">
          <h1 className="xxxl m0">01</h1>
          <h1 className="x">Shophub (An eCommerce webApp)</h1>
          <p className="l proj-desc">
          Led frontend development of a ReactJS-based e-commerce web
            application for a college major project, encompassing user interface
            design and implementation.Integrated Strapi for content management
            and Stripe Payment Gateway for secure transactions within the
            e-commerce platform. </p>
          <FaMeteor />
        </div>
      </div>
      {/* <div className="project-parent">
        <div className="project-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj2H90MZyLewmfh2BISrA-rKoULeQyO181OtZslSK5g&s"
            className="proj-img"
            alt=""
          />
        </div>
        <div className="project-text">
          <h1 className="xxxl m0">01</h1>
          <h1 className="x">Shophub (An eCommerce webApp)</h1>
          <p className="l proj-desc">
          Led frontend development of a ReactJS-based e-commerce web
            application for a college major project, encompassing user interface
            design and implementation.Integrated Strapi for content management
            and Stripe Payment Gateway for secure transactions within the
            e-commerce platform.
          </p>
          <FaMeteor />
        </div>
      </div> */}
      
    </section>
  );
};

export default Projects;
