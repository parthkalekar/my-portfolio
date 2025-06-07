import React from "react";
import "./Skills.css";
import { FaGitAlt, FaReact, FaJs, FaNode, FaHtml5, FaCss3, FaLeaf, FaGithub , FaDatabase, FaPython} from "react-icons/fa";
import {SiExpress , SiGithubactions, SiSocketdotio, SiFirebase  } from 'react-icons/si'
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="container" id="skills">
      <h1 className="w4 xxl sec-head">
        My <strong className="w8">Skills</strong>
      </h1>
      <div className="card-container">
        
        
       
        <div className="card">
          <FaHtml5 className="incardicon" />
          <h1>HTML5</h1>
        </div>
        <div className="card">
          <FaCss3 className="incardicon" />
          <h1>CSS 3</h1>
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
          <FaPython className="incardicon" />
          <h1>Python</h1>
        </div>
        <div className="card">
          <SiExpress className="incardicon" />
          <h1>ExpressJs</h1>
        </div>
        <div className="card">
          <FaLeaf className="incardicon" />
          <h1>MongoDB</h1>
        </div>
        <div className="card">
          <FaDatabase className="incardicon" />
          <h1>MySQL</h1>
        </div>
        <div className="card">
          <FaReact className="incardicon" />
          <h1>ReactJs</h1>
        </div>
        <div className="card">
          <TbBrandReactNative className="incardicon" />
          <h1>React Native</h1>
        </div>
        <div className="card">
          <FaGitAlt className="incardicon" />
          <h1>Git</h1>
        </div>
        <div className="card">
          <FaGithub className="incardicon" />
          <h1>Github</h1>
        </div>
         <div className="card">
          <SiGithubactions className="incardicon" />
          <h1>Github Actions</h1>
        </div>
         <div className="card">
          <SiSocketdotio className="incardicon" />
          <h1>Socket IO</h1>
        </div>
         <div className="card">
          <SiFirebase className="incardicon" />
          <h1>Firebase</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
