import React from "react";

import "./World.css";

export const World = ({ name, children }) => {
  return (
    <div className="world">
      <h1>Mundo - {name}</h1>
      {children}
    </div>
  );
};
