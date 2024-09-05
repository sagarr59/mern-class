import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container text-center">
        <div className="row">
          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/aboutUs" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/contactUs" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@retrojerseys.com</p>
            <p>Phone: +977-9818197270</p>
            <p>Address: Tinthana, Chandragiri-15, Kathmandu</p>
          </div>
          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-2">
              <FaFacebookF />
            </a>
            <a href="https://tiktok.com" className="text-white me-2">
              <FaTiktok />
            </a>
            <a href="https://instagram.com" className="text-white me-2">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" className="text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
        <hr className="bg-white" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} RETRO JERSEYS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
