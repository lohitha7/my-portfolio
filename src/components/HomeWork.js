import React, { useState, useEffect } from "react";
import Projects from "./Work/Projects";
import Publications from "./Work/Publications";
import Experience from "./Work/Experience";
import Certificates from "./Work/Certificates";
import Skills from "./Work/Skills";
import "./HomeWork.css";

export default function HomeWork() {
  const [activeSection, setActiveSection] = useState(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, Lohitha here";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) index = 0;
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Helper to render inner section
  const renderInnerSection = (Component) => (
    <div className="inner-section fade-slide-in">
      <button className="back-btn" onClick={() => setActiveSection(null)}>← Back</button>
      <Component setActiveSection={setActiveSection} />
    </div>
  );

  // Render inner pages if clicked
  if (activeSection === "projects") return renderInnerSection(Projects);
  if (activeSection === "publications") return renderInnerSection(Publications);
  if (activeSection === "experience") return renderInnerSection(Experience);
  if (activeSection === "certificates") return renderInnerSection(Certificates);
  if (activeSection === "skills") return renderInnerSection(Skills);

  // Main page
  return (
    <div className="homework-wrapper">
      {/* Home Section */}
      <section className="home-section">
        <div className="portfolio-logo">My Portfolio</div>
        <div className="home-container">
          <div className="home-left">
           <h1 className="hello-text">{typedText}</h1>

<p>
  I'm a Master's student in Computer Science at Wright State University in Ohio. Expected graduation between Dec 2026 and May 2027.
</p>
<p>
  I have worked on React projects, Machine Learning projects, and Databases. I'm eager to learn more about AI and ML. Certifications prove my dedication, and hackathon participation shows I'm a hard worker who enjoys learning and improving through coding.
</p>

          </div>

          <div className="home-right-vertical">
            <div className="vertical-box">
              <a href="https://drive.google.com/file/d/1uhXw9ECgmSmTjghgjgQKZgG5qnUZAVIC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="vertical-box">
              <a href="https://github.com/lohitha7" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div
              className="vertical-box"
              onClick={() => {
                const work = document.getElementById("work-section");
                if (work) work.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See My Work
            </div>
            <div
              className="vertical-box"
              onClick={() => {
                const contact = document.getElementById("contact-section");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section" id="work-section">
        <div className="work-intro">
          <p>This is the work I have done. Go through it!</p>
          <p>You can see my Projects, Publications, Certificates, Skills, and Experience below.</p>
        </div>
        <div className="work-content">
          <div className="work-item left">
            <div className="square-card" onClick={() => setActiveSection("projects")}>📁</div>
            <div className="work-text">Projects I have done in ML, React, and Databases.</div>
          </div>
          <div className="work-item right">
            <div className="square-card" onClick={() => setActiveSection("publications")}>📄</div>
            <div className="work-text">Publications and papers in AI and CS domains.</div>
          </div>
          <div className="work-item left">
            <div className="square-card" onClick={() => setActiveSection("certificates")}>🎓</div>
            <div className="work-text">Certifications in React, ML, and Cloud technologies.</div>
          </div>
          <div className="work-item right">
            <div className="square-card" onClick={() => setActiveSection("skills")}>🛠️</div>
            <div className="work-text">Skills: Python, React, Node.js, AWS, Git, MySQL, MongoDB.</div>
          </div>
          <div className="work-item left">
            <div className="square-card" onClick={() => setActiveSection("experience")}>💼</div>
            <div className="work-text">Experience in tech events, internships, and research work.</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact-section">
        <p>I’m open to internships, projects, and collaborative opportunities.</p>
        <p>Feel free to reach out — I’ll respond as soon as possible.</p>
        <div className="contact-boxes">
          <div className="contact-box">
            <a href="mailto:lohithareddyd@gmail.com">lohithareddyd@gmail.com</a>
          </div>
          <div className="contact-box">
            <a href="https://www.linkedin.com/in/lohitha-donuri-31405b216/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
