import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="container my-5 pt-2">
      <h2 className="display-3 fw-bold mb-4 text-dark text-center">
        Contact Us
      </h2>
      <div className="row">
        {/* Map Location */}
        <div className="col-md-6 mb-4">
          <h5 className="mb-3">Our Location</h5>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.073654014541!2d85.28807887488327!3d27.676708182765448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b1098d63e49%3A0xa2f1b9c3208c1c6b!2sTinthana%2C%20Chandragiri%2044600!5e0!3m2!1sen!2snp!4v1693664661988!5m2!1sen!2snp"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
