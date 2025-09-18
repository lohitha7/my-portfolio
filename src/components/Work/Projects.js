import React from "react";
import "./Projects.css";

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: "Automated Plant Leaf Classification Using CNN and Morphometrics",
      date: "Sep 2023 – Mar 2024",
      details: [
        "Developed a custom CNN model and geometric morphometric approach to classify plant species from leaf images.",
        "Processed 1,500 leaf images across 10 species, extracting key geometric and shape features.",
        "Achieved up to 97% classification accuracy using optimized machine learning models."
      ]
    },
    {
      title: "Information Retrieval System",
      date: "Spring 2025",
      details: [
        "Implemented Boolean retrieval and custom TF-IDF vectorization with modified IDF.",
        "Computed document similarity using Cosine Similarity and Euclidean Distance.",
        "Retrieved top-10 relevant documents per query and evaluated precision, recall, and F1-score.",
        "Outcome: Demonstrated differences in effectiveness between Boolean and vector-space retrieval models."
      ]
    },
    {
      title: "Document Classification with Machine Learning ",
      date: "Spring 2025",
      details: [
        "Classified documents using k-Nearest Neighbors (kNN) and Support Vector Machine (SVM).",
        "Tuned k values (1–10) for kNN; k = 1 achieved 98.5% accuracy.",
        "Compared performance with SVM (98% accuracy), analyzing false positives/negatives.",
        "Outcome: Both classifiers were effective; kNN excelled with clean data, while SVM offered better noise robustness."
      ]
    },
    {
      title: "Community Trouble Shooter",
      date: "2024",
      details: [
        "Developed an end-to-end troubleshooting tool useful for community support scenarios.",
        "Provides self-help resources and guided debug flows to resolve common technical issues.",
        "Built using React for frontend UI and Node.js for backend troubleshooting logic.",
        "Check source code and live demo on GitHub."
      ],
      link: "https://github.com/lohitha7/Community-Trouble-Shooter"
    }
  ];

  return (
    <section className="projects-section">
  {/* REMOVE this back button */}
  {/* <button className="back-btn" onClick={() => setActiveSection(null)}>← Back</button> */}
  <h2>Academic Projects</h2>
  <div className="projects-container">
    {projects.map((project, idx) => (
      <div className="project-item" key={idx}>
        <h3>{project.title}</h3>
        <span className="project-date">{project.date}</span>
        <ul>
          {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">View on GitHub</a>
        )}
      </div>
    ))}
  </div>
</section>

  );
};

export default Projects;
