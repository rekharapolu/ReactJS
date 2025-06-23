import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faShieldAlt, faFileAlt, faQrcode } from "@fortawesome/free-solid-svg-icons";


const Section = () => {
  return (
    <Fragment>
      <h1 id="h1">Xiaomi Support</h1>
      <section id="body">
        <article className="hover">
          <div>
            <FontAwesomeIcon icon={faHeadset} style={{ color: "#6f7276" }} />
          </div>
          <h2>Customer Support</h2>
          <p>Contact us via live-chat, email, and phone call.</p>
        </article>
        <article className="hover">
          <div>
            <FontAwesomeIcon icon={faShieldAlt} style={{ color: "#6f7276" }} />
          </div>
          <h2>Warranty</h2>
          <p>Local warranty policy protection is provided.</p>
        </article>
        <article className="hover">
          <div>
            <FontAwesomeIcon icon={faFileAlt} style={{ color: "#6f7276" }} />
          </div>
          <h2>User Guides</h2>
          <p>Find and download your Xiaomi product user guide.</p>
        </article>
        <article className="hover">
          <div>
            <FontAwesomeIcon icon={faQrcode} style={{ color: "#6f7276" }} />
          </div>
          <h2>FAQ</h2>
          <p>Search for help about Xiaomi.</p>
        </article>
      </section>
    </Fragment>
  );
};

export default Section;
