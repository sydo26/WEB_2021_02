import React from "react";
import "./index.css";

export type ProfileCardType = {
  info: {
    name: string;
    age: number;
    course: string;
  };
  email: string;
  imageSrc: string;
  location: {
    city: string;
    state: string;
  };
};

export const ProfileCard: React.FC<ProfileCardType> = ({
  info,
  location,
  email,
  imageSrc,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-image">
        <img src={imageSrc} alt="profile" />
      </div>
      <div className="profile-card-hr" />
      <span className="profile-card-name">{info.name}</span>
      <div className="profile-card-body">
        <span className="profile-card-body-description">
          Tenho {info.age} anos, curso {info.course} na UFC do campus de Quixadá
          e minha cidade natal é {`${location.city}/${location.state}`}.
        </span>
        <a
          className="profile-card-body-email"
          href="mailto:viniroque@alu.ufc.br"
        >
          {email}
        </a>
      </div>
    </div>
  );
};
