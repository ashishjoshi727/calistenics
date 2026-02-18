import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      {/* Left Side: Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you’re curious about adopting a
          pet, volunteering, or have any questions, we’re here to help.
        </p>

        <div className="item">
          <span>📍</span> 123 Pet Lane, Paw City, PC 10101
        </div>
        <div className="item">
          <span>📞</span> (123) 456-7890
        </div>
        <div className="item">
          <span>✉️</span> info@petadoption.com
        </div>
      </div>

      {/* Right Side: Illustration */}
      <div className="illustration">
        {/* Replace image src with a cat/dog image of your choice */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Cute Dog Saying Hello"
        />
        <p className="hello-text">🐶 Hello!</p>
      </div>
    </section>
  );
}

export default Contact;
