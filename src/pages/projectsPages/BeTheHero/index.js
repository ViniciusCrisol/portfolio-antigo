import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class BeTheHero extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="links">
            <Link className="projItem" to="/">
              Sobre
            </Link>
            <Link className="projItem" to="/projects">
              Projetos
            </Link>
            <Link className="projItem" to="/">
              Contato
            </Link>
          </div>
        </header>
        <div className="containerHero">
          <div className="containerHeroTxt">
            <h1>Be The Hero</h1>
            <p>
              O projeto Be The Hero foi desenvolvido durante a semana OmniStack
              11. Para sua criação foram utilizados React, React-Native e
              NodeJs, o banco de dados foi construido com SqlLite. A aplicação
              consiste em uma plataforma que cadastra ONG's e lista casos que
              precisam de ajuda, possibilitando que usuários entrem em contato
              para ajudar as causas.
            </p>
          </div>
          <div className="footerHero">
            <p>Acesse o repositório do projeto:</p>
            <a
              target="blank"
              href="https://github.com/ViniciusCrisol/BeTheHero"
            >
              https://github.com/ViniciusCrisol/BeTheHero
            </a>
          </div>
          <div className="imagensBTH">
            <div className="imagensContainerHero b1"></div>
            <div className="imagensContainerHero b2"></div>
            <div className="imagensContainerHero b3"></div>
            <div className="imagensContainerHero b4"></div>
            <div className="imagensBTH alingn">
              <div className="imagensContainerHero imagensContainerHeroCel  b5"></div>
              <div className="imagensContainerHero imagensContainerHeroCel b6"></div>
            </div>
          </div>
        </div>
        <div className="footerHero"></div>
      </div>
    );
  }
}
