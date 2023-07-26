import React from "react";
import "./Footer.css"; // Import the CSS file for custom styles
import { Paper } from "@mui/material";

const Footer = () => {
  return (
    <Paper>
      <footer style={{ backgroundColor: "#788ea1" }} className="commercial-footer mt-2">
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Information</h3>
            <ul className="footer-info">
              <li>1234 Commercial Street</li>
              <li>City, State, Zip Code</li>
              <li>Email: info@company.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Training Program</h3>
            <ul className="footer-links">
              <li><a href="/">Youth Skill Development Training</a></li>
              <li><a href="/">Cross Platform Training</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Upskill Training</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Subscribe to Our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="follow-us text-end m-4">
        Follow Us:{" "}
        <a
          href="https://www.facebook.com/yourfacebookpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <BiFacebook /> */}
        </a>
        <a
          href="https://www.twitter.com/yourtwitterpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <BiTwitter /> */}
        </a>
        <a
          href="https://www.instagram.com/yourinstagrampage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-youtube"></i>
        </a>
      </div>
      <div className="commercial-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                © 2023 Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </Paper>
  );
};

export default Footer;
