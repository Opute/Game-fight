import React, { useState } from "react";
import "./index.css";

import LeftRight from "./leftRight/LeftRight";

export default function Character(props) {

  const [ativo, setAtivo] = useState(false);

  return (
    <div className="Character">
      <LeftRight vet={props.vet} ativo={ativo} setAtivo={setAtivo}/>
      <div className="boxSelec">
        <button className="button" onClick={props.play}>Jogar</button>
        <p className="vs">VS</p>
      </div>
      <LeftRight vet={props.vet} ativo={ativo} setAtivo={setAtivo}/>
    </div>
  );
}