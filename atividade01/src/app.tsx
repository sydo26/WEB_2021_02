import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import "./app.css";

function App() {
  return (
    <div className="app">
      <ProfileCard
        imageSrc={`${process.env.PUBLIC_URL}/resources/profile.jpg`}
        info={{
          name: "Vinícius Roque Maciel Oliveira",
          age: 19,
          course: "Sistemas de Informação",
        }}
        email="viniroque@alu.ufc.br"
        location={{
          city: "Iguatu",
          state: "CE",
        }}
      />
    </div>
  );
}

export default App;
