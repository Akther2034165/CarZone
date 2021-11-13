import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <img
                src="https://i.ibb.co/yXZwNLp/logoss.jpg"
                className="footerImg"
                alt=""
              />
              <p>YOUR TRUSTED CAR AGENT COMPANY</p>
            </div>
            <div className="footer-col">
              <h4>GET HELP</h4>
              <li>
                <i className="fas fa-chevron-right"></i> LOGIN
              </li>
              <li>
                <i className="fas fa-chevron-right"></i> ABOUT US
              </li>
              <li>
                <i className="fas fa-chevron-right"></i> FAQ
              </li>
            </div>
            <div className="footer-col">
              <h4>CONTACT US</h4>
              <li>
                <i className="fas fa-location-arrow"></i> Agrabad , Chittagong
                Bangladesh
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone : +458975834
              </li>
              <li>
                <i className="far fa-clock"></i> Office : 12.00 am - 8.00 pm
              </li>
            </div>
            <div className="footer-col">
              <h4>FOLLOW US</h4>
              <div className="social-link">
                <li>
                  <FacebookOutlinedIcon />
                </li>
                <li>
                  <EmailOutlinedIcon />
                </li>
                <li>
                  <CallOutlinedIcon />
                </li>
              </div>
            </div>
          </div>
          <footer className="text-center">
            &copy; All Right Reserve,CarZone,2021
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
