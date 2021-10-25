import { Arena } from "./components/questao01/Arena";
import { Hero } from "./components/questao01/Hero";
import { Enemy } from "./components/questao01/Enemy";

import {
  BOMBINHA_ENEMY_IMG_PATH,
  JUNIN_HERO_IMG_PATH,
  ROXIN_ENEMY_IMG_PATH,
  SEMPERNA_HERO_IMG_PATH,
} from "./components/questao02/constants";
import { World } from "./components/questao03/World";

function App() {
  return (
    <World name="Desconhecido">
      <Arena arena="Deserto">
        <Hero img={JUNIN_HERO_IMG_PATH} name="Junin da capa vermelha" />
        <Enemy img={ROXIN_ENEMY_IMG_PATH} name="Roxinho de espinha" />
      </Arena>
      <Arena arena="Gelo infernal">
        <Hero img={SEMPERNA_HERO_IMG_PATH} name="Pirata sem perna" />
        <Enemy img={BOMBINHA_ENEMY_IMG_PATH} name="Bombinha vermelha" />
      </Arena>
    </World>
  );
}

export default App;
