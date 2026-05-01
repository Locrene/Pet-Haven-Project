import React from "react";
import Navbar from "../components/Navbar";
import "../styles/app.css";

function HelpSupport({ isLoggedIn, userName, setIsLoggedIn, setUserName }) {
  return (
    <>
      {/* ✅ NAVBAR */}
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />

      {/* PAGE CONTENT */}
      <div className="help-container">

        <div className="help-header">
          <h1>Help & Support</h1>
          <p>We're here to help you with PawHaven 🐾</p>
        </div>

        <div className="help-content">

          {/* FAQ */}
          <div className="help-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h4>How do I adopt a pet?</h4>
              <p>
                Go to the Adoption page, select a pet, and proceed with booking.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do I need an account?</h4>
              <p>Yes, login is required.</p>
            </div>

            <div className="faq-item">
              <h4>Can I cancel a booking?</h4>
              <p>Yes, via Dashboard.</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="help-card">
            <h2>Contact Us</h2>

            <p><strong>Email:</strong> support@pawhaven.com</p>
            <p><strong>Phone:</strong> +63 912 345 6789</p>
            <p><strong>Location:</strong> Cebu City</p>

            <button className="contact-btn">Send Message</button>
          </div>

          {/* REPORT */}
          <div className="help-card">
            <h2>Report a Problem</h2>

            <textarea placeholder="Describe your issue..." rows="5"></textarea>

            <button className="report-btn">Submit Report</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default HelpSupport;