import React, { useState } from "react";
import Projects from "./Projects";
import Publications from "./Publications";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Skills from "./Skills"; // import Skills
import "./BigCardGrid.css";

const icons = {
  projects: "📁",
  publications: "📄",
  experience: "💼",
  certificates: "🎓",
  skills: "🛠️"
};

export default function Work() {
  const [activeSection, setActiveSection] = useState(null);

  if (activeSection === "projects")
    return <Projects onBack={() => setActiveSection(null)} />;
  if (activeSection === "publications")
    return <Publications onBack={() => setActiveSection(null)} />;
  if (activeSection === "experience")
    return <Experience onBack={() => setActiveSection(null)} />;
  if (activeSection === "certificates")
    return <Certificates onBack={() => setActiveSection(null)} />;
  if (activeSection === "skills")
    return <Skills onBack={() => setActiveSection(null)} />;

  return (
    <div className="square-grid">
      <button className="square-card" onClick={() => setActiveSection("projects")}>
        <div className="square-icon">{icons.projects}</div>
        <div className="square-title">Projects</div>
      </button>

      <button className="square-card" onClick={() => setActiveSection("publications")}>
        <div className="square-icon">{icons.publications}</div>
        <div className="square-title">Publications</div>
      </button>

      <button className="square-card" onClick={() => setActiveSection("experience")}>
        <div className="square-icon">{icons.experience}</div>
        <div className="square-title">Experience</div>
      </button>

      <button className="square-card" onClick={() => setActiveSection("certificates")}>
        <div className="square-icon">{icons.certificates}</div>
        <div className="square-title">Certificates</div>
      </button>

      <button className="square-card" onClick={() => setActiveSection("skills")}>
        <div className="square-icon">{icons.skills}</div>
        <div className="square-title">Skills</div>
      </button>
    </div>
  );
}
