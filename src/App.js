import React, { useState } from "react";
import "./index.css";

import Character from "./Character";
//import Arena from "./Arena";
//import Win from "./Win";

import image0 from "./Img/image2.svg"
import image1 from "./Img/image3.svg"
import image11 from "./Img/image3_0.svg"
import image00 from "./Img/image3_9.svg"

const Archer = {
  nome: 'Archer',
  logo: image00,
  face: image0,
  firstSkill: {
    nameSkill: 'Flecha Afiada',
    priceTurn: 1,
    damage: 15,
  },
  secondSkill: {
    nameSkill: 'Na Cereja',
    priceTurn: 5,
    damage: 75,
  },
}
const Snyper = {
  nome: 'Snyper',
  logo: image11,
  face: image1,
  firstSkill: {
    nameSkill: 'Tiro Certeiro',
    priceTurn: 2,
    damage: 30,
  },
  secondSkill: {
    nameSkill: 'Head Balls',
    priceTurn: 4,
    damage: 60,
  },
}

const vet = [Archer, Snyper];

function play() {/*next arena*/}

export default function App() {

  return (
    <div className="App">
      <Character vet={vet} play={play}/>
    </div>
  );
}
