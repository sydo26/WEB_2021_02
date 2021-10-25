import React from "react";
import { City } from "./components/City";
import { Info } from "./components/Info";
import { State } from "./components/State";
import {
  CARIUS_IMAGE_PATH,
  FORTALEZA_IMAGE_PATH,
  IGUATU_IMAGE_PATH,
  QUIXADA_IMAGE_PATH,
} from "./constants";

function App() {
  return (
    <div className="app">
      <State>
        <City name="Iguatu" imagePath={IGUATU_IMAGE_PATH} />
        <City name="Quixadá" imagePath={QUIXADA_IMAGE_PATH} />
        <City name="Fortaleza" imagePath={FORTALEZA_IMAGE_PATH} />
        <City name="Cariús" imagePath={CARIUS_IMAGE_PATH} />
      </State>
      <Info />
    </div>
  );
}

export default App;
