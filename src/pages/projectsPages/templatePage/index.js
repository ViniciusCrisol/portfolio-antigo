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
            <h1>Clone Nubank</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="blank"
              href="https://github.com/ViniciusCrisol/TemplateApp"
            >
              github.com/ViniciusCrisol/TemplateApp
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              Template de um aplicativo. Desenvolvido com objetivo de estudar
              React-Native. Projeto realizado no dia 04/04/2020
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              Aplicação idealizada em React-Native, com auxílio do Expo-cli.
            </p>
          </div>
          <div className="imagensBTH ">
            <div className="imagensBTH alingn cel">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/R7tMc4K/Screenshot-20200404-134225-Expo.jpg"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bH1"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/0Vc6bPf/Screenshot-20200404-134231-Expo.jpg"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bH2"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/0Vc6bPf/Screenshot-20200404-134231-Expo.jpg"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bH3"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
