import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="experience-card">
          <h2>Experience</h2>
          <h3>Part-Time Worker – Ticket Taker</h3>
          <p className="date">Sep 2025 – Present | Nutter Center, Wright State University</p>
          <ul>
            <li>Manage visitor entry and ticketing, providing customer service and support during events.</li>
            <li>Answer phone calls and assist attendees, ensuring smooth operations.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Innovation Entrepreneurship Incubation Center</h3>
          <p className="date">Jun 2021 – May 2024</p>
          <ul>
            <li>Assisted in planning and executing entrepreneurship projects.</li>
            <li>Contributed innovative ideas to support team collaboration and project initiatives.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Volunteer, National Service Scheme (NSS)</h3>
          <p className="date">Jun 2022 – Feb 2024</p>
          <ul>
            <li>Provided assistance in academic and administrative activities within the college.</li>
            <li>Supported campus events and student engagement programs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
