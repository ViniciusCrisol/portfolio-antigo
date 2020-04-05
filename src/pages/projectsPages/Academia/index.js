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
              href="https://github.com/ViniciusCrisol/ControleAcademia"
            >
              github.com/ViniciusCrisol/ControleAcademia
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              Projeto foi construido durante o curso LaunchBase. A aplicação
              realiza um controle de uma academia, cadastrando novos intrutores
              e clientes, possibilitando fazer a edição e remoção dos mesmos.
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              Para seu desenvolvimento foi utilizado um banco de dados local,
              salvando os arquivos em .JSON na raiz do projeto. O sistema de
              componets foi feito utilizando o Nunjucks, que sem dúvidas é
              amelhor opção para isso no desenvolvimento HTML.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/QKG0mb0/Screenshot-2020-03-30-Gyn-Maneger.png"
            >
              <div className="imagensContainerHero bD1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/fSSy9ys/Screenshot-2020-03-30-Gyn-Maneger-1.png"
            >
              <div className="imagensContainerHero bD2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/1RKw05P/Screenshot-2020-03-30-Gyn-Maneger-3.png"
            >
              <div className="imagensContainerHero bD3"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/TY6xmgt/Screenshot-2020-03-30-Gyn-Maneger-4.png"
            >
              <div className="imagensContainerHero bD4"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/y4mmcMj/Screenshot-2020-03-30-Gyn-Maneger-5.png"
            >
              <div className="imagensContainerHero bD5"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/RQgYRq2/Screenshot-2020-03-30-Gyn-Maneger-2.png"
            >
              <div className="imagensContainerHero bD6"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
