import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import "./styles.css";

export default class Main extends Component {
  render() {
    return (
      <div className="corpo">
        <header>
          <div className="links">
            <Link className="active" to="/">
              Sobre
            </Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/">Contato</Link>
          </div>
        </header>
        <div class="hero">
          <div class="diagonal-hero-bg">
            <div class="stars">
              <div class="small"></div>
              <div class="medium"></div>
              <div class="big"></div>
            </div>
          </div>
          <h1>Vinícius Poloni Crisol</h1>
          <h2>Programador full-stack</h2>
        </div>
        <div className="info">
          <h1>Informações</h1>
          <p>
            Programador Francano, amante de javascript. Clique no link abaixo ou
            na aba "projetos" para vizualizar meus trabalhos.
          </p>
          <br />
          <Link to="/projects">Trabalhos</Link>
        </div>
      </div>
    );
  }
}
