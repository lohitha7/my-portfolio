import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#hackathons">Hackathons</a></li>
          <li><a href="#books">Books</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home">
        <h1>Hello, I'm Lohitha Donuri</h1>
        <p>
          I'm a Master's student in Computer Science at Wright State University with a GPA of 3.5. 
          Expected graduation between Dec 2026 and May 2027.
        </p>
        <p>
          I have worked on React projects, Machine Learning projects, and Databases. 
          I'm eager to learn more about AI and ML. Certifications prove my dedication, 
          and hackathon participation shows I'm a hard worker who enjoys learning and improving through coding.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:lohitha@example.com">lohitha@example.com</a></p>
        <p>GitHub: <a href="https://github.com/lohitha7" target="_blank" rel="noopener noreferrer">github.com/lohitha7</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lohitha-donuri" target="_blank" rel="noopener noreferrer">linkedin.com/in/lohitha-donuri</a></p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skill-item">
          <h3>Languages & Frameworks:</h3>
          <p>Python, React, JavaScript, Node.js</p>
        </div>
        <div className="skill-item">
          <h3>Cloud Platforms:</h3>
          <p>AWS</p>
        </div>
        <div className="skill-item">
          <h3>DevOps & Tools:</h3>
          <p>Git, VS Code</p>
        </div>
        <div className="skill-item">
          <h3>Databases:</h3>
          <p>MySQL, MongoDB</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Academic Projects</h2>
        <div className="project-item">
          <h3>Automated Plant Leaf Classification Using CNN and Morphometrics</h3>
          <p className="date">Sep 2023 – Mar 2024</p>
          <ul>
            <li>Developed a custom CNN model and geometric morphometric approach to classify plant species from leaf images.</li>
            <li>Processed a dataset of 1,500 leaf images across 10 species, extracting key geometric and shape features.</li>
            <li>Achieved up to 97% classification accuracy using optimized machine learning models.</li>
          </ul>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="section">
        <h2>Publications</h2>
        <div className="publication-item">
          <p>
            Lohitha D, <em>Plant Species Identification Using a Custom CNN Model and Geometric Morphometrics – A Comparative Analysis</em>, IJISAE 2024.
          </p>
          <p className="publication-date">2024</p>
          <a href="https://www.ijisae.org/index.php/IJISAE/article/view/6772" target="_blank" rel="noopener noreferrer">
            View Paper
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Campus Involvement Part-Time Worker – Ticket Taker</h3>
          <p className="date">Sep 2025 – Present | Nutter Center, Wright State University</p>
          <ul>
            <li>Manage visitor entry and ticketing, providing customer service and support during events.</li>
            <li>Answer phone calls and assist attendees, ensuring smooth operations.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Innovation Entrepreneurship Incubation Center</h3>
          <p className="date">Jun 2021 – May 2024</p>
          <ul>
            <li>Assisted in planning and executing entrepreneurship projects.</li>
            <li>Contributed innovative ideas to support team collaboration and project initiatives.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Volunteer, National Service Scheme (NSS)</h3>
          <p className="date">Jun 2022 – Feb 2024</p>
          <ul>
            <li>Provided assistance in academic and administrative activities within the college.</li>
            <li>Supported peers and faculty, fostering an inclusive campus environment.</li>
          </ul>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="section">
        <h2>Hackathons</h2>
        <div className="card">
          <p>Participated in multiple hackathons, showcasing problem-solving, teamwork, and coding skills under pressure.</p>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="section">
        <h2>Books</h2>
        <div className="card">
          <ul>
            <li><em>Pattern Recognition and Machine Learning</em> — Christopher M. Bishop</li>
            <li><em>Machine Learning: A Probabilistic Perspective</em> — Kevin P. Murphy</li>
            <li><em>Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow</em> — Aurélien Géron</li>
            <li><em>Python Machine Learning</em> — Sebastian Raschka</li>
            <li><em>Artificial Intelligence: A Modern Approach</em> — Stuart Russell & Peter Norvig</li>
            <li><em>Deep Learning</em> — Ian Goodfellow, Yoshua Bengio, and Aaron Courville</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
