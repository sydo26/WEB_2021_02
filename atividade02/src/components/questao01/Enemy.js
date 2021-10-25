import React from "react";

import "./Enemy.css";

export const Enemy = ({ name, img, arena }) => {
  return (
    <div className="enemy">
      <div className="enemy-image">
        <img src={img} alt={`enemy_${name}`} />
      </div>
      <h4>{name}</h4>
      <span className="enemy-arena">{arena}</span>
    </div>
  );
};
