import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Information Retrieval System</h3>
        <p>
          Built an IR system using the Cranfield dataset with Boolean retrieval
          and custom TF-IDF vectorization. Evaluated using precision, recall, and F1-score.
        </p>
      </div>

      <div className="project">
        <h3>Document Classification with Machine Learning</h3>
        <p>
          Implemented kNN and SVM classifiers, achieving up to 98.5% accuracy.
          Compared models on accuracy and robustness against noisy data.
        </p>
      </div>
    </section>
  );
}

export default Projects;
