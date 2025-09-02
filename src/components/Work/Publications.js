import React from "react";
import "./Publications.css";

const Publications = () => {
  const publications = [
    {
      title: "Plant Species Identification Using a Custom CNN Model and Geometric Morphometrics – A Comparative Analysis",
      authors: "K. Srinivasa Chakravarthy, G. Shyama Chandra Prasad, G. Monica, D. Lohitha",
      venue: "International Journal of Intelligent Systems and Applications in Engineering, 2024",
      link: "https://www.ijisae.org/index.php/IJISAE/article/view/6772"
    }
    // You can add more publications here
  ];

  return (
    <section id="publications" className="publications-section">
      <h2>Publications</h2>
      {publications.map((pub, idx) => (
        <div className="publication-item" key={idx}>
          <h3>{pub.title}</h3>
          <p><strong>Authors:</strong> {pub.authors}</p>
          <p><em>{pub.venue}</em></p>
          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="view-btn">
            View Paper
          </a>
        </div>
      ))}
    </section>
  );
};

export default Publications;
