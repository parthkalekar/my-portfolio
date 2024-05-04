import React from "react";
import "./Experience.css";
import { FaReact } from "react-icons/fa";
import HMLOGO from "../../Assets/HM_LOGO.png";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="w4 xxl sec-head">
        My <strong className="w8">Experience</strong>
      </h1>
      <div className="exp-container">
        <article className="exp-part">
          <h1 className="exp-head x m0">
            <span className="exp-title">
              <span className="exp-logo">
                <img className="companylogo" src={HMLOGO} alt="" />
              </span>
              Navonmeshak Hostedminds Techsolutions Pvt. Ltd.
            </span>
            <span className="exp-period l">Dec 2023-Present</span>
          </h1>
          <p className="exp-desc">
            Developed frontend components (Login, Signup, Products, Cart) and
            RESTful APIs for Hostedminds e-commerce web application.Leading API
            development for a College Attendance Management System to streamline
            attendance tracking and reporting.
          </p>
        </article>
        {/* <article className="exp-part">
          <h1 className="exp-head x m0">
            <span className="exp-title">
              <span className="exp-logo">
                <FaYoutube />
              </span>
              ShopHub (an eCommerce Website)
            </span>
            <span className="exp-period l">Dec 2023-Present</span>
          </h1>
          <p className="exp-desc">
            Led frontend development of a ReactJS-based e-commerce web
            application for a college major project, encompassing user interface
            design and implementation.Integrated Strapi for content management
            and Stripe Payment Gateway for secure transactions within the
            e-commerce platform.
          </p>
        </article> */}
        <article className="exp-part">
          <h1 className="exp-head x m0">
            <span className="exp-title">
              <span className="exp-logo">
                <FaReact />
              </span>
              ShopHub (an eCommerce Website)
            </span>
            <span className="exp-period l"> Aug 2023- Nov 2023</span>
          </h1>
          <p className="exp-desc">
          Led frontend development of a ReactJS-based e-commerce web
            application for a college major project, encompassing user interface
            design and implementation.Integrated Strapi for content management
            and Stripe Payment Gateway for secure transactions within the
            e-commerce platform.</p>
        </article>
      </div>
    </section>
  );
};

export default Experience;
