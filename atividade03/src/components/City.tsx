import React from "react";

import styled from "./city.module.css";

export type CityProps = {
  name: string;
  imagePath: string;
  votes?: number;
  onChange?: (cityName: string, type: "vote" | "unvote" | "reset") => any;
};

export const City: React.FC<CityProps> = ({
  votes = 0,
  imagePath,
  name,
  onChange = () => null,
}) => {
  function handleClick(type: "vote" | "unvote" | "reset") {
    console.log(`${name}:`, type);
    onChange(name, type);
  }

  return (
    <div className={styled.city}>
      <div className={styled.image}>
        <img src={imagePath} alt={`image_${name}`} />
      </div>
      <div className={styled.body}>
        <h4>{name}</h4>
        <button onClick={() => handleClick("vote")}>👍</button>
        <button disabled={votes === 0} onClick={() => handleClick("unvote")}>
          👎
        </button>
        <button disabled={votes === 0} onClick={() => handleClick("reset")}>
          🔥
        </button>
      </div>

      <span className={styled.votes}>{votes}</span>
    </div>
  );
};
