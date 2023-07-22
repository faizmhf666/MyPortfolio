import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0sscxso",
        "template_eddo0jj",
        form.current,
        "2OtesAymt5wLGrsSz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="form-container">
      <Navbar />
      <div className="contact-form">
        <form onSubmit={sendEmail} ref={form} className="login-form-card">
          <div className="form-element">
            <label htmlFor="name" className="form-label">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name Here"
              className="input-box"
            />
          </div>
          <div className="form-element">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email Here"
              className="input-box"
            />
          </div>
          <div className="form-element">
            <label htmlFor="Message" className="form-label">
              Message*
            </label>
            <textarea
              type="text"
              id="Message"
              name="Message"
              rows="7"
              cols="50"
              placeholder="Your Message Here"
              className="input-box"
            />
          </div>
          <button type="submit" className="btn btn-1">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
