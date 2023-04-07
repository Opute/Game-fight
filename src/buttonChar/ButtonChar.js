import React from "react";
import "./ButtonChar.css";

export default function buttonChar(props) {

    function selectChar() {
        props.onClick(props.personagem);
    }

    function printLogoButton() {
        if(props.ativo) {
            return <div className="size">
                <img className="ativo" src={props.personagem.logo}/>
                <p className="logoName">{props.personagem.nome}</p>
            </div>
        } else {
            return <img className="desativo" src={props.personagem.logo}/>
        }
    }

    return <div onClick={selectChar}>{printLogoButton()}</div>
}