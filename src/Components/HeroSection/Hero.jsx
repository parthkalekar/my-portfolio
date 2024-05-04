import React from "react";
import "./Hero.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import VectorImage from "../../Assets/herovector.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <article className="container" id="hero">
      <aside className="flex-column rightpart">
        <h1 className="xxl w4 m0">
          Hello I'm <strong className="xxl w8">Parth Kalekar</strong>
        </h1>
        <h1 className="xxl m0">
          Full <span className="stroke w8">Stack Developer</span>
        </h1>
        <h1 className="xxl m0 w4">
          Based in <span className="w8">India</span>
        </h1>
        <article className="description">
          Welcome to my portfolio! <br />I am a proficient Full Stack Developer with expertise in Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript, MySQL, Git, and GitHub. Currently, I am gaining valuable experience as a Backend Developer Intern. My journey in web development has equipped me with the skills to build robust and dynamic applications, leveraging modern technologies to create seamless user experiences. Explore my projects and learn more about my passion for coding and problem-solving in the world of web development.
        </article>
        <div className="icons-list">
          <Link
            className="linktag"
            to="https://www.linkedin.com/in/parth-kalekar-28205018b/"
            target="_blank"
          >
            <FaLinkedinIn className="icon" />
          </Link>
          <Link
            className="linktag"
            to="https://github.com/parthkalekar"
            target="_blank"
          >
            <FaGithub className="icon" />
          </Link>
          <Link
            className="linktag"
            to="mailto:parthkalekar2002@gmail.com"
            target="_blank"
          >
            <FaEnvelope className="icon" />
          </Link>
          <Link
            className="linktag"
            to="https://wa.me/918600411144"
            target="_blank"
          >
            <FaWhatsapp className="icon" />
          </Link>
        </div>
      </aside>
      <aside className="hero-img">
        <img src={VectorImage} alt="" />
      </aside>
    </article>
  );
};

export default Hero;
