import React from "react";
import Download from "../../Assets/download.svg";
import {MdDehaze, MdDownload} from "react-icons/md"

import "./Navbar.css";
import { Link } from "react-router-dom";
import ICON from "../../Assets/ICON_LOGO.jpg";

const Navbar = ({viewCollapse,setViewCollapse}) => {

  return (
    <nav className="container space-between" id="navbar">
      <div className="logo-section">
        <img className="logo" src={ICON} alt="" /> Parth Kalekar
      </div>
      <div className="navmenu-main">
        <a href="#aboutme" className="flat navmenu linktag">
          About Me
        </a>
        <a href="#skills" className="flat navmenu linktag">
          Skills
        </a>
        <a href="#experience" className="flat navmenu linktag">
          Experience
        </a>
        <a href="#projects" className="flat navmenu linktag">
          Projects
        </a>
        <a href="#contactme" className="flat navmenu linktag">
          Contact Me
        </a>
      </div>
      <div>
        <Link
          className="linktag"
          to="https://drive.google.com/file/d/1U8dJoN4VDOK1m11V7M_r0Kfn6EWYE9Yg/view?usp=sharing"
          target="_blank"
        >
          <button className="flat resumebtn">
            Resume
            <img src={Download} alt="" className="inline-icon" />
          </button>
        </Link>
      </div>

      {!viewCollapse && (
        <div className="collapse-menu">
          <MdDehaze className="col-menu-btn" onClick={() =>{setViewCollapse(true)}}/>
        </div>
      )}

      {viewCollapse && (
        <div className="collapse">
          <div className="col-logo-section">
            <img className="col-logo" src={ICON} alt="" />
            <button className="col-btn" onClick={() =>{setViewCollapse(false)}}>X</button>
          </div>
          <div className="col-navmenu">
          <a href="https://drive.google.com/file/d/1N-REzr0HxKrAdDrvUzrNh5RMxv9ya8fM/view" target="_blank" className="w6 col-navoption col-resume" onClick={()=>{setViewCollapse(false)}}>
              Resume <MdDownload />
            </a>
            <a href="#aboutme" className="w6 col-navoption " onClick={()=>{setViewCollapse(false)}}>
              About Me
            </a>
            <a href="#skills" className="w6 col-navoption " onClick={()=>{setViewCollapse(false)}}>
              Skills
            </a>
            <a href="#experience" className="w6 col-navoption " onClick={()=>{setViewCollapse(false)}}>
              Experience
            </a>
            <a href="#projects" className="w6 col-navoption " onClick={()=>{setViewCollapse(false)}}>
              Projects
            </a>
            <a href="#contactme" className="w6 col-navoption " onClick={()=>{setViewCollapse(false)}}>
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
