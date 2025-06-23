import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faTwitter,
  faInstagramSquare,
  faXingSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div>
          <ul aria-label="Support links">
            <li>
              <h3>SUPPORT</h3>
            </li>
            <li><a href="">Contact us</a></li>
            <li><a href="">User Guide</a></li>
            <li><a href="">Warranty</a></li>
            <li><a href="">International Warranty</a></li>
            <li><a href="">EU Declaration of Conformity</a></li>
            <li><a href="">Scooter Safety Notice</a></li>
            <li><a href="">Android Enterprise Recommended</a></li>
            <li><a href="">Digital Services Act</a></li>
          </ul>
        </div>
        <div>
          <ul aria-label="About us links">
            <li>
              <h3>ABOUT US</h3>
            </li>
            <li><a href="">Xiaomi</a></li>
            <li><a href="">Leadership Team</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Integrity & Compliance</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Sustainability</a></li>
            <li><a href="">Trust Center</a></li>
            <li><a href="">Xiaomi Accessibility</a></li>
            <li><a href="">Xiaomi HyperOS</a></li>
          </ul>
        </div>
        <div>
          <ul aria-label="Xiaomi Projects links">
            <li>
              <h3>XIAOMI PROJECTS</h3>
            </li>
            <li><a href="">Xiaomi Creators</a></li>
            <li><a href="">Xiaomi Studios</a></li>
            <li><a href="">Xiaomi Imagery</a></li>
            <li><a href="">Xiaomi Master Class</a></li>
            <li><a href="">Xiaomi Renovation</a></li>
          </ul>
        </div>
        <div>
          <h3>Follow Xiaomi</h3>
          <div id="icons">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faYoutubeSquare} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faXingSquare} />
          </div>
          <p id="h2">
            Enter your email address to subscribe to our newsletters
          </p>
          <form>
            <input
              type="email"
              className="email-input"
              placeholder="Enter email address"
              required
            />
            <button type="submit" className="email-button">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
