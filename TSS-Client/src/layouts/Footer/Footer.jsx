import React from "react";
import "./Footer.css"; // Import the CSS file for custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="/">News</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Training Program</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Youth Skill Development Training</h3>
            {/* Add more content related to Youth Skill Development Training */}
          </div>
          <div className="col-md-3">
            <h3>Cross Platform Training</h3>
            {/* Add more content related to Cross Platform Training */}
          </div>
          <div className="col-md-3">
            <h3>Upskill Training</h3>
            {/* Add more content related to Upskill Training */}
          </div>
        </div>
      </div>
      <div className="get-in-touch">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Get in Touch</h3>
              <input
                type="email"
                placeholder="Enter your email address"
                className="footer-input"
              />
            </div>
            <div className="col-md-6">
              <div className="follow-us">
                Follow Us:{" "}
                <a
                  href="https://www.facebook.com/yourfacebookpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FontAwesomeIcon icon={["fab", "facebook"]} className="social-icon" /> */}
                </a>
                <a
                  href="https://www.twitter.com/yourtwitterpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FontAwesomeIcon icon={["fab", "twitter"]} className="social-icon" /> */}
                </a>
                <a
                  href="https://www.instagram.com/yourinstagrampage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FontAwesomeIcon icon={["fab", "instagram"]} className="social-icon" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                © 2023 BJIT Academy Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
