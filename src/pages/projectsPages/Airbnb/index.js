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
            <h1>Clone página inicial do Airbnb</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ViniciusCrisol/CloneAirbnb"
            >
              https://github.com/ViniciusCrisol/CloneAirbnb
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              A página foi desenvolvida em HTML/CSS com o objetivo de estudar
              interfaces. O site não possui responsividade, já que o intuito do
              estudo era compreender melhor a interação de elementos na tela. O
              resultado final foi muito satisfatório, levando em conta que o
              objetivo de resporduzir a interface do site original foi concluído
              com êxito.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/VTX5vJL/Airbnb-Thumb.jpg"
            >
              <div className="imagensContainerHero bB1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/N3yRx5F/2.png"
            >
              <div className="imagensContainerHero bB2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/DK8MNDs/3.jpg"
            >
              <div className="imagensContainerHero bB3"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/7QX76Z6/Screenshot-2020-03-25-Airbnb-Clone.png"
            >
              <div className="imagensContainerHero bB4"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
