import React from "react";
import "./Contact.css";

export default function Contact({ onBack }) {
  return (
    <div className="contact-container">
      {onBack && <button className="back-btn" onClick={onBack}>← Back</button>}

      <h2>Connect with Me</h2>
      
      {/* Professional lines */}
      <p>I’m open to internships, freelance projects, and collaborative opportunities.</p>
      <p>Feel free to reach out—I’m responsive and always eager to discuss new ideas.</p>

      <div className="contact-card">
        <h4>Email</h4>
        <p><a href="mailto:lohitha@example.com">lohitha@example.com</a></p>
      </div>

      <div className="contact-card">
        <h4>GitHub</h4>
        <p><a href="https://github.com/lohitha7" target="_blank" rel="noopener noreferrer">github.com/lohitha7</a></p>
      </div>

      <div className="contact-card">
        <h4>LinkedIn</h4>
        <p><a href="https://linkedin.com/in/lohitha-donuri" target="_blank" rel="noopener noreferrer">linkedin.com/in/lohitha-donuri</a></p>
      </div>
    </div>
  );
}
