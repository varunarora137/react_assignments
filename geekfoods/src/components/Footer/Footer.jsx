import "./Footer.css";
import logoIpsum from "../../assets/logoipsum.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <img src={logoIpsum} alt="img" />
      <div className="footerContent">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
      </div>
      <div className="footerNavigation">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footerLogo">
        <a href="">
          <FontAwesomeIcon
            icon={faFacebook}
            onMouseOver={(e) => (e.target.style.color = "#666e7b")}
            onMouseOut={(e) => (e.target.style.color = "#374151")}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faInstagram}
            onMouseOver={(e) => (e.target.style.color = "#666e7b")}
            onMouseOut={(e) => (e.target.style.color = "#374151")}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faTwitter}
            onMouseOver={(e) => (e.target.style.color = "#666e7b")}
            onMouseOut={(e) => (e.target.style.color = "#374151")}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faGithub}
            onMouseOver={(e) => (e.target.style.color = "#666e7b")}
            onMouseOut={(e) => (e.target.style.color = "#374151")}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faBasketball}
            onMouseOver={(e) => (e.target.style.color = "#666e7b")}
            onMouseOut={(e) => (e.target.style.color = "#374151")}
          />
        </a>
      </div>
    </div>
  );
}
export default Footer;
