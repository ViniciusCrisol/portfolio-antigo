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
              href="https://github.com/ViniciusCrisol/ProductHuntClone"
            >
              github.com/ViniciusCrisol/ProductHuntClone
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              Clone do site ProductHunt, idealizado no curso básico RocketSeat.
              Desenvolvido com Node e React, a aplicação possui um sistema em
              que cadastra produtos no banco de dados e automaticamente exibe os
              dados no front-end.
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              A construção do banco de dados foi feita com o MongoDB, já que a
              aplicação não necessita de tabelas relacionadas e exige uma
              performance alta do back-end.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/YB2Zbyq/Produtos.png"
            >
              <div className="imagensContainerHero bC1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/W3BSRxk/Produto.png"
            >
              <div className="imagensContainerHero bC2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/2KfDmWC/Inserir-Dados.png"
            >
              <div className="imagensContainerHero bC3"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
