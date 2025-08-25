import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // adjust for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
      <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
      <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
      <a href="#books" className={activeSection === "books" ? "active" : ""}>Books</a>
      <a href="#hackathons" className={activeSection === "hackathons" ? "active" : ""}>Hackathons</a>
      <a href="#certifications" className={activeSection === "certifications" ? "active" : ""}>Certifications</a>
      <a href="#work" className={activeSection === "work" ? "active" : ""}>Work Experience</a>
      <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
    </nav>
  );
}

export default Navbar;
