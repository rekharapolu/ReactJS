import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Fragment>
      <nav id="nav">
        <div>
          <ul>
            <li className="svg-container">
              <div style={{ maxWidth: "32px", maxHeight: "32px" }}>
                <svg className="svg-one" viewBox="0 0 112 112" version="1.1">
                  <g fill="#ff6900">
                    <path d="M100.326,11.702 C89.76,1.176 74.566,0 56,0 C37.41,0 22.194,1.19 11.632,11.744 C1.072,22.294 0,37.486 0,56.054 C0,74.626 1.072,89.822 11.636,100.376 C22.198,110.932 37.412,112 56,112 C74.588,112 89.8,110.932 100.362,100.376 C110.926,89.82 112,74.626 112,56.054 C112,37.462 110.914,22.254 100.326,11.702 L100.326,11.702 Z"></path>
                  </g>
                  <g fill="#ffffff">
                    <path className="logo__home" d="M57.8054292,26.743366 L57.931608,26.8782679 L81.3680343,53.7784796 C82.7703315,55.3874915 81.6885448,57.872013 79.5991142,57.9952335 L79.4364262,58 L76,58 L76,71.3345882 C76,75.0164706 72.9809524,78 69.2552381,78 L42.7447619,78 C39.0190476,78 36,75.0164706 36,71.3345882 L36,58 L32.5635738,58 C30.4234399,58 29.2530924,55.5557037 30.5289714,53.903922 L30.6319657,53.7784796 L54.068392,26.8782679 C55.0457355,25.754085 56.766743,25.7091177 57.8054292,26.743366 Z"></path>
                  </g>
                </svg>
              </div>
            </li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Wearables</a></li>
            <li><a href="#">SmartHome</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a id="poco" href="#">POCO</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
