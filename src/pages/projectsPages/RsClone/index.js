import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class BeTheHero extends Component {
  render() {
    return (
      <div>
        <div class="diagonal-hero-bg">
          <div class="stars">
            <div class="small"></div>
            <div class="medium"></div>
            <div class="big"></div>
          </div>
        </div>
        <header>
          <div className="links">
            <Link to="/">Sobre</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
          </div>
          <div className="containerHeroTxt">
            <h1>Clone do site SkyLab</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ViniciusCrisol/Clone-SkyLab"
            >
              github.com/ViniciusCrisol/Clone-SkyLab
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              Clone do site SkyLab da RocketSeat. Desenvolvido em React, com o
              objetivo de estudar desenvolvimento de sites responsivos.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/nMtyCfg/Index.png"
            >
              <div className="imagensContainerHero bB1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/M7z7Zm5/Cadastro.png"
            >
              <div className="imagensContainerHero bB2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/4YvnwGx/Login.png"
            >
              <div className="imagensContainerHero bB3"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
