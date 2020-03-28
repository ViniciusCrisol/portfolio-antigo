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
            <p>Acesse o repositório do projeto:</p>
            <a
              target="blank"
              href="https://github.com/ViniciusCrisol/BeTheHero"
            >
              https://github.com/ViniciusCrisol/BeTheHero
            </a>
          </div>
          <div className="descProj">
            <p>
              <strong>Geral:</strong>
            </p>
            <p>
              O projeto foi desenvolvido durante a semana OmniStack 11. Para sua
              criação foram utilizados React, React-Native e NodeJs. A aplicação
              consiste em uma plataforma que cadastra ONG's e lista casos que
              precisam de ajuda, possibilitando que usuários entrem em contato
              para ajudar as causas.
            </p>
            <p>
              <strong>Descrição técnica:</strong>
            </p>
            <p>
              O aplicativo mobile possui diversas funcionalidades, destancando
              entre elas a paginação infinita na tela de casos e o Deep Linking
              para a abertura do WhatsApp e E-mail com uma mensagem
              personalizada de acordo com cada caso. O banco de dados foi
              construido em SqLite, já que fornece uma ótima estrutura para
              trabalhar com tabelas relacionadas, facilitando o trabalho na hora
              de contruir o beck-end.
            </p>
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
      </div>
    );
  }
}
