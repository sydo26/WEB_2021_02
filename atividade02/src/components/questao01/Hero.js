import React from "react";

import "./Hero.css";

export const Hero = ({ name, img, arena }) => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={img} alt={`hero_${name}`} />
      </div>
      <h4>{name}</h4>
      <span className="hero-arena">{arena}</span>
    </div>
  );
};
