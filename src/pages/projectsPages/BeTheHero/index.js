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
            <h1>Be The Hero</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ViniciusCrisol/BeTheHero"
            >
              github.com/ViniciusCrisol/BeTheHero
            </a>
          </div>
        </header>

        <div className="containerHero">
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              O projeto foi desenvolvido durante a semana OmniStack 11. Para sua
              criação foram utilizados React, React-Native e NodeJs. A aplicação
              consiste em uma plataforma que cadastra ONG's e lista casos que
              necessitam de ajuda, possibilitando que os usuários entrem em
              contato para axiliarem estas causas.
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              O aplicativo mobile, desenvolvido com React-Native e ExpoCli
              possui diversas funcionalidades interessantes, destancando-se
              entre elas a paginação infinita na tela de casos e o Deep Linking
              para a abertura do WhatsApp e E-mail com uma mensagem
              personalizada. O banco de dados foi construido em SqLite, já que
              fornece uma ótima estrutura para trabalhar com tabelas
              relacionadas, facilitando o processo na de construção do back-end.
            </p>
          </div>
          <div className="imagensBTH ">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/L5VmyzV/Tela-Inicial.png"
            >
              <div className="imagensContainerHero b1"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/9g5z0Cb/Cadastro.png"
            >
              <div className="imagensContainerHero b2"></div>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/C5dch12/Cadastrar-Caso.png"
            >
              <div className="imagensContainerHero b3"></div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://i.ibb.co/7VKLkKq/Caso-Cadastrado.png"
            >
              <div className="imagensContainerHero b4"></div>
            </a>

            <div className="imagensBTH alingn cel">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/Jm9TZkc/Screenshot-2020-03-26-21-10-34.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel  b5"></div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://i.ibb.co/W5pyPmK/Screenshot-2020-03-26-21-10-48.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel b6"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
