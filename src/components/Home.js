import React from "react";
import "./Home.css";
import HomeWork from "./HomeWork";

export default function Home() {
  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-left">
          <h1>Hello, Lohitha here 👋</h1>
          <p>
            I'm a Master's student in Computer Science at Wright State University, Ohio. 
            Expected graduation between Dec 2026 and May 2027.
          </p>
          <p>
            I’ve worked on React projects, Machine Learning models, and Databases. 
            I’m eager to dive deeper into AI/ML, while certifications highlight my dedication 
            and hackathon experience proves I love solving problems through coding.
          </p>
          <div className="resume-box">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              📄 Resume
            </a>
          </div>
        </div>

        {/* Right side illustration */}
        <div className="intro-right">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/programming-6296893-5207670.png"
            alt="Tech Illustration"
            className="intro-img"
          />
        </div>
      </section>

      {/* Work + Contact sections */}
      <HomeWork />
    </div>
  );
}
