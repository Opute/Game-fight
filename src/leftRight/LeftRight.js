import React, { useState } from "react";
import "./LeftRight.css";

import ButtonChar from "../buttonChar/ButtonChar";

export default function leftRight(props) {

  const [obnome, setObnome] = useState();

  function text() {return <p className="textChoice">SELECIONE<br/>UM<br/>PERSONAGEM</p>}

  function getName(nome) {
    setObnome(nome);
    props.setAtivo = (true);
  }

  function exibirTextOuImg(obnome) {
    if(props.ativo) {
      return <div className="position">
        <img className="ativoBig" src={obnome.face}/>;
        <p className="textChoice">{obnome.nome}</p>
      </div>
    } else {return text()}
  }

  function exibirLogos() {
    const arrayChamp = []
    for (let i = 0; i < props.vet.length; i++) {
      arrayChamp[i] = <ButtonChar personagem={props.vet[i]} onClick={getName} ativo={props.ativo} key={i}/>
    }
    return arrayChamp;
  }  

  /*
  arrumar cores
  */

  return(
  <div className="boxSelec colorRed">
      {exibirTextOuImg(obnome)}
      <div className="alimImg">{exibirLogos()}</div>
  </div>
  );
}