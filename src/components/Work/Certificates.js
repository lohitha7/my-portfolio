import React from "react";
import "./Certificates.css";

function Certificates({ onBack }) {
  return (
   <div className="certificates-container">
  {/* REMOVE this back button */}
  {/* <button className="back-btn" onClick={onBack}>Back</button> */}

  <div className="certificates-content">
    <div className="certificate-card">
      <h3>AWS Certified Cloud Practitioner</h3>
      <p className="date">Issued: June 2023</p>
      <a
        href="https://drive.google.com/file/d/1WThXB9Dv70EDLaFfIH1K0l6wBkVCxmpk/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="view-btn"
      >
        View Certificate
      </a>
    </div>
  </div>
</div>

  );
}

export default Certificates;
