import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class repositorios extends Component {
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
            <h1>Página que lista repositórios do GithHub</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ViniciusCrisol/ListarRepositorios"
            >
              github.com/ViniciusCrisol/ListarRepositorios
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              A aplicação busca repositórios do github conforme o nome inserido
              e lista as buscas. Possibilitando que o usuário acesse o
              repositório e tenha mais informações
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              O site foi desenvolvido em react e conta com a API do github para
              pesquisa de repositórios.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/VTX5vJL/Airbnb-Thumb.jpg"
            >
              <div className="imagensContainerHero bI1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/N3yRx5F/2.png"
            >
              <div className="imagensContainerHero bI2"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
