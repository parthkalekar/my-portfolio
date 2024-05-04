import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./ContactMe.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactMe = ({ setViewLoader, activateToaster, setToasterMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    description: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setViewLoader(true);
    try {
      setViewLoader(true);
      const apiResponse = await axios.post(
        process.env.REACT_APP_BASE_URL,
        formData
      );
      if (apiResponse?.data?.result) {
        setViewLoader(false);
        setToasterMessage("Thank you for contacting me ❤️");
        activateToaster();
        setFormData({
          name: "",
          email: "",
          website: "",
          description: "",
        });
      } else {
        setViewLoader(false);
        setToasterMessage(
          "Something went wrong...❗, Contact me on email or phone instead"
        );
        activateToaster();
        setFormData({
          name: "",
          email: "",
          website: "",
          description: "",
        });
      }
    } catch (error) {
      setViewLoader(false);
      setToasterMessage(
        "Something went wrong...❗, Contact me on email or phone instead"
      );
      activateToaster();
      setFormData({
        name: "",
        email: "",
        website: "",
        description: "",
      });
    }
  };

  return (
    <section className="container" id="contactme">
      <h1 className="w4 xxl sec-head contacthead">
        Contact <strong className="w8">Me</strong>
      </h1>
      <form className="form-part" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          className="txt-field"
          placeholder="Your name *"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          className="txt-field"
          placeholder="Email *"
        />
        <input
          type="text"
          name="website"
          className="txt-field"
          onChange={handleChange}
          value={formData.website}
          placeholder="Your Website(If Exists)"
        />
        <textarea
          type="text"
          name="description"
          className="txt-field big-txtbox"
          onChange={handleChange}
          value={formData.description}
          required
          minLength={20}
          maxLength={150}
          placeholder="How can I Help you? *"
        />
        <div className="form-footer">
          <input type="submit" value="Get in Touch" className="x submitbtn" />
          <div className="icons-list-inform">
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
        </div>
      </form>
      <div className="form-right-part">
        <h1 className="xxl">
          Let's <span className="stroke">Talk</span> For <br /> Something
          Special
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          distinctio facere natus non, sed beatae aliquid repellat accusantium
          est eligendi rerum cupiditate nostrum nobis quia porro dicta neque vel
          velit!
        </p>
        <h1 className="xl m0 email">parthkalekar2002@gmail.com</h1>
        <h1 className="xl m0 phone">+91 9284701776</h1>
      </div>
    </section>
  );
};

export default ContactMe;
