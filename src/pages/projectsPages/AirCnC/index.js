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
            <h1>AirCnC</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="blank"
              href="https://github.com/ViniciusCrisol/AirCnC"
            >
              github.com/ViniciusCrisol/AirCnC
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              O projeto foi desenvolvido durante a semana OmniStack 09. Para sua
              criação foram utilizados React, React-Native e NodeJs. A aplicação
              consiste em uma plataforma que facilita realizar a reserva de
              Spots de empresas para desenvolvedores.
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              Para a contrução do banco dados da aplicação foi utilizando
              MongoDB, já que o projeto não possui muitas relações entre tabelas
              e exige um banco extremamente performático. A funcionalidade que
              mais se destaca do projeto é a confirmação de reserva que é feita
              em tempo real, para isso foi utilizado o Socket.io, já que ele
              facilita trabalhar com WebSockets, possibilitando que ao realizar
              o pedido de reserva, instantaneamente a solicitação apareça para a
              empresa.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/HxfxvGG/Inicio.jpg"
            >
              <div className="imagensContainerHero bA1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/GtbwYw3/Cadastrar-Spot.jpg"
            >
              <div className="imagensContainerHero bA2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/VDx6mxq/Spots.jpg"
            >
              <div className="imagensContainerHero bA3"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/Ry122n6/Aceitar.jpg"
            >
              <div className="imagensContainerHero bA4"></div>
            </a>

            <div className="imagensBTH alingn cel">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/10xjScn/Login.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel  bA5"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/cQ1wq2w/Empresas.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bA6"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/qmxyqwm/data.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel  bA7"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/JQZSJR9/Reserva-Solicitada.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bA8"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/4N0Dycm/Aprova-o.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel bA9"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
