import React from "react";
import "./Skills.css";
import { FaGitAlt, FaReact, FaJs, FaNode, FaHtml5, FaCss3, FaLeaf, FaGithub , FaDatabase} from "react-icons/fa";
import { FaExclamation } from 'react-icons/fa6'
const Skills = () => {
  return (
    <section className="container" id="skills">
      <h1 className="w4 xxl sec-head">
        My <strong className="w8">Skills</strong>
      </h1>
      <div className="card-container">
        <div className="card">
          <FaGitAlt className="incardicon" />
          <h1>Git</h1>
        </div>
        <div className="card">
          <FaReact className="incardicon" />
          <h1>ReactJs</h1>
        </div>
        <div className="card">
          <FaJs className="incardicon" />
          <h1>Javascript</h1>
        </div>
        <div className="card">
          <FaNode className="incardicon" />
          <h1>NodeJs</h1>
        </div>
        <div className="card">
          <FaHtml5 className="incardicon" />
          <h1>HTML5</h1>
        </div>
        <div className="card">
          <FaCss3 className="incardicon" />
          <h1>CSS 3</h1>
        </div>
        <div className="card">
          <FaLeaf className="incardicon" />
          <h1>MongoDB</h1>
        </div>
        <div className="card">
          <FaGithub className="incardicon" />
          <h1>Github</h1>
        </div>
        <div className="card">
          <FaExclamation className="incardicon" />
          <h1>ExpressJs</h1>
        </div>
        <div className="card">
          <FaDatabase className="incardicon" />
          <h1>MySQL</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
