import React from "react";
import "./projcard.css";

const Projcard = ({ title, description, link, img }) => {
  return (
    <div>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="card-container"
      >
        {img && <img src={img} alt={title} className="card-proj-img" />}
        {title && <h3 className="card-proj-title">{title}</h3>}
        {description && <p className="card-proj-desc">{description}</p>}
      </a>
    </div>
  );
};

export default Projcard;
