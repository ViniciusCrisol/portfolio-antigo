import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AiOutlineGithub } from "react-icons/ai";

import "../../styles.scss";
import "./styles.css";

export default class Main extends Component {
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
            <Link className="active" to="/">
              Sobre
            </Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
          </div>
        </header>
        <div className="txtName">
          <h1>Vinícius Poloni Crisol</h1>
          <h3>Programador Full Stack</h3>
        </div>
        <div className="infoBox">
          <h2>Sobre:</h2>
          <p>
            Desenvolvedor Francano, amante de javaScript. Tenho diversos
            projetos em meu portfólio, para saber mais acesse "Projetos" no menu
            superior ou clique no link abaixo para ser redirecionado.
          </p>
          <br />
          <Link to="/projects">PROJETOS</Link>
        </div>
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ViniciusCrisol"
          >
            <AiOutlineGithub />
            github.com/ViniciusCrisol
          </a>
          <br />
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ViniciusCrisol"
          >
            <AiOutlineGithub />
            Reposítório desse site
          </a>
        </footer>
      </div>
    );
  }
}
