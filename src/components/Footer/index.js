import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={35} style={{ color: "#fff", marginRight: "2rem" }} />
            <h4>
              2-3-512/A/257, CRN, Amberpet, Hyderabad, Telangana State, India.
              Zip-code: 500013
            </h4>
          </div>
          <div className="location">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <h4>+91-630-553-2618</h4>
          </div>
          <div className="location">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <h4>faizmhf666@outlook.com</h4>
          </div>
        </div>
        <div className="left">
          <h1>About Me</h1>
          <p>
            Hello, I'm M.H. Faiz, an automobile engineer Graduate. My growing
            fascination with the creative aspects of web development led me to
            embark on a journey of self-learning and exploration. I am
            passionate about crafting visually appealing and user-friendly
            websites that leave a lasting impact.
          </p>
          <div className="social">
            <h4>You can connect with me on : </h4>
            <a
              href="https://www.linkedin.com/in/faiz-mohammed-77a896210/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/faizmhf666"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a
              href="https://twitter.com/mhf1997_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a
              href="https://www.instagram.com/zack.the.jack.1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkW1K0PGa5HDp192iB8QbZQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
