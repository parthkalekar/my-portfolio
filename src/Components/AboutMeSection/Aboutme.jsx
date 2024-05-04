import React from "react";
import "./Aboutme.css";
import VectorImage from "../../Assets/Vector_2.png";

const Aboutme = () => {
  return (
    <section className="container" id="aboutme">
      <div className="rightimg">
        <img src={VectorImage} alt="" className="vector-img" />
      </div>
      <div id="leftpart">
        <h1 className="w4 xxl ">
          About <strong className="w8">Me</strong>
        </h1>
        <p className="aboutme-desc ">
          <span className="para l">
            I'm Parth Kalekar, a passionate backend developer currently honing my
            skills through an internship. My expertise lies in building robust
            web applications using a range of technologies, including Node.js,
            MongoDB, Express.js, React.js, HTML, CSS, JavaScript, MySQL, and
            version control with Git/GitHub.
          </span>
          <span className="para l">
          During my internship, I'm diving deep into backend development, applying my knowledge of Node.js and Express.js to craft efficient and scalable server-side solutions. Working with MongoDB and MySQL databases, I ensure data integrity and optimal performance for applications.


          </span>
          <span className="para l">
          My journey into web development began with a fascination for crafting dynamic and engaging user experiences. I leverage React.js to bring these ideas to life, creating responsive frontends that resonate with users.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
