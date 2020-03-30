import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AiOutlineGithub } from "react-icons/ai";
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
            <Link to="/">Sobre</Link>
            <Link to="/projects">Projetos</Link>
            <Link className="active" to="/contact">
              Contato
            </Link>
          </div>
        </header>
        <div className="txtName">
          <h1>Vinícius Poloni Crisol</h1>
          <h3>Contato:</h3>
        </div>
        <div className="infoBox">
          <br />
          <br />

          <p>E-mail: vinicius.crisol@etec.sp.gov.br</p>
          <br />
          <p>WhatsApp: (16) 999104-3028</p>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ViniciusCrisol"
          >
            <AiOutlineGithub />
            github.com/ViniciusCrisol
          </a>
        </div>
      </div>
    );
  }
}
