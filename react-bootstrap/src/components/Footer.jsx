import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 " >
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} NEWS Portal. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
