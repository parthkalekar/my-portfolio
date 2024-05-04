import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./ContactMe.css";
import { Link } from "react-router-dom";

const ContactMe = ({ setViewLoader, activateToaster, setToasterMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setViewLoader(true);

    setTimeout(() => {
      setViewLoader(false);
      setToasterMessage("Thank you for Contacting Me ❤️");
      // setToasterMessage(`Something went wrong...❗, Contact me on email or phone instead`);
      activateToaster();
    }, 2000);

    // alert("Backend Functionality is under Construction...❗❗❗");
  };

  return (
    <section className="container" id="contactme">
      <h1 className="w4 xxl sec-head contacthead">
        Contact <strong className="w8">Me</strong>
      </h1>
      <form className="form-part" onSubmit={handleSubmit}>
        <input type="text" className="txt-field" placeholder="Your name *" />
        <input type="text" className="txt-field" placeholder="Email *" />
        <input
          type="text"
          className="txt-field"
          placeholder="Your Website(If Exists)"
        />
        <textarea
          type="text"
          className="txt-field big-txtbox"
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
